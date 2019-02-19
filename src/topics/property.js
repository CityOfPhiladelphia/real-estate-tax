import generateBillingXml from '../util/generate-billing-xml';
import transforms from '../general/transforms';
// import propertyCallout from '../components/propertyCallout.vue';
import account from '../util/account.js';

export default {
  key: 'property',
  icon: 'home',
  label: 'Property Information',
  // dataSources: ['opa'],
  dataSources: ['opa', 'tips'],
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
            label: 'Owner',
            value: function(state) {
              // var owners = state.geocode.data.properties.opa_owners;
              // var ownersJoined = owners.join(', ');
              // return ownersJoined;
              var owner = state.sources.tips.data.data.property.ownerName;
              return owner;
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
          {
            label: 'Lien Sale Account',
            value: function(state) {
              var owner = state.sources.tips.data.data.property.lienSaleInd;
              return owner;
            }
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
    },
    {
      type: 'callout',
      slots: {
        text: '<b>If Lien Sale Account is marked Y, the amount due listed may not include all Real Estate Tax liabilities. Call 215-790-1117 for more information.</b>',
      }
    }
  ],
  errorMessage: function (state) {
    var tipsStatus = state.sources.tips.status;
    var opaData = state.sources.opa.data;
    if (tipsStatus === 'error' && opaData !== undefined) {
      return 'Could not locate tax records for that address.'
    }

    var condoData = state.sources.condoList.data;
        // features = data.features;

    if (condoData) {
      var numCondos = condoData.total_size;

      if (numCondos > 0) {
        var shouldPluralize = numCondos > 1,
            isOrAre = shouldPluralize ? 'are' : 'is',
            unitOrUnits = shouldPluralize ? 'units' : 'unit',
            message = [
              '<h3>',
              'There ',
              isOrAre,
              // ' <strong>',
              ' ',
              numCondos,
              ' condominium ',
              unitOrUnits,
              // '</strong> at this address.</h3>',
              ' at this address.</h3>',
              // ' at this address. ',
              '<p>You can use the Condominiums tab above to see information for an individual unit.</p>'
              // 'Please select a unit from the Condominiums tab below.'
            ].join('');

        return message;
      }
    } else {
      return 'There is no property assessment record for this address.';
    }
  }
}
