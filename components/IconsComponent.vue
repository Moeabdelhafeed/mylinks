<template>
    <div>
        <a :href="props.icon?.url" target="_blank" rel="noopener noreferrer">
        <i :class="props.icon.bootstrapIcon" class="text-white text-2xl opacity-50 hover:opacity-100 transition-all"></i>
        </a>
    </div>
</template>

<script setup>
import user from '../user.json';



const props = defineProps({
  icon: {
    type: Object,
    required: true
  }
});

</script>

<style  scoped>

</style>