import * as Device from "expo-device";

export const isIOS = () =>
  Device.osName === "iOS"
  || Device.osName === "iPadOS";

export const isAndroid = () => Device.osName === "Android";

export const isMobile = () =>
  Device.osName === "Android"
  || Device.osName === "iOS"
  || Device.osName === "iPadOS";
