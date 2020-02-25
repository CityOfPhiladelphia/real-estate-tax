<template>
  <div class="container">
    <div class="columns">
      <div class="column login-box card is-offset-4 is-4 content">
        <h2 class="has-text-centered">
          Important Notice
        </h2>
        <p>
          We are having issues connecting to the <strong>Real Estate Tax Balance data services</strong>.
          It might occur because a <strong>scheduled data maintenance</strong> or <strong>internet connection</strong>,
          please, verify that you are connected to the internet and try again later if the problem persists call the system administrators.
        </p>
        <div class="has-text-centered">
          <button
            :class="{ 'is-loading': isTesting }"
            class="button"
            @click="testHealthCheck"
          >
            Check Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTesting: false,
    };
  },
  computed: {
    maintenanceResponse() {
      return this.$store.state.maintenanceResponse;
    },
  },
  methods: {
    testHealthCheck() {
      console.log('testHealthCheck is running');
      this.isTesting = true;
      setTimeout(async () => {
        await this.$store.dispatch('healthCheck', this.$config.healthCheck.endpoint);
        // await this.$store.dispatch('healthCheck');
        this.isTesting = false;
      }, 600);
    },
  },
};
</script>
