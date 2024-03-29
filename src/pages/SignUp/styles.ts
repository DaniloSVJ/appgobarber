import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {Platform} from "react-native"
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  view {
    width:1000px;
  }

  padding: 0 30px ${Platform.OS === 'android' ? 120: 40}px;

`;
export const Viewbutton = styled.View`
 width: 90%;

`;
export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin-bottom: 10px;
 /* font-Family: 'RobotoSlab-Medium'; */

`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`
export const ForgotPasswordText = styled.Text`

  color: #f4ede8;
  font-size: 16px;

`


export const BackToSignIn = styled.TouchableOpacity`
   position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlad-Regular';
  margin-left: 16px;
`
