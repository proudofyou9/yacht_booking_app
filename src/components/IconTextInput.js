import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconTextInput = props => {
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.iconTextInput}>
      <Image source={props.image} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCorrect={false}
        spellCheck={false}
        underlineColorAndroid="transparent"
        secureTextEntry={props.secureTextEntry ? secure : false}
        focusable={false}
      />
      {props.secureTextEntry ? (
        <TouchableOpacity
          onPress={() => {
            setSecure(!secure);
          }}>
          <Text style={{marginRight: 10}}>{secure ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {props.valid ? (
        <Image
          source={require('../assets/images/yes_out.png')}
          style={styles.check}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconTextInput: {
    marginHorizontal: '12px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },

  check: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default IconTextInput;
