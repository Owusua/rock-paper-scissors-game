<template>
  <div class="app-container">
    <Header :scoreNumber="userScoreNumber" />
    <Rules />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Rules from "./components/Rules";

export default {
  name: "App",
  props: {
    userScoreNumber: Number,
  },
  components: {
    Header,
    Rules,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,500;0,700;1,100;1,300;1,500;1,600&display=swap");
@import "./assets/css/app.css";
</style>
