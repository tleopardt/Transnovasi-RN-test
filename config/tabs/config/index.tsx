import Typography from '@/app/components/Typography';
import { colors } from '@/app/styles';
import HomeIcon from '@/assets/icons/HomeIcon';
import OutlinedHomeIcon from '@/assets/icons/OutlinedHomeIcon';
import OutlinedPaperIcon from '@/assets/icons/OutlinedPaperIcon';
import OutlinedPinIcon from '@/assets/icons/OutlinedPinIcon';
import PaperIcon from '@/assets/icons/Papercon';
import PinIcon from '@/assets/icons/PinIcon';
import { ROUTES } from '@/config/constant';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TabScreenOptionProps = {
    route: RouteProp<ParamListBase, string>
}

type TabBarIconProps = {
    focused: boolean,
    color: string,
    size: number
}

export const TabScreenOption = ({ route }: TabScreenOptionProps): BottomTabNavigationOptions => {
  const insets = useSafeAreaInsets();

  return {
    tabBarIcon: ({ focused }: TabBarIconProps) => {
      let iconName;

      if (route.name === ROUTES.Beranda) {
        iconName = focused ? <HomeIcon fill={colors.Blue[500]} /> : <OutlinedHomeIcon />;

      } else if (route.name === ROUTES.Peta) {
        iconName = focused ? <PinIcon fill={colors.Blue[500]} /> : <OutlinedPinIcon />;
        
      } else if (route.name === ROUTES.Renglat) {
          iconName = focused ? <PaperIcon fill={colors.Blue[500]} /> : <OutlinedPaperIcon />;
      }

      return (
        <View 
          style={{ 
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            height: '100%',
            // marginTop: '50%'
          }}>
              {iconName}
              <Typography
                variant='CaptionSemiBold'
                style={{ color: focused ? colors.Blue[500] : colors.Gray[300], width: '100%' }}
              >
                  {route.name}
              </Typography>
        </View>
      );
    },
    // tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarLabelPosition: 'below-icon',
    tabBarLabelStyle: { fontSize: 10, lineHeight: 18, letterSpacing: 0.18 },
    tabBarIconStyle: { marginTop: 25 / 2 },
    tabBarStyle: Platform.select({
      ios: [{ margin: 0 }],
      android: [
        {
          height: 70 + insets.bottom
        }
      ]
    })
  }
};