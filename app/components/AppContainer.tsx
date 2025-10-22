import React, { ReactNode } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, StatusBar, StatusBarStyle } from 'react-native'
import globalStyles, { colors, fullWidth } from '../styles'
import Typography from './Typography'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

interface AppContainerProps extends SafeAreaViewProps {
  title: string;
  backgroundColor?: `#${string}`,
  tintColor?: `#${string}`,
  leftIcon?: ReactNode,
  rightIcon?: ReactNode,
  children: ReactNode,
  statusBarStyle?: StatusBarStyle,
  headerStyle?: StyleProp<ViewStyle>
}

const AppContainer: React.FC<AppContainerProps> = ({ title, backgroundColor, leftIcon, rightIcon, tintColor, children, statusBarStyle, headerStyle, ...otherProps }) => {
  return (
    <SafeAreaView style={[styles.container, otherProps.style, { backgroundColor: backgroundColor ?? colors.White }]} {...otherProps}>
      <StatusBar barStyle={statusBarStyle || 'default'} />
      <View 
        style={[
          globalStyles.rowContainer, 
          styles.header, 
          headerStyle,
          { backgroundColor: backgroundColor || colors.Blue[500] }
        ]}>
          
        {leftIcon}
        
        <Typography variant='BodyMedium' color={tintColor || 'default'}>{title}</Typography>

        {rightIcon}
      </View>

      {children}
    </SafeAreaView>
  )
}

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: 54,
    width: fullWidth,
    paddingHorizontal: 16,
  }
})