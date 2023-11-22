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
import SelectDropdown from 'react-native-select-dropdown';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextButton from '../components/TextButton';

const Setting = ({navigation}) => {
  const languages = ['English - US', 'English - UK', 'Arab - UAE'];
  const currencies = ['US Dollar - $', 'UAE - Aed'];

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.leftComponent}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                source={require('../assets/images/arrow_left.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.rightComponent} />
        </View>
        <View style={{padding: 16}}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 'bold',
              }}>
              Account Language
            </Text>
            <Space height={16} />
            <SelectDropdown
              data={languages}
              defaultValue={languages[0]}
              onSelect={(selectedItem, index) => {
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => (
                <Icon name="chevron-down" size={16} color="#000" />
              )}
              buttonStyle={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
              }}
              rowStyle={{
                height: 40
              }}
            />
          </View>
          <Space height={16} />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 'bold',
              }}>
              Account Currency
            </Text>
            <Space height={16} />
            <SelectDropdown
              data={currencies}
              defaultValue={currencies[0]}
              onSelect={(selectedItem, index) => {
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => (
                <Icon name="chevron-down" size={16} color="#000" />
              )}
              buttonStyle={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
              }}
            />
          </View>
          <Space height={32} />
          <View style={[styles.float, {alignItems: 'center'}]}>
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 'bold',
              }}>
              Terms & Conditions
            </Text>
            <Image
              source={require('../assets/images/forward.png')}
              style={{width: 10, height: 20, marginRight: 8}}
            />
          </View>
          <Space height={32} />
          <View style={[styles.float, {alignItems: 'center'}]}>
            <Text
              style={{
                fontSize: 20,
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 'bold',
              }}>
              Privacy Policy
            </Text>
            <Image
              source={require('../assets/images/forward.png')}
              style={{width: 10, height: 20, marginRight: 8}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Setting;
