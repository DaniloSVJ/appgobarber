import React from 'react';

import Input from '../../components/Input'
import Button from '../../components/Button'
import {Image} from 'react-native'
import logoImg from '../../assets/logo.png'
import {StyleSheet} from 'react-native'
import {Container,Title,View} from './styles';

const SignIn : React.FC = () => (
  <Container>
  <Image source={logoImg}/>
  <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

  <View  ><Button>Entrar</Button></View>
</Container>
);



export default SignIn;
