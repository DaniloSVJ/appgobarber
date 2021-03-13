import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextIpt, Icon } from './styles';
import { useFonts } from 'expo-font';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;

}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const [loaded] = useFonts({
    RobotoSlab: require('../../../assets/fonts/RobotoSlab-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Container>
       <Icon name={icon} size={20} color="#666360" />

      <TextIpt
        style={{fontFamily:'RobotoSlab-Medium'}}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />

    </Container>
  );
};

export default Input;
