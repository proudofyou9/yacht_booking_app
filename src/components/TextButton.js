import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const TextButton = props => {
  const {onPress, title = 'Save'} = props;

  const styles = StyleSheet.create({
    button: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 12,
      paddingHorizontal: 8,
      borderRadius: 10,
      elevation: 3,
      borderWidth: 1,
      backgroundColor: props.isOutline ? 'white' : '#246BBC',
      borderColor: '#246bbc'
    },
    text: {
      fontSize: 12,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: !props.isOutline ? 'white' : '#246BBC',
    },
  });

  return (
    <Pressable style={[styles.button, props.style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;
