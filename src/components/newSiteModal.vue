<template>
  <div>

    <div class="flex-div">
      <div class="main-div"
           :style="minWidth"
      >
        <div class="maintenance-div">
          <p>Note: This site will be down for scheduled maintenance from 10:00 pm on 2/12/2019 to 12:00 am on 2/13/2019</p>
        </div>
        <div class="top-div small-centered">
          <h2>Welcome to the new<br><b>Real Estate Tax Balance Search!</b></h2>
        </div>
        <div class="bottom-div">
          <div class="columns small-24 small-centered medium-12">
            <a @click="close" class="button full-width uniform-font">Continue To New Site</a>
            <a href="https://legacy.phila.gov/revenue/realestatetax/" class="button full-width uniform-font">Go To Old Site</a>
            <p class="disclaimer">Payment coupons are only available on the new site.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    minWidth() {
      if (this.$store.state.isMobileOrTablet) {
        return;
      } else {
        return { minWidth: '550px' };
      }
    }
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

.uniform-font {
  font-size: 14px;
}

.flex-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.maintenance-div {
  background: #f4eb42;
  color: black;
}

.main-div {
  /* display: flex;
  flex-direction: column; */
  min-height: 300px;
  /* min-width: 500px; */
  max-width: 700px;
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

.disclaimer {
  font-size: 14px;
}


</style>
