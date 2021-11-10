<template>
  <div class="container-header">
    <img src="../assets/img/logo.svg" class="cont-img" alt="" />
    <div class="cont-score">
      <h3 class="score-title">SCORE</h3>
      <span class="score-number">{{ $store.state.userScore }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    userScores: {
      type: Number,
    },
  },
};
</script>
