<template>
  <div class="container-game">
    <div class="game-triangle">
      <img
        src="../assets/img/bg-triangle.svg"
        class="cont-triangle"
        alt="triangle"
      />
      <Paper @click="helloWorld('paper')" />
      <Scissors @click="helloWorld('scissors')" />
      <Rock @click="helloWorld('rock')" />
    </div>
  </div>
</template>

<script>
import Paper from "./Paper";
import Scissors from "./Scissors";
import Rock from "./Rock";

export default {
  name: "OriginalGame",
  components: {
    Paper,
    Scissors,
    Rock,
  },
  props: {
    theTotalScore: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    helloWorld(userpick) {
      this.selected = userpick;
      if (this.selected == "paper") {
        this.$router.push("/play/1");
      }
      if (this.selected == "rock") {
        this.$router.push("/play/2");
      }
      if (this.selected == "scissors") {
        this.$router.push("/play/3");
      }
    },
  },
};
</script>
