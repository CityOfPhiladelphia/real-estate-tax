export default {
  id: 'tips',
  type: 'http-get',
  url: '//api.phila.gov/tips/account/',
  options: {
    params: {
      urlAddition: function (feature) {
        return feature.properties.opa_account_num;
      },
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
    },
    success: function(data) {
      return data;
    },
  },
};
