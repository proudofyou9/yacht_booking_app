import React, {useState} from 'react';
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
import TextButton from '../components/TextButton';
import IconTextButton from '../components/IconTextButton';

const Book = ({navigation}) => {
  const [date, setDate] = useState('12 / 03 / 2023');
  const [time, setTime] = useState('10 : 00');
  const [hours, setHours] = useState(2);

  const validation = () => {
    if (date == '') {
      alert('Please input date');
      return;
    }
    if (time == '') {
      alert('Please input time');
      return;
    }
    // navigation.navigate('Payment');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.leftComponent}
              onPress={() => {
                navigation.navigate('Info');
              }}>
              <Image
                source={require('../assets/images/arrow_left.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Booking</Text>
            <View style={styles.rightComponent} />
          </View>
          <Space height={30} />
          <View style={{paddingHorizontal: 40}}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 16,
                }}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Date
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    width: 160,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                    }}>
                    <TextInput
                      style={{
                        color: 'black',
                        fontSize: 16,
                        height: 36,
                        paddingVertical: 0,
                      }}
                      value={date}
                      onChangeText={setDate}></TextInput>
                    <Image
                      source={require('../assets/images/calendar.png')}
                      style={[
                        styles.right,
                        {width: 20, height: 20, marginTop: 4},
                      ]}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 16,
                }}>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  Start Time
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    borderRadius: 4,
                    width: 160,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                    }}>
                    <TextInput
                      style={{
                        color: 'black',
                        fontSize: 16,
                        height: 36,
                        paddingVertical: 0,
                      }}
                      value={time}
                      onChangeText={setTime}></TextInput>
                    <Image
                      source={require('../assets/images/clock.png')}
                      style={[
                        styles.right,
                        {width: 16, height: 16, marginTop: 4},
                      ]}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#093373', fontSize: 20, fontWeight: 'bold'}}>
                  Duration
                </Text>
                <View
                  style={{
                    // paddingHorizontal: 8,
                    width: 160,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TextButton
                      title="2 hrs"
                      style={{width: 64, height: 30, marginRight: 16}}
                      enable={true}
                      isOutline={hours == 2 ? false : true}
                      onPress={() => {
                        setHours(2);
                      }}
                    />
                    <TextButton
                      title="3 hrs"
                      style={{width: 64, height: 30, marginLeft: 16}}
                      enable={true}
                      isOutline={hours == 3 ? false : true}
                      onPress={() => {
                        setHours(3);
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <TextButton
                  title="4 hrs"
                  style={{width: 64, height: 30, marginRight: 32}}
                  enable={true}
                  isOutline={hours == 4 ? false : true}
                  onPress={() => {
                    setHours(4);
                  }}
                />
                <View
                  style={{
                    // paddingHorizontal: 8,
                    width: 160,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TextButton
                      title="6 hrs"
                      style={{width: 64, height: 30, marginRight: 16}}
                      enable={true}
                      isOutline={hours == 6 ? false : true}
                      onPress={() => {
                        setHours(6);
                      }}
                    />
                    <TextButton
                      title="8 hrs"
                      style={{width: 64, height: 30, marginLeft: 16}}
                      enable={true}
                      isOutline={hours == 8 ? false : true}
                      onPress={() => {
                        setHours(8);
                      }}
                    />
                  </View>
                </View>
              </View>
              <Space height={32} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={32} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>Check-in</Text>
                <View
                  style={[
                    styles.right,
                    {
                      width: 150,
                    },
                  ]}>
                  <Text style={{fontSize: 15, color: '#093373'}}>
                    {date} {time}
                  </Text>
                </View>
              </View>
              <Space height={16} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>Check-out</Text>
                <View
                  style={[
                    styles.right,
                    {
                      width: 150,
                    },
                  ]}>
                  <Text style={{fontSize: 15, color: '#093373'}}>
                    {date} {time}
                  </Text>
                </View>
              </View>
            </View>
            <View></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.tab}>
          <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <View style={[styles.float, {alignItems: 'center'}]}>
              <View>
                <View>
                  <Text
                    style={{
                      color: '#246bbc',
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    $1, 800
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailedPrice');
                  }}>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: '#246bbc',
                    }}>
                    Detail Price
                  </Text>
                </TouchableOpacity>
              </View>
              <Space width={40} />
              <View>
                <IconTextButton
                  title="Instant Book"
                  hasIcon={true}
                  onPress={() => {
                    validation();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 100,
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
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default Book;
