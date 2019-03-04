<template>
  <div class='wrapper grid-y'>
    <div class="callout columns small-24">
      <h4>
        Submit Your Fees
      </h4>
      <div>
        <a id="refuse-button"
           href="#"
           class="button"
           @click.prevent="refuseButtonAction"
        >
          Pay Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      refuseButtonAction() {
        window.open('https://secure.phila.gov/PaymentCenter/AccountLookup/PaymentLookup.aspx?lookup=4ede6c22-6e9d-43f5-bc12-2ddd22ba0441', '_blank');
      },
    }
  };
</script>

<style scoped>

.callout {
  margin-top: 1rem;
  position: inherit;
  height: auto;
}

.flex-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.div-padding-and-margin {
  padding-top: 15px;
  margin-bottom: 10px;
}

.header-no-margin {
  margin-bottom: 0px;
  margin-top: 0px;
}

.p-margin {
  margin: auto;
  max-width: 100%;
}

</style>
