export default {
  // possibly should move to base config
  defaultBasemap: 'pwd',
  defaultIdentifyFeature: 'address-marker',
  imagery: {
    enabled: true,
  },
  historicBasemaps: {
    enabled: true,
  },
  featureLayers: {
    dorParcels: {
      url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/DOR_Parcel/FeatureServer/0',
    },
    pwdParcels: {
      url: 'https://services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0',
    },
  },
};
