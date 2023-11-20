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

const Contact = ({navigation}) => {
  const [inputValue, setInputValue] = useState(
    'Hello. Salih. I am interested in your yacht. \nIs it still available? If yes, can you send me a quote / offer? \nThank you. Illia',
  );

  // Function to handle text input changes
  const handleInputChange = text => {
    setInputValue(text);
  };
  const sendMessage = () => {
    if(inputValue==""){
      alert("Please input message");
      return;
    }
    else{
      alert("Successfully message transferred");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.leftComponent}>
              <TouchableOpacity
                onPress={() => {
                  navigation.pop();
                }}>
                <Image
                  source={require('../assets/images/arrow_left.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Contact</Text>
            <View style={styles.rightComponent} />
          </View>
          <View style={{paddingHorizontal: 40}}>
            <Space height={20} />
            <View>
              <View>
                <View style={styles.float}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#093373',
                      }}>
                      Salih
                    </Text>
                    <Space height={4} />
                    <View>
                      <View style={styles.float}>
                        <Image
                          source={require('../assets/images/star.png')}
                          style={{width: 20, height: 20}}
                        />
                        <Text style={{color: 'black'}}> 5.0 (34)</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={require('../assets/images/avatar.png')}
                      style={{width: 40, height: 40, borderRadius: 20}}
                    />
                  </View>
                </View>
                <Space height={16} />
                <View
                  style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>From</Text>
                  <View
                    style={[
                      styles.right,
                      {
                        width: 150,
                      },
                    ]}>
                    <Text style={{fontSize: 15, color: '#093373'}}>
                      10 / 03 / 2023 10 : 00
                    </Text>
                  </View>
                </View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>To</Text>
                  <View
                    style={[
                      styles.right,
                      {
                        width: 150,
                      },
                    ]}>
                    <Text style={{fontSize: 15, color: '#093373'}}>
                      10 / 03 / 2023 18 : 00
                    </Text>
                  </View>
                </View>
                <View style={styles.float}>
                  <View></View>
                  <TextButton
                    title="Edit"
                    style={{width: 90, height: 30}}
                    isOutline={true}
                    enable={true}
                  />
                </View>
              </View>
              <Space height={16} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={16} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>$ 1, 800</Text>
                <View style={[]}>
                  <Text style={{fontSize: 15, color: 'black'}}>
                    Either $ 300 / hr
                  </Text>
                </View>
              </View>
              <Space height={16} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={16} />
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#093373'}}>
                  Message
                </Text>
                <Space height={4} />
                <View style={{paddingLeft: 8}}>
                  <Text style={{color: 'rgba(0,0,0,0.5)'}}>
                    Make sure to include in your message:
                  </Text>
                  <View style={{paddingLeft: 8}}>
                    <Space height={4} />
                    <Text style={{color: 'rgba(0,0,0,0.5)'}}>
                      - Number of passengers for your rental
                    </Text>
                    <Space height={4} />
                    <Text style={{color: 'rgba(0,0,0,0.5)'}}>
                      - With or without a skipper
                    </Text>
                  </View>
                  <Space height={16} />
                  <View>
                    <TextInput
                      style={styles.input}
                      value={inputValue}
                      onChangeText={handleInputChange}
                      placeholder="Enter text"
                      placeholderTextColor={'rgba(0,0,0,0.5)'}
                      multiline={true}
                      numberOfLines={4}
                    />
                  </View>
                </View>
              </View>
              <Space height={16} />
            </View>
            <View></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <IconTextButton title="Send Message" hasIcon={false} onPress={sendMessage}/>
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
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
  scrollContainer: {flexGrow: 1, overflow: 'scroll', paddingBottom: 80},
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
  input: {
    width: '100%',
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlignVertical: 'top',
    color: 'rgba(0,0,0,0.5)',
  },
});

export default Contact;
