const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const mobileAssets = {
  iphoneBezel: asset("assets/iphone/Bezel.png"),
  iphoneKeyboard: asset("assets/iphone/Keyboard.png"),
  androidKeyboard: asset("assets/android/Keyboard.png"),
  pixel10Bezel: asset("assets/android/Pixel10.png"),
} as const;
