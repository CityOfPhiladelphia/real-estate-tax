export default {
  GATEKEEPER_KEY: '6225963312dd82aef1c1b481b0792aba',
  // STATUS_MAP: {
  //   'LBR': 'Collections being pursued by Linebarger Collection Agency. Please call 215-790-1117.',
  //   'LBRA': 'In an agreement with Linebarger.',
  //   'LBRO': 'In an Owner Occupied Payment Arrangement (OOPA) agreement with LBR.',
  //   'GRB': 'Collections being pursued by GRB Collection Agency. Please call 866-677-5970.',
  //   'GRBA': 'In an agreement with GRB.',
  //   'GRBO': 'In an Owner Occupied Payment Arrangement (OOPA) agreement with GRB.',
  //   'AGRE': 'Active payment agreement plan in effect for delinquent taxes.',
  //   'INST': 'Active installment payment plan in effect for current taxes.',
  //   'PIO': 'Collections being pursued by Pioneer Collection Agency. Please call 866-439-1318.',
  //   'BRT': 'Under appeal with the Board of Revision of Taxes.',
  //   'LSLD': `Sold to a third-party at Tax Lien Sale. Search the civil court docket for more information.
  //           <br><br>This charge has a tax lien that was sold to a private third-party lien-holder at a City Tax Lien Sale.
  //           Therefore, the amounts listed below for those years may not include all Real Estate Tax liabilities currently due.
  //           For more information regarding the name, address, and phone number of the new lien-holder, as well as the
  //           status of the lien(s), you may search the Philadelphia Court's civil docket
  //           at <a href="http://fjdefile.phila.gov/efsfjd/zk_fjd_public_qry_00.zp_disclaimer" target="_blank">Civil Docket Access</a>.
  //           You may enter or copy/paste the 13-digit lien number listed below (ex. 1504R14010000) to the Court’s “Case ID” search box.`,
  //   'DISC': 'Discounted amount good until March 1st.',
  //   'SEQR': `Collections being pursued by Law Department\'s Sequestration/Receivership Program. Please search the civil docket.
  //           <br><br>This charge has a tax lien that is in the Sequestration Program. For more information regarding the status
  //           of the sequestration proceedings, you may call 215-686-3629, or search the Philadelphia Court's civil docket
  //           at <a href="http://fjdefile.phila.gov/efsfjd/zk_fjd_public_qry_00.zp_disclaimer" target="_blank">Civil Docket Access</a>.
  //           You may enter the property owner's name in the Court’s “Caption” search box.`
  // },

//   cleanDorAttribute(attr) {
//     // console.log('cleanDorAttribute is running with attr', attr);
//     // trim leading and trailing whitespace
//     var cleanAttr = attr ? String(attr) : '';
//     cleanAttr = cleanAttr.replace(/\s+/g, '');
//
//     // return null for zeros and empty strings
//     // if (['', '0'].indexOf(cleanAttr) > -1) {
//     //   return null;
//     // }
//
//     // return empty for zeros and null
//     if ([null, '0'].indexOf(cleanAttr) > -1) {
//       return '';
//     }
//
//     // console.log('cleanDorAttribute cleanAttr result:', cleanAttr);
//     return cleanAttr;
//   },
//
//   // TODO put this in base config transforms
//   concatDorAddress(parcel, includeUnit) {
//     includeUnit = !!includeUnit;
//     var STREET_FIELDS = ['STDIR', 'STNAM', 'STDES', 'STDESSUF'];
//     var props = parcel.properties;
//
//     // handle house num
//     var addressLow = this.cleanDorAttribute(props.HOUSE);
//     var addressHigh = this.cleanDorAttribute(props.STEX);
//     // maybe should be props.SUF below (it said props.SUFFIX)
//     var addressSuffix = this.cleanDorAttribute(props.SUF);
//     var address = addressLow;
//     address = address + (addressHigh ? '-' + addressHigh : '');
//     address = address + (addressSuffix || '');
//
//     // handle unit
//     var unit = this.cleanDorAttribute(props.UNIT);
//     if (unit) unit = '# ' + unit;
//
//     // clean up attributes
//     var comps = STREET_FIELDS.map(function(streetField) {
//       return props[streetField];
//     });
//     comps = comps.map(this.cleanDorAttribute);
//         // TODO handle individual address comps (like mapping stex=2 => 1/2)
//         // addressLow = comps.HOUSE,
//         // addressHigh = comps.STEX,
//         // streetPredir = comps.STDIR,
//         // streetName = comps.STNAM,
//         // streetSuffix = comps.STDES,
//         // streetPostdir = comps.STDESSUF,
//
//     // add address to front
//     comps = [address].concat(comps);
//
//     // add unit to end
//     if (includeUnit) comps = comps.concat([unit]);
//
//     // remove nulls and concat
//     address = comps.filter(Boolean).join(' ');
//
//     // console.log('concatDorAddress address result:', address);
//     if (address === '') {
//       address = 'Parcel has no address';
//     }
//     return address;
//   },
//
//   getVacancyText(state) {
//     var land = state.sources.vacantLand.data
//     var building = state.sources.vacantBuilding.data
//     if (land.length === 0 && building.length === 0) {
//       return 'Not Likely Vacant'
//     } else if (land.length > 0) {
//       return 'Likely Vacant Land'
//     } else if (building.length > 0) {
//       return 'Likely Vacant Building'
//     }
//   }
}
