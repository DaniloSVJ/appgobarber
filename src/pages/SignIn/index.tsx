import React ,{useCallback,useRef} from 'react';

import Input from '../../components/Input'
import Button from '../../components/Button'
import {Image,ScrollView, KeyboardAvoidingView, Platform,View,Text} from 'react-native'
import logoImg from '../../assets/logo.png'
import {useNavigation} from "@react-navigation/native"
import {Form} from "@unform/mobile"
import {FormHandles} from "@unform/core"

import {Container,Title, ForgotPassword,Viewbutton, ForgotPasswordText,CreateAccountButton,CreateAccountButtonText} from './styles';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';

const SignIn : React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [loaded] = useFonts({
    RobotoSlab: require('../../../assets/fonts/RobotoSlab-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const navigation = useNavigation()
  const handleSignIn = useCallback((data:object)=>{
    console.log(data)
  },[])
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
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input name="email"
              autoCorrect={false}
              autoCapitalize="none"
              icon="mail"
              placeholder="E-mail"
            />
            <Input name="password" icon="lock" placeholder="Senha"

            />
            <Viewbutton>
              <Button  >Entrar</Button></Viewbutton>
          </Form>
          <ForgotPassword>
              <ForgotPasswordText>Esqueci minha Senha</ForgotPasswordText>
          </ForgotPassword>

    </Container>
    </KeyboardAvoidingView>
</ScrollView>
      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <CreateAccountButton><CreateAccountButtonText>Criar uma conta</CreateAccountButtonText></CreateAccountButton>
      </CreateAccountButton>
</>
)
}


export default SignIn;
