export default {
  id: 'refuse',
  type: 'http-get',
  url: 'http://testapigateway.phila.gov:4444/gateway/RTTAN401_API_rest/1.0/RTTAN401.webservice.RTTAN401_rest_webService',
  options: {
    params: {
      'BRT-NO': function(feature){
        console.log('feature:', feature)
        return feature.properties.opa_account_num
      }
    },
    success: function(data) {
      return data;
    }
  }
}
