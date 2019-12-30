export default {
  id: 'condoList',
  type: 'http-get',
  url: '//api.phila.gov/ais/v1/search/',
  options: {
    params: {
      urlAddition: function (feature) {
        return feature.properties.street_address;
      },
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
      include_units: true,
      opa_only: true,
      page: 1,
    },
    success: function(data) {
      return data;
    },
  },
};
