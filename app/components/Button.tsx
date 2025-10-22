import { TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import React, { ReactNode } from 'react'
import Typography, { fontVariantOption } from './Typography'
import { colors } from '../styles'

interface Button extends TouchableOpacityProps {
    text?: string;
    fontFamily?: fontVariantOption;
    textColor?: string;
    leftIcon?: ReactNode;
    disabled?: boolean;
}

const Button: React.FC<Button> = ({ text, leftIcon, disabled, fontFamily, textColor, style, ...otherProps }) => {
  return (
    <TouchableOpacity 
        activeOpacity={0.5} 
        style={[
            styles.button, 
            style, 
            disabled && styles.disabled
        ]}
        {...otherProps}
    >
        {leftIcon}

        { 
            text && 
                <Typography 
                    variant={fontFamily || 'CaptionRegular'} 
                    style={{ color: textColor || colors.Black }}
                >
                    {text}
                </Typography>
        }
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 8, 
        paddingHorizontal: 12, 
        paddingVertical: 6, 
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.Gray[200],
        backgroundColor: colors.White, 
    },
    disabled: {
        backgroundColor: colors.Gray[100]
    }
})