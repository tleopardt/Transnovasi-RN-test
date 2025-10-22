import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { Fragment, useCallback, useEffect, useMemo } from 'react'
import globalStyles, { colors, fullHeight, fullWidth } from '@/app/styles';
import Typography from '@/app/components/Typography';
import CloseIcon from '@/assets/icons/CloseIcon';
import { publicFacilities } from '@/config/constant';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { FacilitiesItem, FilterModalProps, ListItem, PlacesItem } from '../PageTypes';
import { Facilities, Places } from './FilterModalComponent';

const FilterModal: React.FC<FilterModalProps> = ({ visibility, filter, onSelect, onRequestClose }) => {
    const modalPosition = useSharedValue(-fullHeight / 2);
    const modalHeight = useSharedValue(300);

    useEffect(() => {
        const toValue = visibility ? 0 : -fullHeight / 2;
        const duration = visibility ? 300 : 150;

        modalPosition.value = withTiming(toValue, {
            duration,
            easing: Easing.inOut(Easing.ease),
        });

        if (!visibility || !filter.selectedFacilities) {
            modalHeight.value = withTiming(300, {
                duration: 250,
                easing: Easing.inOut(Easing.ease),
            });
        }
    }, [visibility, filter.selectedFacilities])
    
    const modalAnimation = useAnimatedStyle(() => {
      return {
        bottom: modalPosition.value,
        height: modalHeight.value
      }
    });

    const data = useMemo<ListItem[]>(() => {
        if (!filter.selectedFacilities && !filter.selectedPlaces) {
            return publicFacilities;

        } else if (filter.selectedFacilities && !filter.selectedPlaces) {
            const selectedFacility = publicFacilities.find(
                (item) => item.id === filter.selectedFacilities
            );

            if (!selectedFacility?.places) return [];

            // Search item first
            const filteredItems = selectedFacility?.places.filter((item) => {
                return item.name.toLowerCase().includes(filter.search.toLowerCase());
            })

            // Sort item
            const sortedItems = filteredItems.sort((a, b) => {
                if (filter.sortBy === 'DESC') {
                    return b.id - a.id
                }
                return a.id - b.id
            });

            // reformat final result, add icon from parents
            return sortedItems.map((item) => ({
                ...item,
                icon: selectedFacility.icon ?? null
            }));
        
        } else {
            return [];
        }
    }, [filter]);

    const handleChangeFacilities = (value: number) => {
        onSelect('facilities', value);

        modalHeight.value = withTiming(fullHeight / 2.5, {
            duration: 250,
            easing: Easing.inOut(Easing.ease),
        });
    }

    const handleChangePlace = (value: number | null) => {
        onSelect('places', value);

        onRequestClose();
    }

    const renderItem = useCallback(({ item }: { item: ListItem }) => {

        if (!filter.selectedFacilities && !filter.selectedPlaces) {
            const facilities = item as FacilitiesItem
            
            return (
                <Facilities
                    item={facilities}
                    handleSelect={() => handleChangeFacilities(facilities.id)}
                />
            );
        } else {
            const places = item as PlacesItem

            return (
                <Places
                    item={places}
                    handleSelect={() => handleChangePlace(places.id)}
                />
            );
        }
    }, [filter.selectedFacilities, filter.selectedPlaces, handleChangeFacilities, handleChangePlace]);

    const handleClose = () => {
        onSelect('facilities', null);
        onSelect('places', null);

        onRequestClose();
    }

    return (
        <Fragment>
            { visibility && !filter.selectedFacilities && <TouchableOpacity onPress={handleClose} style={styles.backdropFilter} />}

            <Animated.View style={[styles.modalContainer, modalAnimation]}>
                {
                    filter.selectedFacilities
                        ? <View style={styles.panGesture} />
                        
                        : <View style={[globalStyles.rowContainer, { marginBottom: 24 }]}>
                            <Typography variant='BodyMedium'>Pilih Filter</Typography>
                            
                            <TouchableOpacity onPress={handleClose}>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                }

                <FlatList
                    data={data}
                    keyExtractor={(item: ListItem) => String(item.id)}
                    ItemSeparatorComponent={() => <View style={{ height: 1, width: fullWidth, backgroundColor: colors.Gray[100] }} />}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </Animated.View>
        </Fragment>
    )
}

export default FilterModal;

const styles = StyleSheet.create({
    backdropFilter: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: fullWidth,
        height: fullHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.28)'
    },
    modalContainer: {
        ...globalStyles.shadow,
        position: 'absolute', 
        width: fullWidth, 
        backgroundColor: '#fff', 
        borderTopLeftRadius: 16, 
        borderTopRightRadius: 16, 
        paddingVertical: 20, 
        paddingHorizontal: 16
    },
    panGesture: {
        height: 4, 
        borderRadius: 4, 
        backgroundColor: colors.Gray[100], 
        width: 50, 
        alignSelf: 'center', 
        marginTop: -10, 
        marginBottom: 10,
    }
})