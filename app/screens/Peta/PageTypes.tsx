import { SvgProps } from "react-native-svg";

export type FilterStateType = {
    sortBy: string,
    search: string,
    selectedFacilities: number | null,
    selectedPlaces: number | null
}

export type FilterModalProps = {
    visibility: boolean;
    filter: FilterStateType;
    onSelect: (type: 'facilities' | 'places', value: number | null) => void;
    onRequestClose: () => void;
}

export type ListItem = FacilitiesItem | PlacesItem

export type PlacesItem = {
    id: number | null;
    type: string;
    name: string;
    latitude: number;
    longitude: number;
    phone: string;
    officerName: string;
    officerRank: string;
    location: string;
    icon?: React.ComponentType<SvgProps> | null;
}


export type PlacesProps = {
    item: PlacesItem, 
    handleSelect: () => void
}

export type FacilitiesItem = {
    id: number;
    name: string;
    icon: React.ComponentType<SvgProps>;
    places: PlacesItem[];
}

export type FacilitiesProps = {
    item: FacilitiesItem, 
    handleSelect: () => void
}

export type DetailPlaceModalType = {
    visibility: boolean, 
    data: PlacesItem
}

export type markerDataType = {
    id: number;
    latitude: number;
    longitude: number;
}[]