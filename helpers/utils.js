import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_MOBILE = Platform.OS === 'ios' || Platform.OS === 'android';
export const IS_WEB = !IS_MOBILE;
