import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TextButton from '../components/TextButton';
import Space from '../components/Space';
import IconButton from '../components/IconButton';
import Toast from 'react-native-toast-message';

// import FingerprintScanner from 'react-native-fingerprint-scanner';
import {getAuth, signInWithCredential, GoogleAuthProvider, AppleAuthProvider, OAuthProvider} from '@react-native-firebase/auth';
import {
  appleAuth,
  appleAuthAndroid,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {v4 as uuid} from 'uuid';
import {WEB_CLIENT_ID} from '../utils/consts/config';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import CONFIG from '../utils/consts/config';

const WelcomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [biometryType, setBiometryType] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const googleSignInConfiguration = async () => {
    GoogleSignin.configure({
      webClientId:
        WEB_CLIENT_ID,
      offlineAccess: true,
    })
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const addUser = async id => {
    const response = await fetch(CONFIG.API_URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        type: 1,
      }),
    });
    await response.json();
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;
      const googleCredential = await GoogleAuthProvider.credential(idToken);
      const user = await signInWithCredential(getAuth(), googleCredential);
      console.log(user.user);
      if (user) {
        firestore()
          .collection('users')
          .doc(user.user.uid)
          .set({
            name: user.user.displayName,
            email: user.user.email,
            uid: user.user.uid,
          })
          .then(response => {
            alert('User successfully registered!');
            addUser(user.user.uid);
            navigation.replace('Search');
          })
          .catch(error => {
            console.log(error);
            alert('User register failed!');
          });
      }
    } catch (error) {
      console.log(error);
      alert('Signin with Google account failed!')
    }
  };

  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: 1,
        requestedScopes: [
          0,
          1,
        ],
      })
      const response = appleAuthRequestResponse
      
    } catch (error) {
      console.log(error)
      alert("AppleAuth is not supported on the device.")
    }
  };

  const getMessage = () => {
    if (biometryType == 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  useEffect(() => {
    googleSignInConfiguration()
    // FingerprintScanner.isSensorAvailable()
    //   .then(biometryType => {
    //     setBiometryType(biometryType);
    //   })
    //   .catch(error => console.log('isSensorAvailable error => ', error));
  }, []);

  const showAuthenticationDialog = async () => {
    if (biometryType !== null && biometryType !== undefined) {
      const rnBiometrics = new ReactNativeBiometrics();

      const {available, biometryType} = await rnBiometrics.isSensorAvailable();

      if (!available || biometryType !== BiometryTypes.FaceID) {
        Alert.alert('Oops!', 'Face ID is not available on this device.');
        return;
      }

      const userId = await AsyncStorage.getItem('userId');

      if (!userId) {
        Alert.alert(
          'Oops!',
          'You have to sign in using your credentials first to enable Face ID.',
        );
        return;
      }

      const timestamp = Math.round(new Date().getTime() / 1000).toString();
      const payload = `${userId}__${timestamp}`;

      const {success, signature} = await rnBiometrics.createSignature({
        promptMessage: 'Sign in',
        payload,
      });

      if (!success) {
        Alert.alert(
          'Oops!',
          'Something went wrong during authentication with Face ID. Please try again.',
        );
        return;
      }

      const {status, message} = await verifySignatureWithServer({
        signature,
        payload,
      });

      if (status !== 'success') {
        Alert.alert('Oops!', message);
        return;
      }

      Alert.alert('Success!', 'You are successfully authenticated!');
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/welcome.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.centerContainer}>
            <Space height={30} />
            <Image
              source={require('../assets/images/logo_1.png')}
              style={styles.logo}
            />
            <Space height={20} />
            <Text style={styles.title}>Welcome</Text>
            <Space height={10} />
            <Text style={styles.description}>
              Create an account to get an exciting offers
            </Text>
            <Space height={30} />
            <TextButton
              title="Continue with email"
              fontSize={16}
              enable={true}
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
            <View style={styles.buttonContainer}>
              <IconButton
                icon="apple"
                onPress={async () => onAppleButtonPress()}
              />
              <IconButton
                icon="google"
                onPress={async () => {
                  const response = await onGoogleButtonPress();
                  if (response == true) {
                    navigation.navigate('Search');
                  }
                }}
              />
            </View>
            <Space height={15} />
            <Text style={styles.description}>
              By tapping continue i agree to the{' '}
              <Text style={styles.terms}>Terms of service.</Text>
            </Text>
            <Space height={40} />
            <Text style={styles.description}>
              Already have an account?&nbsp;
              <Text
                style={styles.underline}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Login
              </Text>
            </Text>
            <Space height={60} />
          </View>
        </ScrollView>
      </View>
      <BottomModal
        visible={modalVisible}
        onClose={handleCloseModal}
        // showAuthenticationDialog={showAuthenticationDialog}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description: {
    color: 'grey',
    fontSize: 14,
    alignSelf: 'center',
  },
  terms: {
    color: '#246bbc',
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#246bbc',
  },
});

export default WelcomeScreen;

const BottomModal = ({visible, onClose}) => {
  const [face, setFace] = useState(false);

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 16,
    },
  });

  const resetFace = () => {
    setFace(false);
    onClose();
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 18}}>Apple ID</Text>
              <TouchableOpacity onPress={resetFace}>
                <Image
                  source={require('../assets/images/close.png')}
                  style={[styles.logo, {width: 24, height: 24}]}
                />
              </TouchableOpacity>
            </View>
            <Space height={16} />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/logo_1.png')}
                style={[styles.logo, {width: 60, height: 60}]}
              />
            </View>
            <Space height={16} />
            <View style={{paddingHorizontal: 24}}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                {
                  'Do you want to sign in to Easycharter \n with your Apple ID \n“ loremipsum@icloud.com”'
                }
              </Text>
            </View>
            <Space height={4} />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {face ? (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      // showAuthenticationDialog();
                    }}>
                    <Image
                      source={require('../assets/images/face.png')}
                      style={[styles.logo, {width: 40, height: 40}]}
                    />
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center'}}>{'Face \nID'}</Text>
                </View>
              ) : (
                <TextButton
                  title="Continue"
                  fontSize={16}
                  enable={true}
                  style={{paddingHorizontal: 32, height: 48}}
                  onPress={() => {
                    setFace(true);
                  }}
                />
              )}
            </View>
            <Space height={8} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
