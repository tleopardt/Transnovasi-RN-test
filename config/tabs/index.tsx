import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../constant';
import Beranda from '@/app/screens/Beranda';
import Peta from '@/app/screens/Peta';
import Renglat from '@/app/screens/Renglat';
import { TabScreenOption } from './config';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
        <Tab.Navigator initialRouteName={ROUTES.Peta} screenOptions={TabScreenOption}>
            <Tab.Screen name={ROUTES.Beranda} component={Beranda} />
            <Tab.Screen name={ROUTES.Peta} component={Peta} />
            <Tab.Screen name={ROUTES.Renglat} component={Renglat} />
        </Tab.Navigator>
  )
}

export default Tabs