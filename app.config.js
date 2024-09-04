import 'dotenv/config';

export default {
  expo: {
    name: 'BikeRouter',
    slug: 'bikerouter',
    scheme: 'bikerouter',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.teddy.bikerouter',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    plugins: [
      'expo-router',
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsVersion: "10.1.21",
          RNMapboxMapsDownloadToken: process.env.MAPBOX_SK,
        },
      ],
      'expo-dev-client',
    ],
  },
};
