export default {
  id: 'tax',
  type: 'http-get',
  // url: '//testapigateway.phila.gov:4444/RevRealEstateTax',
  url: '//testapigateway.phila.gov:4444/RevRealEstateTax_2.0',
  options: {
    params: {
      'BRT-NO': function (feature) {
        return feature.properties.opa_account_num
      }
    },
    success: function(data) {
      return data;
    }
  }
}