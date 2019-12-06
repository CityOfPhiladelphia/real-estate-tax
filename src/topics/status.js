// import transforms from '../general/transforms.js';

let keys = [
  'LBR',
  'LBRA',
  'GRB',
  'GRBA',
  'AGRE',
  'INST',
  'PIO',
  'BRT',
  'LSLD',
  'DISC',
  'SEQR',
];

// const LBR = transforms.statusMap.transform('LBR');

export default {
  key: 'status',
  icon: 'asterisk',
  label: 'Status Descriptions and Instructions',
  // REVIEW can these be calculated from vue deps?
  components: [
    {
      type: 'callout',
      slots: {
        text: 'Each status code has different instructions. If there is no\
        status code, the City is handling the account and you should call\
        (215) 686-6442 with questions.\
        ',
      },
    },
    {
      type: 'vertical-table',
      slots: {
        fields: function() {
          let ex = [];
          let i;
          for (i = 0; i < keys.length; i++) {
            console.log('test');
          }
          // for (let key of keys) {
          //   ex.push({
          //     label: key,
          //     value: transforms.statusMap.transform(key),
          //   });
          // }
          return ex;
        }(),
      },
      options: {
        id: 'statusDetails',
        styles: {
          th: {
            'width': '10%',
          },
        },
      },
    },
  ],
};
