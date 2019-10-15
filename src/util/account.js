
// import axios from 'axios';
import accounting from 'accounting';
// import AddressSelector from '../components/AddressSelector';
// import SearchBar from '../components/SearchBar';
// import searchMethodsMixin from '../mixins/search-methods';
import generateBillingXml from './generate-billing-xml';

const BALANCE_PARTS = [
  'principal',
  'interest',
  'penalty',
  'other',
];

export default {
  // props: ['address', 'account'],
  // mixins: [searchMethodsMixin],
  // components: {
  //   AddressSelector,
  //   SearchBar,
  // },
  data() {
    return {
      // ui stuff
      message: '',
      inputAddress: '',
      searchMethod: '',

      // addresses
      addressCandidates: [],
      address: {
        streetAddress: '',
        zipCode: '',
      },

      // balances response
      balances: {},
    };
  },
  // created() {
  //   this.handleRouteChange(this.$route);
  // },
  // watch: {
  //   '$route': 'handleRouteChange',
  // },
  computed: {
    subview() {
      if (this.hasMessage) {
        return 'message';
      } else if (this.hasAddressCandidates) {
        return 'address-selector';
      }
      return 'main';
    },
    hasMessage() {
      return this.message.length > 0;
    },
    hasAddressCandidates() {
      return this.addressCandidates.length > 1;
    },
    totalDue() {
      return this.balances.years.reduce((acc, year) => {
        const yearTotal = this.totalForYear(year);
        return acc + yearTotal;
      }, 0);
    },
    billingXml() {
      return generateBillingXml(this);
    },
  },
  methods: {
    handleRouteChange(route) {
      const { query = {}} = route;
      const { account, address } = query;

      if (account) {
        this.searchByAccount(account);
      } else if (address) {
        this.searchByAddress(address);
      } else {
        // TODO handle no query - navigate to start
      }
    },
    formatCurrency(amount) {
      return accounting.formatMoney(amount);
    },
    totalForYear(year) {
      const amounts = BALANCE_PARTS.map(part => year[part]);
      return amounts.reduce((acc, amount) => acc + amount, 0);
    },
    totalDueForType(type) {
      const { years = []} = this.balances;

      return years.reduce((acc, year) => {
        return acc + year[type];
      }, 0);
    },
    // TODO all the popover stuff (this and css) should come out of here and
    // go into its own component.
    // didClickPopoverLink(e) {
    // 	this.$store.commit('setPopover', `<i class="fa fa-info-circle" aria-hidden="true"></i> <strong>SEQR</strong>: This charge has a tax lien that is in the Sequestration Program. For more information regarding the status of the sequestration proceedings, you may call 215-686-3629, or search the Philadelphia Court's civil docket at <a href="http://fjdefile.phila.gov/efsfjd/zk_fjd_public_qry_00.zp_disclaimer">Civil Docket Access</a>. You may enter the property owner's name in the Court’s “Caption” search box.`);
    // },
  },
};
