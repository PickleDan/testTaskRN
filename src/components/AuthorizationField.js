import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {THEME} from '../theme';

export const AuthorizationField = () => {
  const [password, hidePassword] = useState(true);

  return (
    <View style={styles.verification}>
      <View style={styles.email}>
        <Text style={styles.emailTitle}>Email</Text>
        <TextInput style={styles.input} value={'easybreasy@com'} />
      </View>
      <View style={styles.password}>
        <Text style={styles.passwordTitle}>Пароль</Text>
        <View>
          <TextInput
            secureTextEntry={password}
            style={styles.input}
            value={'11111111'}
          />
          <Icon
            onPress={() => hidePassword(!password)}
            style={styles.eye}
            name="eye"
            size={24}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTitle: {
    paddingLeft: 4,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
    color: THEME.GRAY_COLOR,
  },
  email: {},
  input: {
    height: 40,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: THEME.GRAY_COLOR,
    fontSize: 14,
    color: THEME.DARK_BLUE,
    fontFamily: 'Quicksand-Bold',
  },
  passwordTitle: {
    paddingLeft: 4,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 14,
    color: THEME.GRAY_COLOR,
  },
  password: {
    paddingTop: 20,
  },
  eye: {
    color: THEME.MAIN_COLOR,
    position: 'absolute',
    right: 0,
    paddingTop: 8,
  },
});
