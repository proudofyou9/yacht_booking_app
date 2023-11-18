import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  TextInput,
} from 'react-native';

import Space from '../../components/Space';
import {Image} from 'react-native-elements';
import YachtCard from '../../components/YachtCard';
import TextButton from '../../components/TextButton';

const Home = ({navigation, setStatus}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [guest, setGuest] = useState('');
  const [list, setList] = useState({});
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const getYachtList = async () => {
    const response = await fetch('http://192.168.143.81:7000/api/v1/yachts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    await setList(data);
  };
  useEffect(() => {
    getYachtList();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.topSection}>
          <Space height={40} />
          <View style={styles.locationSection}>
            <Image
              source={require('../../assets/images/location.png')}
              style={[styles.icon, styles.left]}
            />
            <View style={[styles.left, styles.locationText]}>
              <Text style={{color: 'rgba(255,255,255, 0.5)'}}>
                Your Location
              </Text>
              <Text style={styles.location}>Lorem Ipsum </Text>
            </View>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={[styles.icon, styles.right, {borderRadius: 8}]}
            />
          </View>
          <Space height={20} />
          <View style={styles.label}>
            <Text style={[styles.location, {fontSize: 18, fontWeight: 'bold'}]}>
              With Luxury Yachts
            </Text>
            <Text style={[styles.location, {fontSize: 18, fontWeight: 'bold'}]}>
              Relax on this planet...
            </Text>
          </View>
          <Space height={20} />
          <TouchableOpacity onPress={openModal}>
            <View style={styles.searchField}>
              <Image
                source={require('../../assets/images/search.png')}
                style={styles.searchIcon}
              />
              <Text style={styles.searchLabel}>Where do you want to sail?</Text>
            </View>
          </TouchableOpacity>
          <Space height={20} />

          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 24,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
            }}></View>
        </View>

        <View style={styles.main}>
          <View>
            <View>
              <Text
                style={{
                  color: 'rgba(0,0,0,0.7)',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Type
              </Text>
              <Space height={10} />
              <ScrollView
                style={styles.carousel}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/type_1.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Space height={8} />
                  <Text
                    style={[
                      styles.textAlignCenter,
                      {fontSize: 16, color: 'rgba(0,0,0,0.7)'},
                    ]}>
                    Yacht
                  </Text>
                </View>
                <Space width={20} />
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/type_2.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Space height={8} />
                  <Text
                    style={[
                      styles.textAlignCenter,
                      {fontSize: 16, color: 'rgba(0,0,0,0.7)'},
                    ]}>
                    RIB
                  </Text>
                </View>
                <Space width={20} />
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/type_3.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Space height={8} />
                  <Text
                    style={[
                      styles.textAlignCenter,
                      {fontSize: 16, color: 'rgba(0,0,0,0.7)'},
                    ]}>
                    HouseBoat
                  </Text>
                </View>
              </ScrollView>
            </View>
            <Space height={20} />
            <View>
              <Text
                style={{
                  color: 'rgba(0,0,0,0.7)',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Popular Destination
              </Text>
              <Space height={10} />
              <ScrollView
                style={styles.carousel}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/destination_1.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Space height={8} />
                  <Text
                    style={[
                      styles.textAlignCenter,
                      {fontSize: 16, color: 'rgba(0,0,0,0.7)'},
                    ]}>
                    Dubai, Marina
                  </Text>
                </View>
                <Space width={20} />
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/destination_2.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Space height={8} />
                  <Text
                    style={[
                      styles.textAlignCenter,
                      {fontSize: 16, color: 'rgba(0,0,0,0.7)'},
                    ]}>
                    Abu dhabi
                  </Text>
                </View>
                <Space width={20} />
                <View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/destination_3.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Space height={8} />
                  <Text
                    style={[
                      styles.textAlignCenter,
                      {fontSize: 16, color: 'rgba(0,0,0,0.7)'},
                    ]}>
                    Ras Al Khaimah
                  </Text>
                </View>
              </ScrollView>
            </View>
            <Space height={20} />

            <View>
              <Text
                style={{
                  color: '#00144A',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Popular Listing
              </Text>
              <Space height={10} />
              {list.length == 0 ? (
                <View><Text style={{textAlign: 'center'}}>There is no yachts.</Text></View>
              ) : (
                Object.entries(list).map((item, index) => {
                  return (
                    <View key={index}>
                      <YachtCard
                        data={item}
                        onPress={() => {
                          navigation.navigate('Info');
                        }}
                      />
                      <Space height={30} />
                    </View>
                  );
                })
              )}
            </View>
          </View>
        </View>
      </View>
      <Space height={80} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.leftComponent} onPress={closeModal}>
              <Image
                source={require('../../assets/images/arrow_left.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Search</Text>
            <TouchableOpacity style={styles.rightComponent} onPress={() => {}}>
              <Image
                source={require('../../assets/images/filter.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 16,
              backgroundColor: 'white',
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                borderBottomColor: 'rgba(0,20,74, 0.2)',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/point.png')}
                style={{width: 20, height: 20}}
              />
              <Space width={16} />
              <TextInput
                style={{fontWeight: 'bold', padding: 0, width: '80%'}}
                value={location}
                placeholder="Dubai, United Arab Emirates "
                onChangeText={setLocation}
              />
            </View>
            <SafeAreaView>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  borderBottomColor: 'rgba(0,20,74, 0.2)',
                  borderBottomWidth: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/images/calendar.png')}
                  style={{width: 20, height: 20}}
                />
                <Space width={16} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Date</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                borderBottomColor: 'rgba(0,20,74, 0.2)',
                borderBottomWidth: 1,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/group.png')}
                style={{width: 20, height: 20}}
              />
              <Space width={16} />
              <TextInput
                style={{fontWeight: 'bold', padding: 0, width: '80%'}}
                value={guest}
                keyboardType="numeric"
                placeholder="Number of Guests "
                onChangeText={setGuest}
              />
            </View>
            <View style={{paddingHorizontal: 16}}>
              <TextButton
                title={'Search'}
                enable={true}
                onPress={() => {
                  setStatus(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    overflow: 'scroll',
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
  topSection: {
    backgroundColor: '#246bbc',
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
    marginRight: 8,
  },
  locationText: {
    paddingHorizontal: 8,
  },
  location: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  label: {
    paddingLeft: 16,
  },
  searchField: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    height: 56,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 16,
    width: 20,
    height: 22,
  },
  searchLabel: {
    marginVertical: 16,
    flex: 1,
    color: '#323A3E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  carousel: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 60,
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: 'rgba(0,0,0, 0.7)',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
