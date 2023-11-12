import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Toast from 'react-native-toast-message';
import CheckBox from 'expo-checkbox';
import TextButton from '../components/TextButton';
import Space from '../components/Space';
import IconButton from '../components/IconButton';
import IconTextInput from '../components/IconTextInput';
const LoginScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validation = () => {
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

    if (password == '') {
      setPasswordValid(false);
      setValidated(false);
    } else {
      setPasswordValid(true);
    }

    if (emailValid && passwordValid) {
      setValidated(true);
    }
    return;
  };

  const login = async () => {
    try {
      const userData = {
        email: email,
        password: password,
        type: 1,
      };
      const response = await fetch(
        'http://gmcharter.syshosting.com:7000/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
      );

      const data = await response.json();
      console.log(data);
      if (!data.message) {
        showToast('success', 'Success', 'You are logined!');
        return true;
      } else {
        showToast('error', 'Error', 'Your credential is incorrect.');
        return false;
      }
    } catch (error) {
      showToast(
        'error',
        'Error',
        'Server Error. Please check network connection.',
      );
      return false;
    }
  };

  const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      position: 'bottom',
    });
  };
  
  useEffect(() => {
    validation();
  }, [email, password]);

  return (
    <ImageBackground
      source={require('../assets/images/welcome.png')}
      style={styles.backgroundImage}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Welcome');
          }}>
            <Image
              source={require('../assets/images/back.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <Space height={40} />

          <Image
            source={require('../assets/images/logo_1.png')}
            style={styles.logo}
          />
          <Space height={20} />
          <Text style={styles.title}>Welcome Back</Text>
          <Space height={10} />
          <Text style={styles.description}>
            Do not have an account?{' '}
            <Text
              style={styles.register}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Register
            </Text>
          </Text>

          <Space height={30} />
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
          <View style={styles.floatContainer}>
            <View style={styles.left}>
              <View style={styles.row}>
                <CheckBox
                  color="#246bbc"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text> Remeber Password</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Text>Forgot password?</Text>
            </View>
          </View>
          <Space height={30} />

          <TextButton
            title="Login"
            fontSize={16}
            enable={validated}
            onPress={async () => {
              const result = await login();
              if (result) {
                navigation.navigate('Search');
              }
            }}
          />
          <Space height={30} />
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
});

export default LoginScreen;
