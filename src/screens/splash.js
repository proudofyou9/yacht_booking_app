import React, {useState, useEffect} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import auth from "@react-native-firebase/auth";
import firebase from "@react-native-firebase/app"
import firebaseConfig from '../firebase'

const SplashScreen = ({navigation}) => {

  const [user, setUser] = React.useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // onAuthStateChanged(firebaseAuth, (user) => {
  //   if (user) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // });

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    const timer = setTimeout(() => {
      // const userCheck = firebase.auth().onAuthStateChanged(userExist=>{
      //   if(userExist) {
      //     setUser(userExist);
      //     navigation.navigate('Search');
      //   }
      //   else {
      //     setUser("");
      //     navigation.navigate('Welcome'); // Replace 'WelcomeScreen' with the name of your welcome screen component
      //   }
      // })
      // return () => {
      //   userCheck()
      //   console.log(user);
      // }

      // navigation.navigate('Welcome'); // Replace 'WelcomeScreen' with the name of your welcome screen component

      // navigation.replace(
      //   auth().currentUser ? "Search" : "Welcome"
      // );
      navigation.replace('Search');
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts before the timer expires
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/splash.png')}
      style={styles.backgroundImage}>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' if you want to fit the image within the screen
  },
});

export default SplashScreen;
