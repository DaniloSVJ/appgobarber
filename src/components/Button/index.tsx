import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [loaded] = useFonts({
    RobotoSlab: require('../../../assets/fonts/RobotoSlab-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container {...rest}>
      <ButtonText style={{fontFamily:'RobotoSlab-Medium'}}>{children}</ButtonText>
    </Container>
  );
};

export default Button;
