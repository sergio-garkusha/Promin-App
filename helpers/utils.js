import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_MOBILE = Platform.OS === 'ios' || Platform.OS === 'android';
export const IS_WEB = !IS_MOBILE;

export function setHashLocation (route) {
  window.location.hash = `/${route}`;
}

const _urlize = txt => txt.toLowerCase().replaceAll(' ', '-');

export function crossPlatformNav (text, navObj) {
  if (IS_WEB) setHashLocation(_urlize(text));
  navObj.push(text);
}