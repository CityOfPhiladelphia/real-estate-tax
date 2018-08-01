export default {
  key: 'balance',
  // icon: 'home',
  label: 'Balance Details',
  // REVIEW can these be calculated from vue deps?
  dataSources: ['tips'],
  components: [
    {
      type: 'horizontal-table',
      options: {
        id: 'balanceDetails',
        // limit: 5,
        fields: [
          {
            label: 'Year',
            value: function(state, item){
              return item.year;
            },
            nullValue: 'no year available',
            // transforms: [
            //   'date'
            // ]
          },
          {
            label: 'Principal',
            value: function(state, item){
              return item.principal.toFixed(2);
            },
            transforms: [
              'currency'
            ]
          },
          {
            label: 'Interest',
            value: function(state, item){
              return item.interest.toFixed(2);
            },
            transforms: [
              'currency'
            ]
          },
          {
            label: 'Penalty',
            value: function(state, item){
              return item.penalty.toFixed(2);
            },
            transforms: [
              'currency'
            ]
          },
          {
            label: 'Other',
            value: function(state, item){
              return item.other.toFixed(2);
            },
            transforms: [
              'currency'
            ]
          },
          {
            label: 'Total',
            value: function(state, item){
              return item.total.toFixed(2);
            },
            transforms: [
              'currency'
            ]
          },
          {
            label: 'Lien#',
            value: function(state, item){
              return item.lienNum;
            }
          },
          {
            label: 'City Solicitor',
            value: function(state, item){
              return item.solicitor;
            }
          },
          {
            label: 'Status',
            value: function(state, item){
              return item.status;
            }
          },
        ],
        sort: {
          // this should return the val to sort on
          getValue: function(item) {
            return item.year;
          },
          // asc or desc
          order: 'asc'
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
          var data = state.sources['tips'].data.data.years;
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
