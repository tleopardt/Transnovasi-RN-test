import { View, StyleSheet, TouchableOpacity, StatusBarStyle } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import AppContainer from '@/app/components/AppContainer'
import globalStyles, { colors, fullWidth } from '@/app/styles'
import FormInput from '@/app/components/FormInput'
import SearchIcon from '@/assets/icons/SearchIcon'
import Button from '@/app/components/Button'
import FilterIcon from '@/assets/icons/FilterIcon'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import PlusIcon from '@/assets/icons/PlusIcon'
import MinusIcon from '@/assets/icons/MinusIcon'
import TargetIcon from '@/assets/icons/TargetIcon'
import useLocation from './useLocation'
import FilterModal from './components/FilterModal'
import { DEFAULT_FILTER, DEFAULT_PLACES, DEFAULT_REGION, publicFacilities, SORT_OPTION } from '@/config/constant'
import MenuIcon from '@/assets/icons/MenuIcon'
import OutlinedBellIcon from '@/assets/icons/OutlinedBellIcon'
import CloseIcon from '@/assets/icons/CloseIcon'
import FormSelect from '@/app/components/FormSelect'
import { FilterStateType, markerDataType } from './PageTypes'
import DetailPlaceModal from './components/DetailPlaceModal'

const Peta = () => {
  const mapRef = useRef<MapView | null>(null);
  const [modalFilter, setModalFilter] = useState(false);
  const [modalDetail, setModalDetail] = useState(false);
  const [region, setRegion] = useState(DEFAULT_REGION);
  const [filter, setFilter] = useState<FilterStateType>(DEFAULT_FILTER)
  const [markers, setMarkers] = useState<markerDataType>([]);

  const { liveLocation: { latitude, longitude } } = useLocation();

  useEffect(() => {
    if (filter.selectedFacilities && filter.selectedPlaces) {
      const { latitude, longitude } = detailPlaceData;

      setModalDetail(true);

      const selectedLocation = {
        ...region,
        latitude: latitude,
        longitude: longitude
      }

      mapRef.current?.animateCamera({ center: selectedLocation, zoom: 15 }, { duration: 1000 });
    }
  }, [filter.selectedFacilities, filter.selectedPlaces])

  const onShowUserLocation = useCallback(() => {
    if (!latitude || !longitude) return;

    const myLocation = {
      ...region,
      latitude: latitude,
      longitude: longitude
    };

    setRegion(myLocation);
    setMarkers([{ id: 0, latitude, longitude }])

    mapRef.current?.animateCamera(
      { center: myLocation, zoom: 15 }, 
      { duration: 1000 }
    );
  }, [region, latitude, longitude])

  const handleZoom = async (direction: 'in' | 'out') => {
    if (mapRef.current) {
      const camera = await mapRef.current.getCamera();
      const currentZoom = typeof camera.zoom === 'number' ? camera.zoom : 15;

      camera.zoom = direction === 'in' ? currentZoom + 1 : currentZoom - 1;

      mapRef.current.animateCamera(camera, { duration: 500 });
    }
  }

  const handleChangeState = <Key extends keyof FilterStateType>(key: Key, value: FilterStateType[Key]) => {
    setFilter(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleFilter = (type: 'facilities' | 'places', value: number | null) => {
    if (type === 'facilities') {
      setFilter(prevState => ({
        ...prevState,
        selectedFacilities: value
    }))
    
    // set up markers
    const selectedFacilities = publicFacilities.find((item) => item.id === value);

    const markerData = selectedFacilities?.places.map((item) => ({ 
      id: item.id, 
      latitude: item.latitude, 
      longitude: item.longitude 
    }))
    
    setMarkers(markerData ?? [])

    } else if (type === 'places') {
      setFilter(prevState => ({
        ...prevState,
        selectedPlaces: value
      }))
  
      // set up markers
      const selectedPlaces = markers.filter((item: any) => item.id === value);

      const markerData = selectedPlaces.map((item) => ({ 
        id: item.id, 
        latitude: item.latitude, 
        longitude: item.longitude 
      }))
      
      setMarkers(markerData ?? [])
    }
    
    else return;
  }

  const detailPlaceData = useMemo(() => {
    if (!filter.selectedFacilities || !filter.selectedPlaces) {
      return DEFAULT_PLACES;
    }

    const selectedFacility = publicFacilities.find(
      facility => facility.id === filter.selectedFacilities
    );

    if (!selectedFacility) return DEFAULT_PLACES;

    const selectedPlace = selectedFacility.places.find(
      place => place.id === filter.selectedPlaces
    );

    if (!selectedPlace) return DEFAULT_PLACES;

    return {
      ...selectedPlace,
      icon: selectedFacility.icon ?? null,
    };
  }, [filter.selectedFacilities, filter.selectedPlaces])

  const currentFacilities = useMemo(() => 
    publicFacilities.find(item => item.id === filter.selectedFacilities), 
  
  [filter.selectedFacilities]);

  const onResetFilter = () => {
    setFilter(DEFAULT_FILTER);
    
    setModalDetail(false);
    setModalFilter(false);
    setMarkers([]);
  }

  const renderMarker = useCallback(() => {
    return markers.map((item) => (
      <Marker
        key={item.id}
        pinColor={colors.Blue[500]}
        coordinate={{ latitude: item.latitude, longitude: item.longitude }}
      />
    ))    
  }, [markers])

  const headerConfig = useMemo(() => {
    if (filter.selectedFacilities) {
      return {
        title: currentFacilities?.name ?? 'Peta',
        backgroundColor: colors.White,
        tintColor: colors.Black,
        statusBarStyle: 'dark-content' as StatusBarStyle,
        headerStyle: { borderBottomWidth: 1, borderColor: colors.Gray[100] },
        rightIcon: (
          <TouchableOpacity onPress={onResetFilter}>
            <CloseIcon />
          </TouchableOpacity>
        ),
      };
    }

    return {
      title: 'Peta',
      statusBarStyle: 'light-content' as StatusBarStyle,
      backgroundColor: colors.Blue[500],
      tintColor: colors.White,
      leftIcon: <MenuIcon />,
      rightIcon: <OutlinedBellIcon />,
    };
  }, [filter.selectedFacilities, currentFacilities, handleChangeState]);

  return (
    <AppContainer edges={['top']} {...headerConfig}>
      <View style={styles.contentWrapper}>
        <MapView 
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}>
          
          {renderMarker()}
        </MapView>
        {
          !filter.selectedPlaces &&
            <View style={[styles.filterWrapper, filter.selectedFacilities ? { backgroundColor: colors.White } : {} ]}>
              <FormInput 
                placeholder='Cari lokasi' 
                onChangeText={(value) => handleChangeState('search', value)}
                leftIcon={<SearchIcon stroke={colors.Gray[300]} />}
                variant={filter.selectedFacilities ? 'outlined' : null}
                wrapperStyle={[globalStyles.shadow, { flex: 1 }]} />

              {
                filter.selectedFacilities &&
                  <FormSelect 
                    options={SORT_OPTION}
                    defaultValue={SORT_OPTION[0].value}
                    onChange={(selected) => handleChangeState('sortBy', selected)}
                    selectorStyle={{ wrapper: { width: fullWidth * 0.25, backgroundColor: colors.White } }} />
              }
            </View>
        }

        {
          !filter.selectedFacilities &&
            <Button 
              text='Filter Peta' 
              onPress={() => setModalFilter(true)}
              leftIcon={<FilterIcon stroke={colors.Black} />}
              style={{ position: 'absolute', bottom: 12 }} />
        }

        <View style={styles.controlContainer}>
          <View style={styles.zoomControl}>
            <TouchableOpacity onPress={() => handleZoom('in')} activeOpacity={0.8} style={styles.controlButton}>
              <PlusIcon stroke={colors.Gray[300]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleZoom('out')} activeOpacity={0.8} style={styles.controlButton}>
              <MinusIcon stroke={colors.Gray[300]} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onShowUserLocation} activeOpacity={0.8} style={styles.controlButton}>
            <TargetIcon fill={colors.Gray[300]} />
          </TouchableOpacity>
        </View>

        <FilterModal 
          visibility={modalFilter} 
          filter={filter}
          onRequestClose={() => setModalFilter(false)}
          onSelect={handleFilter} />

        <DetailPlaceModal
          visibility={modalDetail}
          data={detailPlaceData} />
      </View>
    </AppContainer>
  )
}

export default Peta

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.Blue[500]
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.Gray[100]
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  filterWrapper: {
    top: 0, 
    gap: 12, 
    flexDirection: 'row',
    width: fullWidth,
    paddingHorizontal: 16, 
    paddingVertical: 12, 
  },
  controlContainer: {
    position: 'absolute',
    top: 66,
    right: 16,
    gap: 16
  },
  zoomControl: {
    ...globalStyles.shadow,
    backgroundColor: colors.White, 
    borderRadius: 4,
  },
  controlButton: { 
    backgroundColor: colors.White, 
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  }
})