import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Toast from 'react-native-toast-message';
import CheckBox from 'expo-checkbox';
import TextButton from '../components/TextButton';
import Space from '../components/Space';
import IconButton from '../components/IconButton';
import IconTextInput from '../components/IconTextInput';

// HERE: Firebase signup
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CONFIG from '../utils/consts/config';

const RegisterScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [validated, setValidated] = useState(false);

  const [fullName, setFullName] = useState('');
  const [fullNameValid, setFullNameValid] = useState(true);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

  const validation = () => {
    if (fullName == '') {
      setFullNameValid(false);
      setValidated(false);
    } else {
      if (fullNameRegex.test(fullName) == false) {
        setFullNameValid(false);
        setValidated(false);
      } else {
        setFullNameValid(true);
      }
    }

    if (email == '') {
      setEmailValid(false);
      setValidated(false);
    } else {
      if (emailRegex.test(email) == false) {
        setEmailValid(false);
        setValidated(false);
      } else {
        setEmailValid(true);
      }
    }

    if (password == '' || password.length < 6) {
      setPasswordValid(false);
      setValidated(false);
    } else {
      setPasswordValid(true);
    }

    if (fullNameValid && emailValid && passwordValid) {
      setValidated(true);
    }
    return;
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
  /**
   * User Signup
   * @returns
   */
  const signup = async () => {
    const auth = getAuth();
    setValidated(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        signOut(getAuth()).then(() => console.log('Cache clear'));
        firestore()
          .collection('users')
          .doc(getAuth().currentUser.uid)
          .set({
            name: fullName,
            email: email,
            uid: getAuth().currentUser.uid,
          })
          .then(response => {
            addUser(user.user.uid);
            alert('User successfully registered! Please Login.');
            navigation.replace('Login');
          })
          .catch(error => {
            console.log(error);
            alert('User register failed!');
            setValidated(true);
          });
      })
      .catch(error => {
        console.log(error);
        alert('User register failed!');
        setValidated(true);
      });
  };

  useEffect(() => {
    validation();
  }, [fullName, email, password]);

  return (
    <ImageBackground
      source={require('../assets/images/welcome.png')}
      style={styles.backgroundImage}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Welcome');
            }}>
            <Image
              source={require('../assets/images/back.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/logo_1.png')}
            style={styles.logo}
          />
          <Space height={20} />
          <Text style={styles.title}>Create your new account</Text>
          <Space height={10} />
          <Text style={styles.description}>
            Already have an account?{' '}
            <Text
              style={styles.register}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Login
            </Text>
          </Text>

          <Space height={30} />
          <IconTextInput
            placeholder="Full Name"
            image={require('../assets/images/user.png')}
            value={fullName}
            onChangeText={setFullName}
            valid={fullNameValid}
          />
          <Space height={20} />
          <IconTextInput
            placeholder="Email Address"
            image={require('../assets/images/email.png')}
            value={email}
            onChangeText={setEmail}
            valid={emailValid}
          />
          <Space height={20} />
          <IconTextInput
            placeholder="Password"
            image={require('../assets/images/lock.png')}
            value={password}
            onChangeText={setPassword}
            valid={passwordValid}
            secureTextEntry={true}
          />
          <Space height={20} />
          <TextButton
            title="Continue with email"
            fontSize={16}
            enable={validated}
            onPress={async () => {
              const result = await signup();
              if (result) {
                navigation.navigate('Login');
              }
            }}
          />
          <Text style={styles.description}>
            By tapping continue i agree to the{' '}
            <Text style={styles.terms}>Terms of service.</Text>
          </Text>
          <Space height={10} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'contain' if you want to fit the image within the screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
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
  register: {
    color: '#246bbc',
  },
  floatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchSection: {
    marginHorizontal: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  customInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius: 20,
    backgroundColor: '#fff',
    color: '#424242',
  },
  terms: {
    color: '#246bbc',
  },
});

export default RegisterScreen;
