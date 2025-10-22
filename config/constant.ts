import FireStationIcon from "@/assets/icons/FireStationIcon";
import HospitalIcon from "@/assets/icons/HospitalIcon";
import PoliceStationIcon from "@/assets/icons/PoliceStationIcon";
import SchoolIcon from "@/assets/icons/SchoolIcon";

export const ROUTES = {
  App: "App",
  Beranda: "Beranda",
  Peta: "Peta",
  Renglat: "Renglat",
};

export const DEFAULT_REGION = {
  latitude: -6.2318,
  longitude: 106.8506,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
}

export const SORT_OPTION = [
  { label: 'Ascending', value: 'ASC' },
  { label: 'Descending', value: 'DESC' },
]

export const DEFAULT_PLACES = {
  id: null,
  type: "",
  name: "",
  latitude: 0,
  longitude: 0,
  phone: "",
  officerName: "",
  officerRank: "",
  location: "0"
}

export const DEFAULT_FILTER = {
  sortBy: 'ASC',
  search: '',
  selectedFacilities: null,
  selectedPlaces: null
}

export const publicFacilities = [
  {
    id: 1,
    name: "Posko 1",
    icon: PoliceStationIcon,
    places: [
      {
        id: 1,
        type: "Police Station",
        name: "Polsek Tebet",
        latitude: -6.2311,
        longitude: 106.8525,
        phone: "021-8303570",
        officerName: "Kompol Andi Wijaya",
        officerRank: "Kompol",
        location: "Jl. Prof. DR. Soepomo No.55, RT.13/RW.2, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870"
      },
      {
        id: 2,
        type: "Police Station",
        name: "Polsek Tebet Timur Dalam III",
        latitude: -6.2300,
        longitude: 106.8550,
        phone: "021-xxx-xxxx", 
        officerName: "No officer name",
        officerRank: "No rank",
        location: "Jl. Tebet Timur Dalam III No.96, Daerah Khusus Ibukota Jakarta" 
      },
      {
        id: 3,
        type: "Police Station",
        name: "Polsek Kebon Baru",
        latitude: -6.2380,
        longitude: 106.8590,
        phone: "021-xxx-xxxx", 
        officerName: "No officer name",
        officerRank: "No rank",
        location: "Kel. Kebon Baru, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta" 
      }
    ],
  },

  {
    id: 2,
    name: "Posko 2",
    icon: HospitalIcon,
    places: [
      {
        id: 4,
        type: "Hospital",
        name: "RS Tebet",
        latitude: -6.2342,
        longitude: 106.8509,
        phone: "021-83708888",
        officerName: "Dr. Rina Kartika",
        officerRank: "Director",
        location: "Jl. Letjen M.T. Haryono No.8, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810"
      },
      {
        id: 5,
        type: "Hospital",
        name: "RSUD Tebet",
        latitude: -6.2320,
        longitude: 106.8530,
        phone: "021-8314955",
        officerName: "Dr. XYZ",
        officerRank: "Director",
        location: "Jl. Prof. DR. Soepomo SH No.54, Tebet Barat, Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810"
      },
      {
        id: 6,
        type: "Hospital",
        name: "RS Tebet (Letjen M.T. Haryono Kav.13)",
        latitude: -6.2428,
        longitude: 106.8502,
        phone: "021-xxx-xxxx",
        officerName: "Dr. LMN",
        officerRank: "Director",
        location: "Kav.13, Jl. Letjen M.T. Haryono, Tebet Barat, Kec. Tebet, Kota Jakarta Selatan"
      }
    ],
  },

  {
    id: 3,
    name: "Posko 3",
    icon: FireStationIcon,
    places: [
      {
        id: 7,
        type: "Fire Station",
        name: "Pos Pemadam Kebakaran Tebet",
        latitude: -6.2297,
        longitude: 106.8492,
        phone: "021-7505111",
        officerName: "Budi Santoso",
        officerRank: "Chief",
        location: "Jl. Prof. DR. Soepomo No.47, RT.10/RW.6, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810"
      },
      {
        id: 8,
        type: "Fire Station",
        name: "Pos Damkar Tebet Sektor VI",
        latitude: -6.2402,
        longitude: 106.8457,
        phone: "021-6330325",
        officerName: "Chief JKL",
        officerRank: "Chief",
        location: "DR. Supomo No.47, RT.10/RW.6, Tebet Bar., Tebet, Kota Jakarta Selatan, DKI Jakarta"
      },
      {
        id: 9,
        type: "Fire Station",
        name: "Damkar Kebon Baru",
        latitude: -6.2385,
        longitude: 106.8570,
        phone: "021-xxx-xxxx",
        officerName: "Chief MNO",
        officerRank: "Chief",
        location: "Kel. Kebon Baru, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta"
      }
    ],
  },

  {
    id: 4,
    name: "Posko 4",
    icon: SchoolIcon,
    places: [
      {
        id: 10,
        type: "School",
        name: "SMA Negeri 26 Jakarta",
        latitude: -6.2326,
        longitude: 106.8534,
        phone: "021-8302471",
        officerName: "Ibu Ratna Dewi",
        officerRank: "Principal",
        location: "Jl. Tebet Barat IV No.7, RT.7/RW.2, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810"
      },
      {
        id: 11,
        type: "School",
        name: "Kinderfield School Tebet",
        latitude: -6.2318,
        longitude: 106.8540,
        phone: "021-8303209",
        officerName: "Frensiska Theodora Saimima",
        officerRank: "Principal",
        location: "Jl. Prof. Dr. Soepomo No. 11A, Tebet, Jakarta Selatan 12810"
      },
      {
        id: 12,
        type: "School",
        name: "Madina Islamic School Tebet",
        latitude: -6.2330,
        longitude: 106.8520,
        phone: "021-8312311",
        officerName: "Dr. PQR",
        officerRank: "Principal",
        location: "Jl. Tebet Dalam IV No.1, RT.12/RW.1, Tebet Barat, Kec. Tebet, Kota Jakarta Selatan 12810"
      }
    ],
  },
];

