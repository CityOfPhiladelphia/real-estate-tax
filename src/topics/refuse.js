export default {
  key: 'refuse',
  icon: 'trash-alt',
  label: 'Refuse',
  dataSources: ['refuseData'],
  components: [
    {
      type: 'callout',
      slots: {
        text: 'here is some refuse data'
      }
    },
    {
      type: 'vertical-table',
      slots: {
        fields: [
          {
            label: 'PI-OWNER-NAME',
            value: function(state) {
              return state.sources.refuseData.data['#PROPERTY-INFO']['#PI-OWNER-NAME'];
            }
          },
          {
            label: 'PI-SCE-ACCOUNT-ID',
            value: function(state) {
              return state.sources.refuseData.data['#PROPERTY-INFO']['#PI-SCE-ACCOUNT-ID'];
            }
          },
          {
            label: 'PI-PAYMENTS-POSTED-THRU',
            value: function(state) {
              return state.sources.refuseData.data['#PROPERTY-INFO']['#PI-PAYMENTS-POSTED-THRU'];
            }
          },
          {
            label: 'PI-PENALTY-CALC-DATE',
            value: function(state) {
              return state.sources.refuseData.data['#PROPERTY-INFO']['#PI-PENALTY-CALC-DATE'];
            }
          },
        ]
      }
    },
    {
      type: 'horizontal-table',
      options: {
        id: 'refuseDetails',
        fields: [
          {
            label: 'Year',
            value: 'test'
          },
          {
            label: 'test2',
            value: 'test2'
          }
        ]
      },
      slots: {
        title: 'Refuse Details',
        items: function(state) {
          // var data = { ...state.sources.refuseData.data['#ACCOUNT-PERIODS']}
          var data = state.sources.refuseData.data['#ACCOUNT-PERIODS']
          let returnData = []
          for (let row of data) {
            returnData.push(row.split('+'));
          }
          console.log('returnData:', returnData);
          return returnData;
        }
      }
    }
  ]
}
