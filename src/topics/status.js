export default {
  key: 'status',
  icon: 'asterisk',
  label: 'Status Details',
  // REVIEW can these be calculated from vue deps?
  dataSources: ['opa'],
  components: [
    {
      type: 'callout',
      slots: {
        text: '\
        <b>LBR</b> - Collections being pursued by Linebarger Collection Agency. Please call 215-790-1117.<br>\
        <b>LBRA</b> - In an agreement with Linebarger.<br>\
        <b>LBRO</b> - In an Owner Occupied Payment Arrangement (OOPA) agreement with LBR.<br>\
        <b>GRB</b> - Collections being pursued by GRB Collection Agency. Please call 866-677-5970.<br>\
        <b>GRBA</b> - In an agreement with GRB.<br>\
        <b>GRBO</b> - In an Owner Occupied Payment Arrangement (OOPA) agreement with GRB.<br>\
        <b>AGRE</b> - Active payment agreement plan in effect for delinquent taxes.<br>\
        <b>INST</b> - Active installment payment plan in effect for current taxes.<br>\
        <b>PIO</b> - Collections being pursued by Pioneer Collection Agency. Please call 866-439-1318.<br>\
        <b>BRT</b> - Under appeal with the Board of Revision of Taxes.<br>\
        <b>LSLD</b> - Sold to a third-party at Tax Lien Sale. Search the civil court docket for more information.<br>\
        <b>DISC</b> - Discounted amount good until March 1st.<br>\
        <b>SEQR</b> - Collections being pursued by Law Department\'s Sequestration/Receivership Program. Please search the civil docket.\
        '
      }
    },
  ],
}
