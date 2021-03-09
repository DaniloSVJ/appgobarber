/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { registerRootComponent } from "expo";

import App from './src/app';
import {name as appName} from './app.json';

if (Platform.OS == "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
