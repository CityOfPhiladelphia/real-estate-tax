<template>
  <!-- <div class="columns alert"> -->
  <div class="alert">
    <p class="side-padding no-margin">
      During tax season, the site occasionally experiences high volume impacting usage.
      If you are unable to obtain your balance, please try again in a few minutes.
    </p>
  </div>
</template>

<script>

export default {
  name: 'AlertBanner',
};

</script>

<style>

.alert {
  background: #f3c613;
  font-size: 16px;
}

.side-padding {
  padding-left: 10px;
  padding-right: 10px;
}

</style>
