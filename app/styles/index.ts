import { Dimensions, StyleSheet } from "react-native"

export const { width: fullWidth, height: fullHeight } = Dimensions.get('screen');

export const text = {
    Regular: 'Manrope_400Regular',
    Medium: 'Manrope_500Medium',
    SemiBold: 'Manrope_600SemiBold',
    Bold: 'Manrope_700Bold',
}

export const colors = {
    Blue: {
        100: '#EDF9FF',
        200: '#D8F0FF',
        300: '#B9E5FF',
        400: '#89D7FF',
        500: '#1053B9',
        600: '#023481',
    },
    Gray: {
        40: '#F2F4F7',
        50: '#F7F8FA',
        100: '#E4E7EC',
        200: '#D0D5DD',
        300: '#667085',
        500: '#6B7280',
    },
    Black: '#000000',
    White: '#ffffff',
    Red: '#EA3D3D'
    
} as const;

export const globalStyles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    shadow: {
        // shadowColor: 'rgba(0, 0, 0, 0.2)',
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.35,
        // shadowRadius: 6.25,
        // elevation: 10,
    }
})

export default globalStyles;