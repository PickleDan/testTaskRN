import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from '../theme';

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View>
        <Text style={styles.styleLogo}>
          <Text style={styles.firstLetterLogo}>L</Text>
          <Text style={styles.secondLetterLogo}>F</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.textUp}>потерял</Text>
        <Text style={styles.textDown}>нашел</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 82,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },
  styleLogo: {
    paddingRight: 16,
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 50,
  },
  firstLetterLogo: {
    color: THEME.ACCENT_COLOR,
  },
  secondLetterLogo: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
  },
  textUp: {
    // paddingTop: 8,
    lineHeight: 22,
    color: THEME.ACCENT_COLOR,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  textDown: {
    lineHeight: 15,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
});
