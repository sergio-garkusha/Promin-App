import * as Device from "expo-device";

// console.log(Device.osName);

export const isIOS = () =>
  Device.osName === "iOS"
  || Device.osName === "iPadOS";

export const isAndroid = () => Device.osName === "Android";

// export const isMobileOS = () =>
export const isMobile = () =>
  Device.osName === "Android"
  || Device.osName === "iOS"
  || Device.osName === "iPadOS";

// export const isBrowser = () =>
  // navigator &&
