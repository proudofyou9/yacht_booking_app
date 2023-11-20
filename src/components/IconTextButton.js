import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-elements';

const IconTextButton = props => {
  const {onPress, title = 'Save'} = props;

  const styles = StyleSheet.create({
    button: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 10,
      elevation: 3,
      borderWidth: 1,
      backgroundColor: props.isOutline ? 'white' : '#246BBC',
      borderColor: '#246bbc',
    },
    text: {
      fontSize: 14,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: !props.isOutline ? 'white' : '#246BBC',
    },
  });

  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        {props.hasIcon ? (
          <Image
            source={
              props.icon ? props.icon : require('../assets/images/light.png')
            }
            style={{width: 16, height: 16, marginRight: 8}}
          />
        ) : (
          <></>
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconTextButton;
