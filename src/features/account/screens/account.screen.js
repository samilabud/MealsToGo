import React from 'react';
import { Spacer } from '../../../components/spacer/spacer.component';
import LottieView from 'lottie-react-native';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          autoPlay
          key="animation"
          resizeMode="cover"
          loop
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../../../..//assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
