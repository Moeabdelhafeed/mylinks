<script setup>
import { useUserStore } from '@/stores/User'
import { animate } from '@/composables/animate';
import Widget from '@/components/Widget.vue'
import Icon from '@/components/Icon.vue'

const {user} = useUserStore();

const {globalBeforeEnter, globalEnter} = animate()

    
const beforeEnter = (el) => {
    globalBeforeEnter(el, el.dataset.index);
}

const enter = (el) => {
    globalEnter(el, el.dataset.index);

}

const widgetsLength = user.widgets.length 

document.title = user.name

</script>

<template>
  <main>

    <div class="z-3">
      <div class="container text-center mt-3">


  <transition-group
    appear
    @before-enter="beforeEnter"
    @enter="enter"
            >
            <div :key="user.id">
      
              <img id="img" :src="user.img" width="100px" class="mt-5 rounded-circle img-fluid " alt="Profile Picture" />
          <h4 class="mt-3 fw-bold text-light">{{ user.name}}</h4>
          <p class="text-light mb-0"> {{ user.role }}</p>
        </div>

            <Widget v-for="(widget , index) in user.widgets" :key="index" :widget="widget" :data-index="index + 1" />

            <div key="icons" :data-index=" widgetsLength  + 1" class="row justify-content-center m-auto mt-3 flex-row" style="width: 200px;"  >
                <Icon v-for="(icon , index) in user.icons" :key="index" :icon="icon"  />
            </div>
    </transition-group>
  </div>
  </div>
  </main>
</template>
