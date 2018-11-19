/*
__________              .__  ___________         __          __
\______   \ ____ _____  |  | \_   _____/ _______/  |______ _/  |_  ____
 |       _// __ \\__  \ |  |  |    __)_ /  ___/\   __\__  \\   __\/ __ \
 |    |   \  ___/ / __ \|  |__|        \\___ \  |  |  / __ \|  | \  ___/
 |____|_  /\___  >____  /____/_______  /____  > |__| (____  /__|  \___  >
        \/     \/     \/             \/     \/            \/          \/
*/

import accounting from 'accounting';
import axios from 'axios';
import moment from 'moment';
import mapboard from '@cityofphiladelphia/mapboard';

// General Config Modules
import helpers from './util/helpers';
import transforms from './general/transforms';
import parcels from './general/parcels';
import greeting from './general/greeting';

// data sources
import condoList from './data-sources/condo-list';
import opa from './data-sources/opa';
import tips from './data-sources/tips';

// Topics
import condos from './topics/condos';
import property from './topics/property';
import balance from './topics/balance';
// import agreements from './topics/agreements';
// import aboutPayment from './topics/about-payment';
import status from './topics/status';

import map from './general/map';
import legendControls from './general/legendControls';
import imageOverlayGroups from './general/imageOverlayGroups';

import '@fortawesome/fontawesome-pro/js/all';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../node_modules/phila-standards/dist/css/phila-app.min.css';
import './styles.css';

// import 'leaflet/dist/leaflet.css';
// import 'leaflet-easybutton/src/easy-button.css';
// import 'leaflet-measure/dist/leaflet-measure.css';

// turn off console logging in production
// TODO come up with better way of doing this with webpack + env vars
const { hostname='' } = location;
if (hostname !== 'localhost' && !hostname.match(/(\d+\.){3}\d+/)) {
  console.log = console.info = console.debug = console.error = function () {};
}

var BASE_CONFIG_URL = 'https://cdn.rawgit.com/ajrothwell/mapboard-base-config/2b849b365a9c4e986222996d0dcaaad114a3e98a/config.js';

// configure accounting.js
accounting.settings.currency.precision = 0;


import propertyCallout from './components/propertyCallout.vue';
const customComps = {
  'propertyCallout': propertyCallout
};



mapboard({
  customComps,
  header: {
    enabled: true,
    text: 'Real Estate Tax Balance Search'
  },
  panels: [
    'topics',
    // 'map',
  ],
  map,
  addressHeaderAdditionalInfo: {
    data: 'opa_account_num',
    preText: 'OPA #',
    options: {
      headerType: 'h3',
      style: 'margin-top: 5px; margin-bottom: 0px;',
    }
  },
  imageOverlayGroups,
  legendControls,
  cyclomedia: {
    enabled: true,
    measurementAllowed: false,
    popoutAble: true,
  },
  pictometry: {
    enabled: true,
  },
  geolocation: {
    enabled: false
  },
  router: {
    enabled: true
  },
  defaultAddressTextPlaceholder: {
    text: "Search Address or 9-digit OPA Property Number",
    wideStyle: {
      'font-size': '24px',
      'line-height': '28px'
    },
    narrowStyle: {
      'font-size': '20px',
      'line-height': '24px'
    }
  },
  addressInput: {
    width: 465,
    position: 'right',
    autocompleteEnabled: false,
    autocompleteMax: 15,
    placeholder: ' ',
  },
  rootStyle: {
    position: 'absolute',
    bottom: 0,
    top: '118px',
    left: 0,
    right: 0,
  },
  gatekeeperKey: helpers.GATEKEEPER_KEY,
  baseConfig: BASE_CONFIG_URL,
  parcels,
  transforms,
  greeting,
  dataSources: {
    condoList,
    opa,
    tips,
  },
  defaultTopic: null,
  topics: [
    condos,
    property,
    balance,
    // agreements,
    // aboutPayment,
    status,
  ],
  components: [
    {
      type: 'topic-set',
      options: {
        defaultTopic: 'property'
      }
    },
  ],
});
