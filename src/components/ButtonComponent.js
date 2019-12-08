import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'native-base';

export const ButtonComponent = ({title}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.button}>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 156,
    borderRadius: 23,
    backgroundColor: '#3168DE',
  },
  textStyle: {
    paddingBottom: 4,
    fontFamily: 'Quicksand-Bold',
    color: '#fff',
  },
});
