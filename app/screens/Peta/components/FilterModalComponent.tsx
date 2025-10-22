import Typography from "@/app/components/Typography"
import { memo } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { FacilitiesProps, PlacesProps } from "../PageTypes"
import Button from "@/app/components/Button"
import { colors } from "@/app/styles"
import PhoneIcon from "@/assets/icons/PhoneIcon"

export const Facilities: React.FC<FacilitiesProps> = memo(({ item, handleSelect }) => {
    return (
        <TouchableOpacity onPress={handleSelect} style={styles.facilitiesOption}>
            <item.icon />
            <Typography variant='BodyRegular'>{item.name}</Typography>
        </TouchableOpacity>
    )
})

export const Places: React.FC<PlacesProps> = memo(({ item, handleSelect }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={handleSelect} 
            style={styles.placesOption}
        >
            {item.icon && <item.icon width={40} height={40} />}
            
            <View style={{ gap: 10 }}>
                <Typography variant='BodyMedium'>{item.name}</Typography>
                <Typography variant='CaptionRegular'>{`${item.officerName} - ${item.officerRank}`}</Typography>
                <Typography variant='CaptionRegular'>{item.location}</Typography>
                
                <View style={styles.rowGap}>
                    <PhoneIcon width={16} height={16} fill={colors.Black} />
                    <Typography variant='CaptionRegular'>{item.phone}</Typography>
                </View>

                <Button
                    leftIcon={<PhoneIcon width={20} height={20} fill={colors.Blue[500]} />}
                    text='Hubungi' 
                    fontFamily='CaptionSemiBold' 
                    textColor={colors.Blue[500]} 
                    style={{ alignSelf: 'flex-start', borderRadius: 8 }} />
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    rowGap: {
        flexDirection: 'row',
        gap: 6
    },
    facilitiesOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        gap: 12
    },
    placesOption: { 
        flexDirection: 'row', 
        gap: 12, 
        paddingVertical: 24 
    }
})