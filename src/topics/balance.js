import transforms from '../general/transforms.js';

export default {
  key: 'balance',
  icon: 'usd-circle',
  label: 'Balance Details',
  // REVIEW can these be calculated from vue deps?
  dataSources: [ 'tips' ],
  errorMessage: function() {
    return 'Could not locate tax records for that address.';
  },
  components: [
    {
      type: 'horizontal-table',
      options: {
        id: 'balanceDetails',
        export: {
          formatButtons: {
            'csv': 'CSV',
            'pdf': 'PDF',
          },
          buttonPosition: 'right',
          file: function(state) {
            return state.sources.tips.data.data.accountNum + '_BalanceDetails';
          },
          introLines: [
            function(state) {
              return state.geocode.data.properties.street_address;
            },
            function(state) {
              const zipCode = state.geocode.data.properties.zip_code;
              const zip4 = state.geocode.data.properties.zip_4;
              const parts = [ zipCode ];
              if (zip4) {
                parts.push(zip4);
              }
              return 'Philadelphia PA ' + parts.join('-');
            },
            function(state) {
              return 'OPA Number ' + state.sources.tips.data.data.accountNum.toString();
            },
            function(state) {
              var owner = state.sources.tips.data.data.property.ownerName;
              // var owners = state.geocode.data.properties.opa_owners;
              // var ownersJoined = owners.join(', ');
              return 'Owner: ' + owner;
            },
            function(state) {
              var data = state.sources.opa.data;
              var result;
              if (data) {
                result = data.market_value;
              } else {
                result = 'no data';
              }
              return 'Assessed Value: $' + result + '.00';
            },
            function(state) {
              var data = state.sources.opa.data;
              var result;
              if (data) {
                result = data.sale_date;
              } else {
                result = 'no data';
              }
              return 'Sale Date: ' + transforms.date.transform(result);
            },
            function(state) {
              var data = state.sources.opa.data;
              var result;
              if (data) {
                result = data.sale_price;
              } else {
                result = 'no data';
              }
              return 'Sale Price: $' + result + '.00';
            },
          ],
        },
        totalRow: {
          enabled: true,
          totalField: 'year',
        },
        fields: [
          {
            label: 'Year',
            value: function(state, item){
              return item.year;
            },
            nullValue: 'no year available',
            transforms: [
              'misc',
            ],
          },
          {
            label: 'Principal',
            value: function(state, item){
              return item.principal_bal.toFixed(2);
            },
            transforms: [
              'currency',
            ],
          },
          {
            label: 'Interest',
            value: function(state, item){
              return item.interest_bal.toFixed(2);
            },
            transforms: [
              'currency',
            ],
          },
          {
            label: 'Penalty',
            value: function(state, item){
              return item.penalty_bal.toFixed(2);
            },
            transforms: [
              'currency',
            ],
          },
          {
            label: 'Other',
            value: function(state, item){
              return item.other_change_bal.toFixed(2);
            },
            transforms: [
              'currency',
            ],
          },
          {
            label: 'Total',
            value: function(state, item){
              return item.total_balance.toFixed(2);
            },
            transforms: [
              'currency',
            ],
          },
          {
            label: 'Lien Number',
            value: function(state, item){
              return item.lienNum;
            },
          },
          {
            label: 'City Solicitor',
            value: function(state, item){
              return item.solicitor;
            },
          },
          {
            label: 'Status',
            value: function(state, item) {
              return item.status;
            },
            popoverLink: true,
            popoverTransforms: [
              'statusMap',
            ],
            popoverPreText: function(state, item) {
              return '<i class="fa fa-info-circle" aria-hidden="true"></i> <strong>' + item.status + '</strong> - ';
            },
          },
        ],
        sort: {
          // this should return the val to sort on
          getValue: function(item) {
            return item.year;
          },
          // asc or desc
          order: 'asc',
        },
      },
      slots: {
        title: 'Balance Details',
        items: function(state) {
          var data = state.sources.tips.data.tax_years;
          var rows = data.map(function(row){
            var itemRow = row;
            return itemRow;
          });
          return rows;
        },
      },
    },
  ],
};
