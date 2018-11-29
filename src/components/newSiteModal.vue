<template>
  <div>

    <div class="main-div">
      <div class="top-div small-centered">
        <h2>Welcome to the new<br><b>Real Estate Tax Balance Search!</b></h2>
      </div>
      <div class="bottom-div">
        <div class="columns small-24 small-centered medium-12">
          <a @click="close" class="button full-width">Continue To New Site</a>
          <a href="https://legacy.phila.gov/revenue/realestatetax/" class="button full-width">Go To Old Site</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import philaVueComps from '@cityofphiladelphia/phila-vue-comps';

export default {
  components: {
  },
  methods: {
    close() {
      this.$store.commit('setPopoverOpen', false);
      this.$store.commit('setPopoverOptions', {});
      this.$store.commit('setPopoverText', '');
    }
  }
}
</script>

<style scoped>

a {
  color: white !important;
  margin: 5px;
}

.main-div {
  min-height: 300px;
  text-align: center;
}

.top-div {
  /* height: 60%; */
  padding: 10px;
  background: #2176d2;
}

.bottom-div {
  border-style: solid;
  border-width: 5px;
  border-color: #2176d2;
  /* height: 40%; */
  padding: 10px;
  background: white;
  color: black;
}


</style>
