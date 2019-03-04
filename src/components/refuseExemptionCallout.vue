<template>
  <div class='wrapper grid-y'>
    <div class="callout columns small-24">
      <h4>
        Exemption
      </h4>
      <div>
        If you choose private collection service for the period January through December, or are requesting an eligible exemption, please complete and return the
        <a id="refuse-button"
           href="#"
           class="button"
           @click.prevent="exemptionButtonAction"
        >
          Refuse Collection Exemption Form
        </a>
        <br><br>NOTE: Do not send the Refuse Collection Bill, if applying for the exemption.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      exemptionButtonAction() {
        window.open('https://www.phila.gov/documents/refuse-exemption-forms/', '_blank');
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
