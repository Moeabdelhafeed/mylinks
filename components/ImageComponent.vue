<template>
  <div @mouseleave="flipped = !flipped" @mouseenter="flipped = !flipped" class="flip-container w-32 h-32">
    <div :class="['flipper', flipped ? 'flipped' : '']">
      <!-- Front Image -->
      <div class="front">
        <img
          class="w-32 h-32 object-cover rounded-full"
          :src="'/' + user.gitRepository + '/' + user.userImage"
          alt="User Image"
        />
      </div>
      <!-- Back Image -->
      <div class="back">
        <img
          class="w-32 h-32 object-cover rounded-full"
          :src="'/' + user.gitRepository + '/' + user.userImageBack"
          alt="Back Image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import user from '../user.json';

const flipped = ref(false);
</script>

<style scoped>
.flip-container {
  perspective: 1000px;
  cursor: pointer;
}
.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flipped {
  transform: rotateY(180deg);
}
.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}
</style>
