// import generateBillingXml from '../util/generate-billing-xml';
import transforms from '../general/transforms';
// import propertyCallout from '../components/propertyCallout.vue';
import account from '../util/account.js';

export default {
  key: 'property',
  icon: 'home',
  label: 'Property Information',
  // dataSources: ['opa'],
  dataSources: ['opa', 'tips'],
  errorMessage: function() {
    return 'Could not locate tax records for that address.';
  },
  components: [
    {
      type: 'propertyCallout',
    },
    {
      type: 'vertical-table',
      slots: {
        fields: [
          {
            label: 'OPA Account #',
            value: function(state) {
              return state.geocode.data.properties.opa_account_num;
            }
          },
          {
            label: 'OPA Address',
            value: function(state) {
              return state.geocode.data.properties.opa_address;
            }
          },
          {
            label: 'Owners',
            value: function(state) {
              var owners = state.geocode.data.properties.opa_owners;
              var ownersJoined = owners.join(', ');
              return ownersJoined;
            }
          },
          {
            label: 'Assessed Value',// + new Date().getFullYear(),
            value: function(state) {
              var data = state.sources.opa.data;
              var result;
              if (data) {
                result = data.market_value;
              } else {
                result = 'no data';
              }
              return result;
            },
            transforms: [
              'currency'
            ]
          },
          {
            label: 'Sale Date',
            value: function(state) {
              var data = state.sources.opa.data;
              var result;
              if (data) {
                result = data.sale_date;
              } else {
                result = 'no data';
              }
              return result;
            },
            transforms: [
              'date'
            ]
          },
          {
            label: 'Sale Price',
            value: function(state) {
              var data = state.sources.opa.data;
              var result;
              if (data) {
                result = data.sale_price;
              } else {
                result = 'no data';
              }
              return result;
            },
            transforms: [
              'currency'
            ]
          },
        ],
      },
      options: {
        id: 'opaData',
        // requiredSources: ['opa'],
        externalLink: {
          action: function(count) {
            return 'See more';
          },
          name: 'Property Search',
          href: function(state) {
            var id = state.geocode.data.properties.opa_account_num;
            return 'http://property.phila.gov/?p=' + id;
          }
        }
      }
    }
  ],
}
