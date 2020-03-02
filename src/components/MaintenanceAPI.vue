<template>
  <div class="main-text">
    <h2>
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
</template>

<script>
export default {
  data() {
    return {
      isTesting: false,
    };
  },
  methods: {
    testHealthCheck() {
      // console.log('testHealthCheck is running');
      this.isTesting = true;
      setTimeout(async () => {
        await this.$store.dispatch('healthCheck', this.$config.healthChecks);
        this.isTesting = false;
      }, 600);
    },
  },
};
</script>

<style>

.main-text {
  margin: 20px;
}

</style>
