<template>
  <div class="container">
    <div class="columns">
      <div class="column login-box card is-offset-4 is-4 content">
        <h2 class="has-text-centered">
          Real Estate Tax website currently unavailable
        </h2>
        <p>
          Due to an unexpected issue, our <strong>Real Estate Tax balance and payment</strong> website is currently unavailable. We are working to resolve the problem.
          You can also check and pay your Real Estate Tax by calling (877) 309-3710. We apologize for any inconvenience.
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
        await this.$store.dispatch('healthCheck', this.$config.healthChecks);
        // await this.$store.dispatch('healthCheck');
        this.isTesting = false;
      }, 600);
    },
  },
};
</script>
