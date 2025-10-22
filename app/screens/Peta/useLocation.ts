import {
  PermissionsAndroid,
  Platform,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import { useCallback, useEffect, useRef, useState } from "react";

export type locationHookProps = {
    laittude: number,
    longitude: number
}

const requestLocationPermission = async () => {
  if (Platform.OS === "ios") {
    const permission = await Geolocation.requestAuthorization("whenInUse");

    return permission === "granted";
  }

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Authorize your location to continue?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    return granted === "granted";
  } catch (err) {
    return false;
  }
};

const useLocation = () => {
  const watchId = useRef<number>(null);
  const iosIntervalId = useRef<number>(null);
  const [liveLocation, setLiveLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getLocation = useCallback(async () => {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) return;

    if (Platform.OS === "android") {
      // Use watchPosition for Android
      watchId.current = Geolocation.watchPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          setLiveLocation({ latitude: latitude, longitude: longitude });
        },
        (error) => {
          setLiveLocation({ latitude: 0, longitude: 0 });
        },
        {
          enableHighAccuracy: true,
          showLocationDialog: true,
          distanceFilter: 0,
          interval: 10000,
          fastestInterval: 10000,
        }
      );
    } else {
      // Immediately fetch location once
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLiveLocation({ latitude: latitude, longitude: longitude });
        },

        //   error handling
        () => {
          setLiveLocation({ latitude: 0, longitude: 0 });
        },

        // other option
        {
          enableHighAccuracy: true,
          timeout: 15000,
        }
      );

      // Then start interval for repeated updates
      iosIntervalId.current = setInterval(() => {
        Geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLiveLocation({ latitude: latitude, longitude: longitude });
          },

          //   error handling
          () => {
            setLiveLocation({ latitude: 0, longitude: 0 });
          },

          // other option
          {
            enableHighAccuracy: true,
            timeout: 15000,
          }
        );
      }, 10000); // Every 10 seconds
    }
  }, []);

  useEffect(() => {
    getLocation();

    return () => {
      if (watchId.current) {
        Geolocation.clearWatch(watchId.current);

        watchId.current = null;
      }

      if (iosIntervalId.current) {
        clearInterval(iosIntervalId.current);

        iosIntervalId.current = null;
      }
    };
  }, []);

  return { liveLocation };
};

export default useLocation;