import React from 'react';

import Input from '../../components/Input'
import Button from '../../components/Button'
import {Image,ScrollView, KeyboardAvoidingView, Platform,View,Text} from 'react-native'
import logoImg from '../../assets/logo.png'

import {Container,Title, ForgotPassword,Viewbutton, ForgotPasswordText,CreateAccountButton,CreateAccountButtonText} from './styles';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';

const SignIn : React.FC = () => {
  const [loaded] = useFonts({
    RobotoSlab: require('../../../assets/fonts/RobotoSlab-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return(
    <>
    <ScrollView>
    <KeyboardAvoidingView
      style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding': undefined}
    >
      <Container>
      <Image source={logoImg}/>
      <View><Title style={{fontFamily:'RobotoSlab-Medium'}} >
      Faça seu logon
        </Title>
        </View>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Viewbutton><Button>Entrar</Button></Viewbutton>
          <ForgotPassword>
              <ForgotPasswordText>Esqueci minha Senha</ForgotPasswordText>
          </ForgotPassword>
    </Container>
    </KeyboardAvoidingView>
</ScrollView>
      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <View><Text>Criar uma conta</Text></View>
      </CreateAccountButton>
</>
)
}


export default SignIn;
