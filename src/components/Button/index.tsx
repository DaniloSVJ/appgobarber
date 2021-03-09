import React from 'react'
import {RectButtonProperties} from 'react-native-gesture-handler'
import {Container,ButtonText} from './styles'
import {View} from 'react-native'



interface ButtonProps extends RectButtonProperties{
  children: string;
}
const Button: React.FC =({children,...rest})=>(

  <Container {...rest}>
    <View>
      <ButtonText>
        {children}
      </ButtonText>
      </View>
  </Container>
);


export default Button

