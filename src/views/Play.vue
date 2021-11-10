<template>
  <div class="play-container">
    <div class="play-user">
      <h3>YOU PICKED</h3>
      <div
        :class="[checkWin ? 'ripple-win' : '', 'user-selection']"
        @mySele="ourChoice = $event"
      >
        <Paper v-if="isPaper" />
        <Rock v-if="isRock" />
        <Scissors v-if="isScissors" />
      </div>
      <span></span>
    </div>
    <div class="play-results">
      <h1>{{ results }}</h1>
      <router-link to="/" class="shw-styl">
        <button>PLAY AGAIN</button>
      </router-link>
    </div>
    <div class="play-house">
      <h3>THE HOUSE PICKED</h3>
      <div :class="[houseWin ? 'ripple-win' : '', 'house-selection']">
        <Paper v-if="randPick == 'paper'" />
        <Rock v-if="randPick == 'rock'" />
        <Scissors v-if="randPick == 'scissors'" />
      </div>
    </div>
  </div>
</template>

<script>
import Paper from "../components/Paper";
import Scissors from "../components/Scissors";
import Rock from "../components/Rock";

export default {
  name: "Play",
  components: {
    Paper,
    Scissors,
    Rock,
  },
  data() {
    return {
      ourChoice: "",
      randPick: [],
      results: "",
      userScore: 0,
      checkWin: false,
      houseWin: false,
    };
  },
  mounted() {
    const picks = ["rock", "paper", "scissors"];
    this.randPick = picks[Math.floor(Math.random() * picks.length)];

    this.userScore >= 0;
    if (this.$route.path === "/play/1") {
      if (this.randPick == "rock") {
        this.results = "YOU WIN";
        this.checkWin = true;
        this.userScore++;
      } else if (this.randPick == "scissors") {
        this.results = "YOU LOOSE";
        this.houseWin = true;
        if (this.userScore == 0) {
          this.userScore = 0;
        } else {
          this.userScore--;
        }
      } else {
        this.results = "DRAW";
      }
      this.$store.commit("setUserScore", this.userScore);
    }
    if (this.$route.path === "/play/2") {
      if (this.randPick == "scissors") {
        this.results = "YOU WIN";
        this.checkWin = true;
        this.userScore++;
      } else if (this.randPick == "paper") {
        this.results = "YOU LOOSE";
        this.houseWin = true;
        if (this.userScore == 0) {
          this.userScore = 0;
        } else {
          this.userScore--;
        }
      } else {
        this.results = "DRAW";
      }
      this.$store.commit("setUserScore", this.userScore);
    }
    if (this.$route.path === "/play/3") {
      if (this.randPick == "paper") {
        this.results = "YOU WIN";
        this.checkWin = true;
        this.userScore++;
      } else if (this.randPick == "rock") {
        this.results = "YOU LOOSE";
        this.houseWin = true;
        if (this.userScore == 0) {
          this.userScore = 0;
        } else {
          this.userScore--;
        }
      } else {
        this.results = "DRAW";
      }
      this.$store.commit("setUserScore", this.userScore);
    }
  },
  computed: {
    isPaper() {
      return this.$route.path === "/play/1";
    },
    isRock() {
      return this.$route.path === "/play/2";
    },
    isScissors() {
      return this.$route.path === "/play/3";
    },
  },
};
</script>
