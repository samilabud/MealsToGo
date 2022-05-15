import React, { useState, useContext } from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';

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
import { TextInput } from 'react-native-paper';

export const LoginScreen = ({ navigation }) => {
  const { onLogin, user, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go - Login</Title>
      <AccountContainer>
        {isLoading && <Text>Loading</Text>}
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
              mode="outlined"
            />
            <AuthText
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              secure
              onChangeText={(p) => setPassword(p)}
              mode="outlined"
            />
            {error && (
              <ErrorContainer>
                <Spacer size="large">
                  <Text variant="error">{error}</Text>
                </Spacer>
              </ErrorContainer>
            )}
            <Spacer size="large">
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onLogin(email, password)}
              >
                Login
              </AuthButton>
            </Spacer>
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
