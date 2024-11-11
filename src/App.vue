<template>
  <div class="wrapper z-0">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <img key="1" data-position="-" src="/images/svg1.png" style="max-width: 900px; min-width:400px" class="w-75 img position-fixed top-0 end-0 z-0" alt="">
      <img key="2" data-position="+" src="/images/svg2.png" style="max-width: 900px; min-width:400px" class="w-75 img position-fixed bottom-0 start-0" alt="">
    </transition-group>
  </div>
  <div class="wrapper z-3">
    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component"></component>
      </transition>
    </RouterView>

    <transition appear @before-enter="footerBeforeEnter" @enter="footerEnter">
      <div class="row z-3 m-auto text-center position-fixed opacity-50 bottom-0 w-100 text-light">
        <p class="mb-4">&#169; Made By Mohammad Abdelhafeed</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import gsap from 'gsap';
import { animate } from './composables/animate';

const { globalEnter, globalBeforeEnter , backgroundBeforeEnter, backgroundEnter } = animate();

const beforeEnter = (el) => {
  backgroundBeforeEnter(el);
};

const enter = (el) => {
  backgroundEnter(el);
};

const footerBeforeEnter = (el) => {
  gsap.set(el, {
    y: 150
  });
};

const footerEnter = (el) => {
  gsap.to(el, {
    y: 0,
    bottom: 0,
    duration: 1,
  });
};

</script>

<style>
.img {
  pointer-events: none;
}
</style>
