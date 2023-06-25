import mapMp from "../../assets/images/map-madhya-pradesh.jpg";
import mapAndhraPradesh from "../../assets/images/map-andhra-pradesh.jpeg";
import mapArunachalPradesh from "../../assets/images/map-arunachal-pradesh.jpg";
import mapAssam from "../../assets/images/map-assam.jpg";
import mapBihar from "../../assets/images/map-bihar.jpg";
import mapChhattisgarh from "../../assets/images/map-chhattisgarh.jpg";
import mapGoa from "../../assets/images/map-goa.jpg";
import mapGujrat from "../../assets/images/map-gujarat.jpg";
import mapHaryana from "../../assets/images/map-haryana.jpg";
import mapHimanchalPradesh from "../../assets/images/map-himanchal-pradesh.jpg";
import mapJharkhand from "../../assets/images/map-jharkhand.jpg";
import mapKarnataka from "../../assets/images/map-karnataka.jpg";
import mapKerela from "../../assets/images/map-kerala.jpg";
import mapMaharashtra from "../../assets/images/map-maharashtra.jpg";
import mapManipur from "../../assets/images/map-manipur.jpg";
import mapMeghalaya from "../../assets/images/map-meghalaya.jpg";
import mapMizoram from "../../assets/images/map-mizoram.jpg";
import mapNagaland from "../../assets/images/map-nagaland.jpg";
import mapOdisha from "../../assets/images/map-orissa.jpg";
import mapPunjab from "../../assets/images/map-punjab.jpg";
import mapRajasthan from "../../assets/images/map-rajasthan.jpg";
import mapSikkim from "../../assets/images/map-sikkim.jpg";
import mapTamilNadu from "../../assets/images/map-tamil-nadu.jpg";
import mapTelangana from "../../assets/images/map-tamil-nadu.jpg";
import mapTripura from "../../assets/images/map-tripura.jpg";
import mapUttarakhand from "../../assets/images/map-uttarakhand.jpg";
import mapUttarPradesh from "../../assets/images/map-uttar-pradesh.jpg";
import mapWestBengal from "../../assets/images/map-west-bengal.jpg";

export const initialState = {
  states: [
    {
      value: "AP",
      label: "Andhra Pradesh",
      name: "andhra-pradesh",
      image: mapAndhraPradesh,
    },
    {
      value: "AR",
      label: "Arunachal Pradesh",
      name: "arunachal-pradesh",
      image: mapArunachalPradesh,
    },
    {
      value: "AS",
      label: "Assam",
      name: "assam",
      image: mapAssam,
    },
    {
      value: "BR",
      label: "Bihar",
      name: "bihar",
      image: mapBihar,
    },

    {
      value: "CH",
      label: "Chhattisgarh",
      name: "chhattisgarh",
      image: mapChhattisgarh,
    },

    {
      value: "GA",
      label: "Goa",
      name: "goa",
      image: mapGoa,
    },
    {
      value: "GJ",
      label: "Gujarat",
      name: "gujarat",
      image: mapGujrat,
    },
    {
      value: "HR",
      label: "Haryana",
      name: "haryana",
      image: mapHaryana,
    },
    {
      value: "HP",
      label: "Himachal Pradesh",
      name: "himachal-pradesh",
      image: mapHimanchalPradesh,
    },

    {
      value: "JH",
      label: "Jharkhand",
      name: "jharkhand",
      image: mapJharkhand,
    },
    {
      value: "KA",
      label: "Karnataka",
      name: "karnataka",
      image: mapKarnataka,
    },
    {
      value: "KL",
      label: "Kerala",
      name: "kerela",
      image: mapKerela,
    },

    {
      value: "MP",
      label: "Madhya Pradesh",
      name: "madhya-pradesh",
      image: mapMp,
    },
    {
      value: "MH",
      label: "Maharashtra",
      name: "maharashtra",
      image: mapMaharashtra,
    },
    {
      value: "MN",
      label: "Manipur",
      name: "manipur",
      image: mapManipur,
    },
    {
      value: "ML",
      label: "Meghalaya",
      name: "meghalaya",
      image: mapMeghalaya,
    },
    {
      value: "MZ",
      label: "Mizoram",
      name: "mizoram",
      image: mapMizoram,
    },
    {
      value: "NL",
      label: "Nagaland",
      name: "nagaland",
      image: mapNagaland,
    },
    {
      value: "OR",
      label: "Odisha",
      name: "odisha",
      image: mapOdisha,
    },

    {
      value: "PB",
      label: "Punjab",
      name: "punjab",
      image: mapPunjab,
    },
    {
      value: "RJ",
      label: "Rajasthan",
      name: "rajasthan",
      image: mapRajasthan,
    },
    {
      value: "SK",
      label: "Sikkim",
      name: "sikkim",
      image: mapSikkim,
    },
    {
      value: "TN",
      label: "Tamil Nadu",
      name: "tamil-nadu",
      image: mapTamilNadu,
    },
    {
      value: "TS",
      label: "Telangana",
      name: "telangana",
      image: mapTelangana,
    },
    {
      value: "TR",
      label: "Tripura",
      name: "tripura",
      image: mapTripura,
    },
    {
      value: "UK",
      label: "Uttarakhand",
      name: "uttarakhand",
      image: mapUttarakhand,
    },
    {
      value: "UP",
      label: "Uttar Pradesh",
      name: "uttar-pradesh",
      image: mapUttarPradesh,
    },
    {
      value: "WB",
      label: "West Bengal",
      name: "west-bengal",
      image: mapWestBengal,
    },
  ],

  unionTerritories: [
    {
      value: "AN",
      label: "Andaman and Nicobar Islands",
      name: "andaman-and-nicobar",
      image: "",
    },
    {
      value: "PY",
      label: "Puducherry",
      name: "puducherry",
    },
    {
      value: "LD",
      label: "Lakshadweep",
      name: "lakshadweep",
    },
    {
      value: "JK",
      label: "Jammu and Kashmir",
      name: "jammu-and-kashmir",
    },
    {
      value: "LA",
      label: "Ladakh",
      name: "ladakh",
    },
    {
      value: "DH",
      label: "Daman & Diu Dadra and Nagar Haveli",
      name: "daman-and-diu-dadra-and-nagar-haveli",
    },
    {
      value: "DL",
      label: "Delhi",
      name: "delhi",
    },
    {
      value: "CG",
      label: "Chandigarh",
      name: "chandigarh",
    },
  ],
};
