import { View, TextInput, StyleProp, ViewStyle, StyleSheet, TextInputProps } from 'react-native'
import React, { ReactNode } from 'react'
import globalStyles, { colors, text } from '../styles'

interface FormInputProps extends TextInputProps {
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    disabled?: boolean,
    variant?: 'outlined' | null,
    wrapperStyle?: StyleProp<ViewStyle>,
}

const FormInput: React.FC<FormInputProps> = ({ 
    leftIcon, 
    rightIcon, 
    disabled, 
    variant, 
    wrapperStyle, 
    style: inputStyle, 
    ...inputProps 
}) => {
    const inputVariant = () => {
        switch(variant) {
            case 'outlined': 
                return styles.variantOutlined;
            default:
                return {}
        }
    }

    return (
        <View style={[globalStyles.rowContainer, styles.inputWrapper, inputVariant(), wrapperStyle]}>
            <View style={styles.rowWithGap}>
                {leftIcon}

                <TextInput 
                    editable={disabled} 
                    style={[styles.textInput, inputStyle]}
                    placeholderTextColor={colors.Gray[300]}
                    {...inputProps} />
            </View>

            {rightIcon}
                
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: colors.White,
        height: 40
    },
    rowWithGap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    textInput: {
        flex: 1,
        fontFamily: text.Regular,
        color: colors.Black,
        paddingVertical: 8,
        fontSize: 15
    },
    variantOutlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.Gray[200],
    }
})