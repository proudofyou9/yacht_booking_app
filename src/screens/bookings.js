import React, {useEffect, useState} from 'react';
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

const Booking = ({navigation}) => {
  const [tab, setTab] = useState(0);
  const [order, setOrder] = useState(false);
  const [order1, setOrder1] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Bookings</Text>
        </View>
        <Space height={16} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setTab(0)}>
            <View
              style={{
                backgroundColor: tab == 0 ? '#003580' : 'white',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                borderWidth: 1,
                borderColor: '#003580',
                width: 100,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: tab == 0 ? 'white' : '#003580',
                }}>
                Current
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(1)}>
            <View
              style={{
                backgroundColor: tab == 1 ? '#003580' : 'white',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderWidth: 1,
                borderColor: '#003580',
                width: 100,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: tab == 1 ? 'white' : '#003580',
                }}>
                Completed
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(2)}>
            <View
              style={{
                backgroundColor: tab == 2 ? '#003580' : 'white',
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                borderWidth: 1,
                borderColor: '#003580',
                width: 100,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: tab == 2 ? 'white' : '#003580',
                }}>
                Cancelled
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {tab == 0 ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Image
                source={require('../assets/images/yacht_2.png')}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
              <Space width={16} />
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#093373',
                    }}>
                    Luxury 60 Feet Majesty YACHT{' '}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                    $1800,
                  </Text>
                  <Space width={4} />
                  <Text style={{fontSize: 16, color: 'black'}}>
                    &nbsp; 6hrs, 10/03/2023 10:00
                  </Text>
                </View>
                <Space height={8} />
                {!order ? (
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={() => setOrder(true)}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 2,
                          paddingHorizontal: 4,
                          borderWidth: 1,
                          borderColor: '#FF264F',
                          borderRadius: 4,
                          width: 90,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#FF264F',
                          }}>
                          Cancel
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <Space width={8} />

                    <TouchableOpacity
                      onPress={() => navigation.navigate('Book')}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 2,
                          paddingHorizontal: 4,
                          borderWidth: 1,
                          borderColor: '#003580',
                          borderRadius: 4,
                          width: 90,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#003580',
                          }}>
                          Reschedule
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View></View>
                    <TouchableOpacity onPress={() => setOrder(false)}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 2,
                          paddingHorizontal: 4,
                          borderWidth: 1,
                          borderColor: '#003580',
                          borderRadius: 4,
                          width: 90,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#003580',
                          }}>
                          Reorder
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <Space height={8} />
            <View
              style={{
                borderColor: 'black',
                borderBottomWidth: 0.5,
                borderStyle: 'solid',
              }}></View>
            <Space height={8} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Image
                source={require('../assets/images/yacht_2.png')}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
              <Space width={16} />
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#093373',
                    }}>
                    Luxury 60 Feet Majesty YACHT{' '}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                    $1800,
                  </Text>
                  <Space width={4} />
                  <Text style={{fontSize: 16, color: 'black'}}>
                    &nbsp; 6hrs, 10/03/2023 10:00
                  </Text>
                </View>
                <Space height={8} />
                {!order1 ? (
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={() => setOrder1(true)}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 2,
                          paddingHorizontal: 4,
                          borderWidth: 1,
                          borderColor: '#FF264F',
                          borderRadius: 4,
                          width: 90,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#FF264F',
                          }}>
                          Cancel
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <Space width={8} />
                    <TouchableOpacity onPress={() => navigation.navigate('Book')}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 2,
                          paddingHorizontal: 4,
                          borderWidth: 1,
                          borderColor: '#003580',
                          borderRadius: 4,
                          width: 90,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#003580',
                          }}>
                          Reschedule
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View></View>
                    <TouchableOpacity onPress={() => setOrder1(false)}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          paddingVertical: 2,
                          paddingHorizontal: 4,
                          borderWidth: 1,
                          borderColor: '#003580',
                          borderRadius: 4,
                          width: 90,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#003580',
                          }}>
                          Reorder
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <Space height={8} />
            <View
              style={{
                borderColor: 'black',
                borderBottomWidth: 0.5,
                borderStyle: 'solid',
              }}></View>
          </>
        ) : tab == 1 ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Image
                source={require('../assets/images/yacht_2.png')}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
              <Space width={16} />
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#093373',
                    }}>
                    Luxury 60 Feet Majesty YACHT{' '}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                    $1800,
                  </Text>
                  <Space width={4} />
                  <Text style={{fontSize: 16, color: 'black'}}>
                    &nbsp; 6hrs, 10/03/2023 10:00
                  </Text>
                </View>
                <Space height={8} />
              </View>
            </View>
            <Space height={8} />
            <View
              style={{
                borderColor: 'black',
                borderBottomWidth: 0.5,
                borderStyle: 'solid',
              }}></View>
            <Space height={8} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Image
                source={require('../assets/images/yacht_2.png')}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
              <Space width={16} />
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#093373',
                    }}>
                    Luxury 60 Feet Majesty YACHT{' '}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                    $1800,
                  </Text>
                  <Space width={4} />
                  <Text style={{fontSize: 16, color: 'black'}}>
                    &nbsp; 6hrs, 10/03/2023 10:00
                  </Text>
                </View>
                <Space height={8} />
              </View>
            </View>
            <Space height={8} />
            <View
              style={{
                borderColor: 'black',
                borderBottomWidth: 0.5,
                borderStyle: 'solid',
              }}></View>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <Image
                source={require('../assets/images/yacht_2.png')}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
              <Space width={16} />
              <View style={{justifyContent: 'center'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#093373',
                    }}>
                    Luxury 60 Feet Majesty YACHT{' '}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                    $1800,
                  </Text>
                  <Space width={4} />
                  <Text style={{fontSize: 16, color: 'black'}}>
                    &nbsp; 6hrs, 10/03/2023 10:00
                  </Text>
                </View>
                <Space height={8} />
              </View>
            </View>
            <Space height={8} />
            <View
              style={{
                borderColor: 'black',
                borderBottomWidth: 0.5,
                borderStyle: 'solid',
              }}></View>
            <Space height={8} />
          </>
        )}
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
              source={require('../assets/images/book_focus.png')}
              style={{width: 22, height: 22}}
            />
            <Text style={{fontSize: 13, color: '#246bbc'}}>Bookings</Text>
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
            <Text style={{fontSize: 13, color: 'black'}}>Profile</Text>
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

export default Booking;
