export default {
  key: 'agreements',
  icon: 'handshake',
  label: 'Payment Agreements',
  // REVIEW can these be calculated from vue deps?
  // dataSources: ['opa'],
  components: [
    {
      type: 'callout',
      options: {
        components: [
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
                  type: 'paragraph',
                  options: {
                    style: '\
                    margin: auto;\
                    '
                  },
                  slots: {
                    text: function(state) {
                      if (state.appData.propertyBalance) {
                        return 'There are other payment options and assistance plans available.';
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
  ],
}
