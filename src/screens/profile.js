import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Space from '../components/Space';
import {
  auth,
  getAuth,
  signOut,
  onAuthStateChanged,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState([]);

  const getUserInfo = async () => {
    firestore()
      .collection('users')
      .doc(getAuth().currentUser.uid)
      .get()
      .then(response => {
        setUser(response._data);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const signout = () => {
    signOut(getAuth()).then(() => navigation.replace('Welcome'));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Profile</Text>
        </View>
        <View style={{paddingHorizontal: 8, paddingVertical: 16}}>
          <TouchableOpacity>
            <View style={[styles.float, {alignItems: 'center', padding: 16}]}>
              <View>
                <View style={styles.float}>
                  <Image
                    source={require('../assets/images/avatar.png')}
                    style={{width: 50, height: 50, borderRadius: 30}}
                  />
                  <View style={{paddingLeft: 16}}>
                    <Text
                      style={{
                        color: '#093373',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      {user.name}
                    </Text>
                    <Text style={{color: '#5A5A5A'}}>Click view and edit</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('../assets/images/forward.png')}
                style={{width: 10, height: 20}}
              />
            </View>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Favourite');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/heart.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>Favourites</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Message');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/message.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>Messages</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/list.png')}
                style={{width: 30, height: 30, marginRight: 2}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>Listings</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Booking');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/booking.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>Bookings</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/setting.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>App settings</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/contact.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>Contact us</Text>
            </View>
          </TouchableOpacity>
          <Space height={8} />
          <View style={{borderBottomWidth: 0.5, borderStyle: 'solid'}}></View>
          <Space height={8} />
          <TouchableOpacity onPress={signout}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 24,
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/logout.png')}
                style={{width: 32, height: 30}}
              />
              <Space width={16} />
              <Text style={{fontSize: 18, color: 'rgba(0,0,0,0.7)'}}>Log out</Text>
            </View>
          </TouchableOpacity>

          <Space height={8} />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favourite');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/heart.png')}
              style={{width: 22, height: 22}}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Favourites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/message.png')}
              style={{width: 24, height: 22}}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Messages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/search.png')}
              style={{width: 20, height: 22}}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/book.png')}
              style={{width: 22, height: 22}}
            />
            <Text style={{fontSize: 13, color: 'black'}}>Bookings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/profile_focus.png')}
              style={{width: 15, height: 22}}
            />
            <Text style={{fontSize: 13, color: '#246bbc'}}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  header: {
    width: '100%',
    height: 80,
    padding: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: '#003580',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
});

export default Profile;
