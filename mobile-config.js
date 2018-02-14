
App.info({
  id: 'com.example.keshav',
  name: 'Smart-Library',
  description: 'Get smart to use Smart library',
  author: 'Keshav raj',
  email: 'keshavkumark7@gmail.com',
  version: '1.0'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': 'icons/icon.png',
  'iphone_3x': 'icons/icon.png',
  'ios_notification_2x': 'icons/icon.png',
  'android_mdpi': 'icons/icon.png',
  'android_hdpi': 'icons/icon.png',
  'android_xxxhdpi': 'icons/icon.png',
  // More screen sizes and platforms...
});

App.launchScreens({
  'iphone_2x': 'icons/splash.png',
  'iphone5': 'icons/splash.png',
  'iphone6p_portrait': 'icons/splash.png',
  'iphone6p_landscape': 'icons/splash.png',
  'android_mdpi_portrait': 'icons/splash.png',
  'android_mdpi_landscape': 'icons/splash.png',
  'android_xxxhdpi_portrait': 'icons/splash.png',
  'android_xxxhdpi_landscape': 'icons/splash.png',
  // More screen sizes and platforms...
});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin.
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '123454321',
  API_KEY: '123654789'
});

// Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// generated config.xml. 'Universal Links' is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);
