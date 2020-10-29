/*
__________              .__  ___________         __          __
\______   \ ____ _____  |  | \_   _____/ _______/  |______ _/  |_  ____
 |       _// __ \\__  \ |  |  |    __)_ /  ___/\   __\__  \\   __\/ __ \
 |    |   \  ___/ / __ \|  |__|        \\___ \  |  |  / __ \|  | \  ___/
 |____|_  /\___  >____  /____/_______  /____  > |__| (____  /__|  \___  >
        \/     \/     \/             \/     \/            \/          \/
*/

// import * as Sentry from '@sentry/browser';
// Sentry.init({ dsn: 'https://6702e2c2f3ea4c6384583fbed0b54f4f@sentry.io/1330799' });


// turn off console logging in production
// const { hostname='' } = location;
// if (hostname !== 'localhost' && !hostname.match(/(\d+\.){3}\d+/)) {
//   console.log = console.info = console.debug = console.error = function () {};
// }

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faUsdCircle } from '@fortawesome/pro-solid-svg-icons/faUsdCircle';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
library.add(faInfoCircle, faHome, faUsdCircle, faAsterisk, faCircle, faBuilding);

import accounting from 'accounting';
import mapboard from '@phila/mapboard/src/main.js';

// General Config Modules
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
import status from './topics/status';

import map from './general/map';
import legendControls from './general/legendControls';
import imageOverlayGroups from './general/imageOverlayGroups';

// import '../node_modules/phila-standards/dist/css/phila-app.min.css';
// import './styles.css';

var BASE_CONFIG_URL = null;

// configure accounting.js
accounting.settings.currency.precision = 0;

import propertyCallout from './components/propertyCallout.vue';
import maintenanceAPI from './components/MaintenanceAPI.vue';
import maintenanceHours from './components/MaintenanceHours.vue';
import alertBanner from './components/AlertBanner.vue';
import ePayForm from './components/ePayForm.vue';
// import newSiteModal from './components/newSiteModal.vue';

const customComps = {
  'propertyCallout': propertyCallout,
  'maintenanceAPI': maintenanceAPI,
  'maintenanceHours': maintenanceHours,
  'alertBanner': alertBanner,
  'ePayForm': ePayForm,
  // 'newSiteModal': newSiteModal,
};

mapboard({
  customComps,
  publicPath: '/revenue/realestatetax/',
  header: {
    enabled: true,
    text: 'Real Estate Tax Balance Search',
  },
  alerts: {
    header: 'alertBanner',
  },
  healthChecks: [
    // {
    //   type: 'maintenanceHours',
    //   condition: [
    //     {
    //       'day': 7,
    //       'startTime': '2:00',
    //       'endTime': '3:00',
    //     },
    //     {
    //       'day': 7,
    //       'startTime': '10:00',
    //       'endTime': '11:00',
    //     },
    //     {
    //       'day': 4,
    //       'startTime': '10:00',
    //       'endTime': '13:00',
    //     },
    //   ],
    // },
    {
      type: 'maintenanceAPI',
      condition: 'https://real-estate-tax-monitors.s3.amazonaws.com/status.json',
    },
  ],
  panels: [
    'topics',
  ],
  // initialPopover: {
  //   options: {
  //     'height': '100%',
  //     'components': [
  //       {
  //         'type': 'newSiteModal',
  //       },
  //     ],
  //   },
  // },
  geocoder: {
    url: function (input) {
      var inputEncoded = encodeURIComponent(input);
      return '//api.phila.gov/ais/v1/search/' + inputEncoded;
    },
    params: {
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
      include_units: true,
    },
  },
  onGeocodeFail: {
    data: 'tips',
  },
  carto: {
    baseUrl: '//phl.carto.com/api/v2/sql',
  },
  map,
  addressHeaderAdditionalInfo: {
    data: 'opa_account_num',
    preText: 'OPA #',
    options: {
      headerType: 'h3',
      style: 'margin-top: 5px; margin-bottom: 0px;',
    },
  },
  imageOverlayGroups,
  legendControls,
  cyclomedia: {
    enabled: false,
    measurementAllowed: false,
    popoutAble: true,
  },
  pictometry: {
    enabled: false,
  },
  geolocation: {
    enabled: false,
  },
  router: {
    enabled: true,
    type: 'vue',
    returnToDefaultTopicOnGeocode: true,
  },
  defaultAddressTextPlaceholder: {
    text: "Search Address or 9-digit OPA Property Number",
    wideStyle: {
      'max-width': '100%',
      'font-size': '24px',
      'line-height': '28px',
    },
    narrowStyle: {
      'max-width': '100%',
      'font-size': '20px',
      'line-height': '24px',
    },
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
  gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
  baseConfig: BASE_CONFIG_URL,
  parcels,
  transforms,
  greeting,
  dataSources: {
    condoList,
    opa,
    tips,
  },
  defaultTopic: 'property',
  topics: [
    condos,
    property,
    balance,
    status,
  ],
  components: [
    {
      type: 'topic-set',
      options: {
        defaultTopic: 'property',
      },
    },
  ],
});
