# 🗺️ React Native Test

A React Native app built with **Expo SDK 54** and **React Native Maps**, featuring geolocation, custom markers, and smooth navigation across Android and iOS.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-native-maps-app.git
cd react-native-maps-app

## Installing Dependencies

npm install
# or
yarn install

## Set up App Configuration

npm run prepare

## Run the app

npm run android
# or
npm run ios

These commands are important because they trigger Expo’s prebuild process.
That process generates native Android and iOS folders (android/ and ios/) and links any native dependencies automatically.

This step is required for libraries like:
- react-native-maps (uses native Google Maps SDK)
- react-native-geolocation-service
- react-native-device-info

Without prebuilding, these modules won't be properly linked, and features like maps or GPS will not function as expected.

Additional Required Setup

To get the API KEY, you have to enable Maps SDK for Android & iOS and set up correctly through link below
## https://console.cloud.google.com/apis/library?referrer=search&cloudshell=true&project=project-9f02ef04-6b5a-4836-b9d

open your app.json and add
{
  "expo": {
    "plugins": [
      [
        "react-native-maps",
        {
          "iosGoogleMapsApiKey": "YOUR_IOS_API_KEY",
          "androidGoogleMapsApiKey": "YOUR_ANDROID_API_KEY"
        }
      ],
      ...
   ]
  }
}

## react-native-geolocation-service

Make sure permission below already added on app.json > android

  "ACCESS_FINE_LOCATION",
  "ACCESS_COARSE_LOCATION"

open android/build.gradle put code below inside buildscript

  ext {
    playServicesLocationVersion = "21.0.1"
  }