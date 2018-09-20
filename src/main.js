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
import property from './topics/property';
import balance from './topics/balance';
import agreements from './topics/agreements';
// import aboutPayment from './topics/about-payment';
import status from './topics/status';


import map from './general/map';
import legendControls from './general/legendControls';
import imageOverlayGroups from './general/imageOverlayGroups';

import 'leaflet/dist/leaflet.css';
import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet-measure/dist/leaflet-measure.css';

// turn off console logging in production
// TODO come up with better way of doing this with webpack + env vars
const { hostname='' } = location;
if (hostname !== 'localhost' && !hostname.match(/(\d+\.){3}\d+/)) {
  console.log = console.info = console.debug = console.error = function () {};
}

// var BASE_CONFIG_URL = 'https://cdn.rawgit.com/ajrothwell/appboard_base_config/afe6585d/config.js';
var BASE_CONFIG_URL = 'https://cdn.rawgit.com/ajrothwell/mapboard-base-config/b4a9023cc4520625d0bce318cec9e64744aa0fc7/config.js';

// configure accounting.js
accounting.settings.currency.precision = 0;

mapboard({
  panels: [
    'topics',
    // 'map',
  ],
  map,
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
  defaultAddressTextPlaceholder: "BEGIN REAL ESTATE TAX PAYMENT",
  addressInput: {
    width: 515,
    position: 'right',
    autocompleteEnabled: false,
    autocompleteMax: 15,
    placeholder: 'Search by 9-digit OPA property # or property address',
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
    property,
    balance,
    agreements,
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
