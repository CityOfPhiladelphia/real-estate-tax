import helpers from '../util/helpers';

export default {
  id: 'tips',
  type: 'http-get',
  url: '//api.phila.gov/tips_test/accountz/',
  options: {
    params: {
      urlAddition: function (feature) {
        return feature.properties.opa_account_num;
      },
    },
    success: function(data) {
      return data;
    }
  }
}
