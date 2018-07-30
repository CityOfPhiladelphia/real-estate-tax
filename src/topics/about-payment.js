export default {
  key: 'aboutPayment',
  // icon: 'home',
  label: 'About this Payment',
  // REVIEW can these be calculated from vue deps?
  // dataSources: ['opa'],
  components: [
    {
      type: 'callout',
      slots: {
        text: '\
        <p>The City and the School District of Philadelphia impose a tax on all real estate in the City pursuant to Philadelphia\
          Code Chapter 19-1300, as authorized by 72 P.S. § 5020-201. The Office of Property Assessment (OPA) determines\
          the value of the property on which the taxes must be paid.</p><br>\
        <p>Real Estate Tax bills are sent in December for the following year and payments are due March 31st. If you pay on\
          or before the last day of February, you receive a 1% discount. If you pay after March 31, you are subject to\
          increased charges called "additions". At the end of the year, these charges begin to accrue taxes and penalties.</p><br>\
        <p>For questions about your account, email revenue@phila.gov or call 215-686-6442.</p><br>\
        <p>For questions about account payoffs, email retaxpayoff@phila.gov. To receive payoff amounts, please e-mail\
          the statement of claim number from the legal action, the property address and/or the Office of Property\
          Assessment number to retaxpayoff@phila.gov or fax it to 215-686-0582.</p><br>\
        '
      }
    },
  ],
  // basemap: 'pwd',
  // identifyFeature: 'address-marker',
  // // we might not need this anymore, now that we have identifyFeature
  // parcels: 'pwd',
  // errorMessage: function (state) {
  //   var data = state.sources.condoList.data;
  //       // features = data.features;
  //
  //   if (data) {
  //     var numCondos = data.total_size;
  //
  //     if (numCondos > 0) {
  //       var shouldPluralize = numCondos > 1,
  //           isOrAre = shouldPluralize ? 'are' : 'is',
  //           unitOrUnits = shouldPluralize ? 'units' : 'unit',
  //           message = [
  //             '<h3>',
  //             'There ',
  //             isOrAre,
  //             // ' <strong>',
  //             ' ',
  //             numCondos,
  //             ' condominium ',
  //             unitOrUnits,
  //             // '</strong> at this address.</h3>',
  //             ' at this address.</h3>',
  //             // ' at this address. ',
  //             '<p>You can use the Condominiums tab below to see information for an individual unit.</p>'
  //             // 'Please select a unit from the Condominiums tab below.'
  //           ].join('');
  //
  //       return message;
  //     }
  //   } else {
  //     return 'There is no property assessment record for this address.';
  //   }
  // }
}
