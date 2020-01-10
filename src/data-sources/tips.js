export default {
  id: 'tips',
  type: 'http-get',
  url: 'http://testapigateway.phila.gov:4444/RevRealEstateTax_2.0',
  options: {
    params: {
      'BRT-NO': function (feature) {
        return feature.properties.opa_account_num;
      },
      // urlAddition: function (feature) {
      //   return feature.properties.opa_account_num;
      // },
      // gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
    },
    success: function(data) {
      return data;
    },
  },
};
