import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Navbar} from '../components/Navbar';
import {THEME} from '../theme';
import {ButtonComponent} from '../components/ButtonComponent';
import {AuthorizationField} from '../components/AuthorizationField';
import {RegistrationScreen} from './RegistrationScreen';

export const MainScreen = () => {
  const [mainScreen, setScreen] = useState(true);

  const changeScreen = () => {
    return setScreen(!mainScreen);
  };

  const enterScreen = (
    <View>
      <Navbar />
      <View style={styles.contaner}>
        <View style={styles.enterBlock}>
          <Text style={styles.enter}>Вход</Text>
          <Text style={styles.registration} onPress={() => setScreen(false)}>
            Регистрация
          </Text>
        </View>
        <View style={styles.auth}>
          <AuthorizationField />
        </View>

        <View style={styles.registrationOffer}>
          <View>
            <Text style={styles.text1}>Еще не зарегистрированы?</Text>
          </View>
          <View>
            <Text style={styles.text2} onPress={changeScreen}>
              Регистрация
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <ButtonComponent title={'Войти'} />
      </View>
    </View>
  );

  const registrationScreen = <RegistrationScreen changeScreen={changeScreen} />;

  const toShow = mainScreen ? enterScreen : registrationScreen;
  return <>{toShow}</>;
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
    fontSize: 30,
    color: THEME.DARK_BLUE,
    fontFamily: 'RobotoSlab-Bold',
  },
  registration: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 16,
    color: THEME.GRAY_COLOR,
  },

  registrationOffer: {
    paddingTop: 60,
    alignItems: 'center',
  },
  text1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: THEME.GRAY_COLOR_DARKER,
  },
  text2: {
    paddingTop: 7,
    fontFamily: 'Montserrat-Medium',
    color: THEME.MAIN_COLOR,
    fontSize: 14,
  },
  auth: {
    paddingTop: 50,
  },
  button: {
    paddingTop: 44,
  },
});
