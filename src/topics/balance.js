export default {
  key: 'balance',
  // icon: 'home',
  label: 'Balance Details',
  // REVIEW can these be calculated from vue deps?
  dataSources: ['opa'],
  components: [
    {
      type: 'horizontal-table',
      options: {
        id: 'balanceDetails',
        limit: 5,
        fields: [
          {
            label: 'Year',
            value: function(state, item){
              return item.most_recent_year_owed;
            },
            nullValue: 'no date available',
            transforms: [
              'date'
            ]
          },
          {
            label: 'Principal',
            value: function(state, item){
              return item.principal_due;
            }
          },
          {
            label: 'Interest',
            value: function(state, item){
              return item.interest_due;
            }
          },
          {
            label: 'Penalty',
            value: function(state, item){
              return item.penalty_due;
            }
          },
          {
            label: 'Other',
            value: function(state, item){
              return item.other_charges_due;
            }
          },
          {
            label: 'Total',
            value: function(state, item){
              return item.total_due;
            }
          },
          {
            label: 'Owner',
            value: function(state, item){
              return item.owner;
            }
          },
          {
            label: 'Status',
            value: function(state, item){
              return item.agreement_agency;
            }
          },
        ],
        sort: {
          // this should return the val to sort on
          getValue: function(item) {
            return item.permitissuedate;
          },
          // asc or desc
          order: 'desc'
        },
        // externalLink: {
        //   action: function(count) {
        //     return 'See ' + count + ' older permits at L&I Property History';
        //   },
        //   name: 'L&I Property History',
        //   href: function(state) {
        //     var address = state.geocode.data.properties.street_address;
        //     var addressEncoded = encodeURIComponent(address);
        //     return 'http://li.phila.gov/#summary?address=' + addressEncoded;
        //   }
        // }
      },
      slots: {
        title: 'Balance Details',
        items: function(state) {
          var data = state.sources['realEstateTaxDelinquencies'].data.rows;
          var rows = data.map(function(row){
            var itemRow = row;
            return itemRow;
          });
          return rows;
        },
      },
    },
  ],
}
