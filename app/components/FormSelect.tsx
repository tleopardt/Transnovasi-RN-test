import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import globalStyles, { colors } from '../styles'
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon'
import Typography from './Typography';

const defaultOption = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 }
]

interface formSelectProps {
    placeholder?: string;
    options: {
        label: string,
        value: any
    }[];
    onChange: (selected: any) => void;
    selectorStyle?: {
        wrapper?: StyleProp<ViewStyle>
    }
    defaultValue?: any
}

const FormSelect: React.FC<formSelectProps> = ({ placeholder, defaultValue = null, options = defaultOption, onChange, selectorStyle }) => {
    const [selected, setSelected] = useState(defaultValue);
    const [visibility, setVisibility] = useState(false);

    const onSelectItems = (value: any) => {
        setSelected(value);
        
        onChange(value);

        setVisibility(false);
    }
    return (
        <Fragment>
            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={() => setVisibility(!visibility)} activeOpacity={0.8}>
                    <View style={[styles.inputWrapper, selectorStyle?.wrapper ?? false]}>
                        <Typography 
                            variant='BodyRegular' 
                            numberOfLines={1} 
                            style={{ flex: 1 }}
                        >
                            {
                                selected === null 
                                    ? (placeholder ?? 'Select Option') 
                                    : options.find((item) => item.value === selected)?.label
                            }
                        </Typography>

                        <ChevronLeftIcon 
                            width={10} 
                            height={10} 
                            stroke={colors.Black} 
                            style={{ transform: [{ rotate: '-90deg' }] }} />
                    </View>
                </TouchableOpacity>

                {
                    visibility &&
                        <View style={styles.optionsContainer}>
                            {
                                options.map((item) => (
                                    <TouchableOpacity onPress={() => onSelectItems(item.value)} key={item.label} style={styles.options}>
                                        <Typography variant='BodyRegular'>
                                            {item.label}
                                        </Typography>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                }
            </View>
        </Fragment>
    )
}

export default FormSelect

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative'
    },
    inputWrapper: {
        ...globalStyles.rowContainer,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.Gray[200],
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: colors.White,
        gap: 8,
        height: 40
    },
    optionsContainer: { 
        position: 'absolute', 
        top: 45, 
        backgroundColor: 'white', 
        width: '100%', 
        zIndex: 11 
    },
    options: {
        padding: 10,
        width: '100%'
    },
})