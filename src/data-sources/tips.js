export default {
  id: 'tips',
  type: 'http-get',
  url: 'https://testapigateway.phila.gov/RevRealEstateTax',
  options: {
    params: {
      'BRT-NO': function (feature) {
        return feature.properties.opa_account_num;
      },
    },
    success: function(data) {
      return data;
    },
  },
};
