import generateBillingXml from '../util/generate-billing-xml';
import transforms from '../general/transforms';

export default {
  key: 'property',
  icon: 'home',
  label: 'Property Information',
  dataSources: ['opa', 'tips'],
  components: [
    {
      type: 'callout',
      options: {
        class: 'columns small-24',
        components: [
          {
            type: 'division',
            options: {
              class: 'columns small-24 medium-6',
              style: '\
                      display: flex;\
                      flex-direction: column;\
                      justify-content: center;\
                      align-items: center;\
                      ',
              // 'text-align: center; vertical-align: middle;',
              components: [
                {
                  type: 'division',
                  options: {
                    style: '\
                            display: flex;\
                            flex-direction: column;\
                            justify-content: center;\
                            align-items: center;\
                            ',
                    components: [
                      {
                        type: 'any-header',
                        options: {
                          'headerType': 'h4',
                          style: '\
                            margin-bottom: 0px;\
                            margin-top: 0px;\
                          '
                        },
                        slots: {
                          text: 'Balance Due',
                        }
                      },
                    ],
                  },
                },
                {
                  type: 'division',
                  options: {
                    style: '\
                            display: flex;\
                            flex-direction: column;\
                            justify-content: center;\
                            align-items: center;\
                            ',
                    components: [
                      {
                        type: 'any-header',
                        options: {
                          'headerType': 'h2',
                          style: '\
                            margin-bottom: 0px;\
                            margin-top: 0px;\
                          '
                        },
                        slots: {
                          text: function(state) {
                            if (state.appData.propertyBalance) {
                              return state.appData.propertyBalance;
                            } else {
                              return '0';
                            }
                          },
                          additionalTags: ['b'],
                          transforms: [
                            'currency'
                          ]
                        }
                      },
                    ],
                  }
                },
                {
                  type: 'paragraph',
                  options: {
                    style: '\
                    margin: auto;\
                    text-align: center;\
                    '
                  },
                  slots: {
                    text: function(state) {
                      return 'Includes Payments Through: ' + transforms.date.transform(state.sources.tips.data.data.lastPaymentPostedDate);
                    },
                  }
                },
              ]
            },
          },
          {
            type: 'division',
            options: {
              class: 'columns small-24 medium-6',
              style: '\
                      display: flex;\
                      flex-direction: column;\
                      justify-content: center;\
                      align-items: center;\
                      padding-top: 15px;\
                      ',
              components: [
                {
                  type: 'e-pay-form',
                  slots: {
                    buttonAction: function(state) {

                      const data = {
                        'accountNum': state.sources.tips.data.data.accountNum,
                        'totalDue': 0,
                        'balances': state.sources.tips.data.data,
                        'address': {
                          'streetAddress': state.sources.tips.data.data.property.address,
                          'zipCode': state.geocode.data.properties.zip_code,
                        }
                      }
                      return generateBillingXml(data);
                    },
                    text:'Pay Now'
                  }
                },
              ]
            },
          },
          {
            type: 'division',
            options: {
              class: 'columns small-24 medium-12',
              style: '\
                      display: flex;\
                      flex-direction: column;\
                      justify-content: center;\
                      align-items: center;\
                      padding-top: 15px;\
                      margin-bottom: 10px;\
                      ',
              components: [
                {
                  type: 'paragraph',
                  options: {
                    style: '\
                    margin: auto;\
                    '
                  },
                  slots: {
                    text: function(state) {
                      if (state.appData.propertyBalance) {
                        return 'There are other payment options and assistance plans available.';// <a href="https://www.phila.gov/services/payments-assistance-taxes/payment-plans/" target="_blank"><b>CLICK HERE</b></a> for more information.';
                      } else {
                        return 'There is no current balance due on this property';
                      }
                    },
                  }
                },
              ]
            },
          },
          {
            type: 'division',
            options: {
              class: 'columns small-24 medium-12',
              style: '\
                      display: flex;\
                      flex-direction: column;\
                      justify-content: center;\
                      align-items: center;\
                      ',
                      // padding-top: 15px;\
              components: [
                {
                  type: 'button-comp',
                  slots: {
                    buttonAction: function(state) {
                      window.open('https://www.phila.gov/services/payments-assistance-taxes/payment-plans/', '_blank');
                    },
                    text:'Payment Agreements'
                  }
                },
              ]
            },
          },
        ],
      },
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
