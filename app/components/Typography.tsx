import { Text, StyleSheet, StyleProp, TextStyle, TextProps } from 'react-native'
import React from 'react'
import { colors, text } from '../styles';

interface TypographyProps extends TextProps {
  variant: fontVariantOption;
  color?: 'default' | `#${string}`;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export type fontVariantOption = 'CaptionRegular' | 'CaptionSemiBold' | 'BodyMedium' | 'BodyRegular'

const Typography: React.FC<TypographyProps> = ({ variant, color = 'default', children, style, ...otherProps }) => {
  const textStyle = () => {
    switch (variant) {
      case 'CaptionRegular':
        return styles.CaptionRegular;
      case 'CaptionSemiBold':
        return styles.CaptionSemiBold;
      case 'BodyMedium':
        return styles.BodyMedium;
      case 'BodyRegular':
        return styles.BodyRegular;
      default:
        return {};
    }
  } 

  const textColor = () => {
    switch(color) {
        case 'default':
            return { color: colors.Black };
        default:
            return { color: color };
    }
  }

  return (
    <Text style={[textStyle(), textColor(), style]} {...otherProps}>
      {children}
    </Text>
  )
}

export default Typography

const styles = StyleSheet.create({
    CaptionRegular: {
        fontFamily: text.Regular,
        fontSize: 12,
        color: colors.Black
    },
    CaptionSemiBold: {
        fontFamily: text.SemiBold,
        fontSize: 12,
        color: colors.Black
    },
    BodyMedium: {
        fontFamily: text.Bold,
        fontSize: 16,
        color: colors.Black
    },
    BodyRegular: {
      fontFamily: text.Regular,
      fontSize: 14,
      color: colors.Black
    }
})