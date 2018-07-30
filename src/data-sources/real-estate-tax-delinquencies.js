export default {
  id: 'realEstateTaxDelinquencies',
  type: 'http-get',
  url: 'https://phl.carto.com/api/v2/sql',
  options: {
    params: {
      q: function(feature) {
        var stmt = "select * from real_estate_tax_delinquencies where opa_number = '" + feature.properties.opa_account_num + "'";
        return stmt;
      }
    }
  }
}
