<template>
  <div class="container">
    <div class="columns">
      <div class="column login-box card is-offset-4 is-4 content">
        <h2 class="has-text-centered">
          Real Estate Tax website maintenance Sunday
        </h2>
        <p>
          Due to scheduled maintenance, our <strong>Real Estate Tax balance and payment</strong> website is unavailable on Sunday between 2 a.m. - 3 a.m., and between 10 a.m. and 11 a.m. ET.
          During these maintenance periods you can pay your Real Estate Tax by calling (877) 309-3710.
          We apologize for any inconvenience.
        </p>
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
};
</script>
