<template>
  <div class='wrapper grid-y'>
    <div class="callout columns small-24">
      <h4>
        Questions
      </h4>
      <div>
        For more information and questions about this fee and your eligibility, see:
        <a id="refuse-button"
           href="#"
           class="button"
           @click.prevent="refuseButtonAction"
        >
          Streets Department: Solid Waste Code
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      refuseButtonAction() {
        window.open('https://www.philadelphiastreets.com/commercial/solid-waste-plan', '_blank');
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
