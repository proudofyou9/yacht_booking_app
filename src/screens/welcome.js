import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import TextButton from '../components/TextButton';
import Space from '../components/space';
import IconButton from '../components/IconButton';
const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/welcome.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
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
          onPress={() => {
            console.log('OK');
          }}
        />
        <View style={styles.buttonContainer}>
          <IconButton icon="apple" />
          <IconButton icon="google" />
        </View>
        <Space height={15} />
        <Text style={styles.description}>
          By tapping continue i agree to the Terms of service.
        </Text>
        <Space height={40} />

        <Text style={styles.description}>Already have an account? Login</Text>
        <Space height={60} />
      </View>
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
});

export default WelcomeScreen;