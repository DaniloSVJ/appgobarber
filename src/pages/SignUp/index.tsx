import React,{useRef} from 'react';
import {useNavigation} from "@react-navigation/native"
import Input from '../../components/Input'
import Button from '../../components/Button'
import {Image,ScrollView, KeyboardAvoidingView, Platform,View,Text} from 'react-native'
import logoImg from '../../assets/logo.png'
import {Form} from '@unform/mobile'
import {FormHandles} from "@unform/core"
import {Container,Title, BackToSignIn,Viewbutton, BackToSignInText,} from './styles';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';

const SignUp : React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [loaded] = useFonts({
    RobotoSlab: require('../../../assets/fonts/RobotoSlab-Medium.ttf'),
  });
  const navigation = useNavigation()
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
      Crie sua Conta
        </Title>
        </View>
        <Form ref={formRef} onSubmit={()=>{}}>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Viewbutton>
            <Button >Entrar</Button>
          </Viewbutton>
          </Form>
    </Container>
    </KeyboardAvoidingView>
</ScrollView>
      <BackToSignIn onPress={() => navigation.navigate('SignUp')}>
        <Icon name="arrow-left" size={20} color="#ff9000" />

        <BackToSignInText>Voltar para o logon</BackToSignInText>
      </BackToSignIn>
</>
)
}


export default SignUp;
