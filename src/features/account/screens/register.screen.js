import React, { useState, useContext } from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { ActivityIndicator, DefaultTheme } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
  AccountBackground,
  AccountCover,
  AuthButton,
  AccountContainer,
  AuthText,
  Title,
  ErrorContainer,
} from '../components/account.styles';

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, user, error, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go - Register</Title>
      <AccountContainer>
        {user ? (
          <Spacer size="large">
            <Text variant="label">Bienvenido {user.user.email}</Text>
          </Spacer>
        ) : (
          <>
            <AuthText
              label="Email"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(e) => setEmail(e)}
            />
            <Spacer size="large">
              <AuthText
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                onChangeText={(p) => setPassword(p)}
              />
            </Spacer>
            <Spacer size="large">
              <AuthText
                label="Repeat Password"
                value={repeatedPassword}
                textContentType="password"
                secureTextEntry
                onChangeText={(p) => setRepeatedPassword(p)}
              />
            </Spacer>
            {error && (
              <ErrorContainer>
                <Spacer size="large">
                  <Text variant="error">{error}</Text>
                </Spacer>
              </ErrorContainer>
            )}
            {isLoading ? (
              <ActivityIndicator animating={true} color={DefaultTheme.DefaultTheme.primary} />
            ) : (
              <Spacer size="large">
                <AuthButton
                  icon="email"
                  mode="contained"
                  onPress={() => onRegister(email, password, repeatedPassword)}
                >
                  Sign Up
                </AuthButton>
              </Spacer>
            )}
          </>
        )}
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          icon="keyboard-backspace"
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
