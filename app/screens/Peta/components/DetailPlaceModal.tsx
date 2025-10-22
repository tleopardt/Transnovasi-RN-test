import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import globalStyles, { colors, fullHeight, fullWidth } from '@/app/styles';
import { DetailPlaceModalType } from '../PageTypes';
import Typography from '@/app/components/Typography';
import Button from '@/app/components/Button';
import PhoneIcon from '@/assets/icons/PhoneIcon';

const DetailPlaceModal: React.FC<DetailPlaceModalType> = ({ visibility, data }) => {
    const modalPosition = useSharedValue(-fullWidth);

    useEffect(() => {
        const toValue = visibility ? 0 : -fullWidth;
        const duration = visibility ? 300 : 150;

        modalPosition.value = withTiming(toValue, {
            duration,
            easing: Easing.inOut(Easing.ease),
        });

    }, [visibility])
    
    const modalAnimation = useAnimatedStyle(() => {
      return {
        right: modalPosition.value,
      }
    });

    return (
        <Animated.View style={[styles.modalContainer, modalAnimation]}>
            <View style={{ flexDirection: 'row', gap: 14 }}>
                {
                    data?.icon && 
                        <View>
                            <data.icon width={40} height={40} />
                        </View>
                }
                
                <View style={{ gap: 10, flex: 1 }}>
                    <Typography variant='BodyMedium'>{data?.name}</Typography>
                    <Typography variant='CaptionRegular'>{`${data?.officerName} - ${data?.officerRank}`}</Typography>
                    <Typography variant='CaptionRegular'>{data?.location}</Typography>
                    
                    <View style={styles.rowGap}>
                        <PhoneIcon width={16} height={16} fill={colors.Black} />
                        <Typography variant='CaptionRegular'>{data?.phone}</Typography>
                    </View>

                    <Button
                        leftIcon={<PhoneIcon width={20} height={20} fill={colors.Blue[500]} />}
                        text='Hubungi' 
                        fontFamily='CaptionSemiBold' 
                        textColor={colors.Blue[500]} 
                        style={{ alignSelf: 'flex-start' }} />
                </View>
            </View>
        </Animated.View>
    )
}

export default DetailPlaceModal

const styles = StyleSheet.create({
    modalContainer: {
        ...globalStyles.shadow,
        position: 'absolute', 
        bottom: fullHeight * 0.1,
        width: fullWidth - 16,
        backgroundColor: '#fff', 
        borderTopLeftRadius: 16, 
        borderBottomLeftRadius: 16, 
        padding: 16,
    },
    rowGap: {
        flexDirection: 'row',
        gap: 6
    },
})