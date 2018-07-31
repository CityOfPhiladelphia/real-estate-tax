export default {
  key: 'agreements',
  // icon: 'home',
  label: 'Payment Agreements',
  // REVIEW can these be calculated from vue deps?
  dataSources: ['opa'],
  components: [

  ],
  basemap: 'pwd',
  identifyFeature: 'address-marker',
  // we might not need this anymore, now that we have identifyFeature
  parcels: 'pwd',
  errorMessage: function (state) {
    var data = state.sources.condoList.data;
        // features = data.features;

    if (data) {
      var numCondos = data.total_size;

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
              '<p>You can use the Condominiums tab below to see information for an individual unit.</p>'
              // 'Please select a unit from the Condominiums tab below.'
            ].join('');

        return message;
      }
    } else {
      return 'There is no property assessment record for this address.';
    }
  }
}
