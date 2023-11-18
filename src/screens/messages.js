import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import Space from '../components/Space';

// HERE: Firestore message
import firestore from '@react-native-firebase/firestore';
import {getAuth, auth} from '@react-native-firebase/auth';

const Messages = ({navigation}) => {
  const [tab, setTab] = useState(true);


  // HERE: Firestore message
  const [users, setUsers] = useState(null)
  
  const getUsers = async ()=> {
    const querySanp = await firestore().collection('users').where('uid','!=',getAuth().currentUser.uid).get()
    const allUsers = querySanp.docs.map(docSnap=>docSnap.data())

    setUsers(allUsers)
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Messages</Text>
        </View>
        <Space height={16} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setTab(!tab)}>
            <View
              style={{
                backgroundColor: tab ? '#003580' : 'white',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                borderWidth: 1,
                borderColor: '#003580',
                width: 120,
              }}>
              <Text
                style={{textAlign: 'center', color: tab ? 'white' : '#003580'}}>
                In progress
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(!tab)}>
            <View
              style={{
                backgroundColor: !tab ? '#003580' : 'white',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderWidth: 1,
                borderColor: '#003580',
                width: 120,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: !tab ? 'white' : '#003580',
                }}>
                History
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 16,
              paddingHorizontal: 32,
            }}>
            <Image
              source={require('../assets/images/yacht_2.png')}
              style={{width: 60, height: 60, borderRadius: 60}}
            />
            <Space width={16} />
            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  Muhammad,
                </Text>
                <Space width={4} />
                <Text style={{fontSize: 16, color: 'black'}}>
                  971-50-123-4567
                </Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#093373'}}>
                  Luxury 60 Feet Majesty YACHT{' '}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Space height={8} />
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            borderStyle: 'solid',
          }}></View>
        <Space height={8} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 16,
              paddingHorizontal: 32,
            }}>
            <Image
              source={require('../assets/images/yacht_2.png')}
              style={{width: 60, height: 60, borderRadius: 60}}
            />
            <Space width={16} />
            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                  Muhammad,
                </Text>
                <Space width={4} />
                <Text style={{fontSize: 16, color: 'black'}}>
                  971-50-123-4567
                </Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', color: '#093373'}}>
                  Luxury 60 Feet Majesty YACHT{' '}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Space height={8} />
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            borderStyle: 'solid',
          }}></View>
      </ScrollView>

      {/* HERE: Firebase message */}
      {/* <ScrollView>
        <View style={styles.scrollContainer}>
            <FlatList
                data={users}
                keyExtractor={(item)=>item.uid}
                renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Chats', {name: item.name, uid: item.uid})} >
                    <View style={styles.card} >
                        <Image style={styles.userImageST} source={{uri: 'https://placeimg.com/140/140/any'}} />
                      <View style={styles.textArea}>
                    <Text style={styles.nameText} >{item.name}</Text>
                    <Text style={styles.msgContent} >{item.email}</Text>
                    </View>
                    </View>
                    </TouchableOpacity>
                )}
                />
          </View>
        </ScrollView> */}
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
            <Text style={{fontSize: 13}}>Favourites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/message_focus.png')}
              style={{width: 24, height: 22}}
            />
            <Text style={{fontSize: 13, color: '#246bbc'}}>Messages</Text>
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
            <Text style={{fontSize: 13}}>Search</Text>
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
            <Text style={{fontSize: 13}}>Bookings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/profile.png')}
              style={{width: 15, height: 22}}
            />
            <Text style={{fontSize: 13}}>Profile</Text>
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

export default Messages;
