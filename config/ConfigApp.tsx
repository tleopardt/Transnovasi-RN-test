import React from 'react'
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold
} from '@expo-google-fonts/manrope'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoadingApp from '@/app/screens/LoadingApp';
import MainRoutes from './routes/MainRoutes';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function ConfigApp() {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  })

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!fontsLoaded ? (
          <Stack.Screen name="Loading" component={LoadingApp} />
        ) : (
          <Stack.Screen name="Main" component={MainRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}