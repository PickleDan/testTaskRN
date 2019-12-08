import React, {useState} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Navbar} from '../components/Navbar';
import {Text, CheckBox} from 'native-base';
import {THEME} from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthorizationField} from '../components/AuthorizationField';
import {ButtonComponent} from '../components/ButtonComponent';

export const RegistrationScreen = ({changeScreen}) => {
  return (
    <View>
      <Navbar />
      <View style={styles.contaner}>
        <View style={styles.enterBlock}>
          <View>
            <Text style={styles.enter} onPress={changeScreen}>
              Вход
            </Text>
          </View>
          <View>
            <Text style={styles.registration}>Регистрация</Text>
          </View>
        </View>
        <View style={styles.photo}>
          <Text style={styles.photoText}>Фото</Text>
          <View style={styles.circle}>
            <Icon style={styles.icon} name="photo-camera" size={34} />
          </View>
        </View>

        <View style={styles.auth}>
          <AuthorizationField />
        </View>
      </View>

      <View style={styles.checkboxBlock}>
        <View style={styles.checkbox}>
          <CheckBox />
        </View>
        <View style={styles.confidentiality}>
          <Text style={styles.text}>
            Я согласен с
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://vk.com')}>
              {' '}
              Политикой Конфиденциальности
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <ButtonComponent title={'Регистрация'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: {
    paddingTop: 34,
    paddingLeft: 32,
    paddingRight: 32,
  },
  enterBlock: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  enter: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 16,
    color: THEME.GRAY_COLOR,
    paddingLeft: 15,
  },
  registration: {
    fontSize: 30,
    color: THEME.DARK_BLUE,
    fontFamily: 'RobotoSlab-Bold',
  },
  photo: {
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoText: {
    paddingLeft: 4,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
    color: THEME.GRAY_COLOR,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 98,
    height: 98,
    borderRadius: 50,
    backgroundColor: '#e7e7e7',
    marginLeft: 100,
  },
  icon: {
    color: 'rgba(48, 102, 224, 0.37)',
  },
  auth: {
    paddingTop: 30,
  },
  checkboxBlock: {
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'center',
  },
  checkbox: {
    paddingTop: 2,
    paddingRight: 18,
  },
  confidentiality: {
    width: '50%',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 23,
    color: THEME.DARK_BLUE,
  },
  link: {
    fontFamily: 'Montserrat-Medium',
    color: THEME.MAIN_COLOR,
    fontSize: 14,
  },
  button: {
    paddingTop: 24,
  },
});
