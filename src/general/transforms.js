import accounting from 'accounting';
import { format, parseISO } from 'date-fns';

accounting.settings.currency.precision = 0;

export default {
  statusMap: {
    transform: function(value) {
      var map = {
        'LBR': 'Collections being pursued by Linebarger Collection Agency. Please call (215) 790-1117.',
        'LBRA': 'In an agreement with Linebarger.',
        'GRB': 'Collections being pursued by GRB Collection Agency. Please call (866) 677-5970.',
        'GRBA': 'In an agreement with GRB.',
        'AGRE': 'Active payment agreement plan in effect for delinquent taxes.',
        'INST': 'Active installment payment plan in effect for current taxes.',
        'PIO': 'Collections being pursued by Pioneer Collection Agency. Please call (866) 439-1318.',
        'BRT': `Under appeal with the Board of Revision of Taxes.  Properties with pending assessment appeals should pay the amount billed until the appeal is resolved.
                Once resolved, accounts that ultimately receive a credit can request to have the credit amount refunded or applied to other balances.`,
        'LSLD': `This charge has a tax lien that was sold to a private third-party lien-holder at a City Tax Lien Sale.
                Therefore, the amounts listed below for those years may not include all Real Estate Tax liabilities currently due.
                For more information regarding the name, address, and phone number of the new lien-holder, as well as the
                status of the lien(s), you may search the Philadelphia Court's civil docket
                at <a href="http://fjdefile.phila.gov/efsfjd/zk_fjd_public_qry_00.zp_disclaimer" target="_blank">Civil Docket Access</a>.
                You may enter or copy/paste the 13-digit lien number listed below (ex. 1504R14010000) to the Court’s “Case ID” search box.`,
        // 'DISC': 'Discounted amount good until last day of February.',
        'SEQR': `This charge has a tax lien that is in the Law Department\'s Sequestration/Receivership Program. For more information regarding the status
                of the sequestration proceedings, you may call (215) 686-5495, or search the Philadelphia Court's civil docket
                at <a href="http://fjdefile.phila.gov/efsfjd/zk_fjd_public_qry_00.zp_disclaimer" target="_blank">Civil Docket Access</a>.
                You may enter the property owner's name in the Court’s “Caption” search box.`,
      };
      if (map[value]) {
        return map[value];
      }
      return 'There is no information provided about this code.';

    },
  },
  misc: {
    transform: function(value) {
      if (value === 2034) {
        return 'MISC';
      }
      return value;

    },
  },
  currency: {
    // a list of global objects this transform depends on
    // globals: [ 'accounting' ],
    // this is the function that gets called to perform the transform
    transform: function (value) {
      return accounting.formatMoney(value, '$', 2);
    },
  },
  date: {
    transform: function (value) {
      let valueTransformed;
      console.log('date transform running, value:', value, 'typeof value:', typeof value);
      if (value === 'no data') {
        valueTransformed = 'no data';
      } else if (typeof value === 'string') {
        valueTransformed = format(parseISO(value), 'MM/dd/yyyy');
      } else {
        valueTransformed = format(value, 'MM/dd/yyyy');
      }
      return valueTransformed;
    },
  },
  phoneNumber: {
    transform: function (value) {
      var s2 = (""+value).replace(/\D/g, '');
      var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
      return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
    },
  },
  rcoPrimaryContact: {
    transform: function (value) {
      var PHONE_NUMBER_PAT = /\(?(\d{3})\)?( |-)?(\d{3})(-| )?(\d{4})/g;
      var m = PHONE_NUMBER_PAT.exec(value);

      // check for non-match
      if (!m) {
        return value;
      }

      // standardize phone number
      var std = [ '(', m[1], ') ', m[3], '-', m[5] ].join('');
      var orig = m[0];
      var valueStd = value.replace(orig, std);

      return valueStd;
    },
  },
  booleanToYesNo: {
    transform: function(value) {
      return value ? 'Yes' : 'No';
    },
  },
  integer: {
    transform: function (value) {
      return !isNaN(value) && parseInt(value);
    },
  },
  prettyNumber: {
    transform: function (value) {
      return !isNaN(value) && value.toLocaleString();
    },
  },
  feet: {
    transform: function (value) {
      return value && value + ' ft';
    },
  },
  squareFeet: {
    transform: function (value) {
      return value && value + ' sq ft';
    },
  },
  nowrap: {
    transform: function (value) {
      return '<span style="white-space: nowrap;">' + value + '</span>';
    },
  },
  bold: {
    transform: function (value) {
      return '<strong>' + value + '</strong>';
    },
  },
};
