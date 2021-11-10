<template>
  <div class="rules-of-game">
    <div class="games-rules">
      <button class="rules-button button" @click="showModal = true">
        RULES
      </button>
    </div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <div class="rules-header">
          <h1>RULES</h1>
          <i class="fa fa-times" @click="showModal = false"></i>
        </div>
        <img src="../assets/img/image-rules.svg" class="rules-img" alt="" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
