<template>
  <Html class="bg-secondary">
    <div class="min-h-screen flex flex-col">
      <!-- Page Content -->
      <div class="container mx-auto selection:bg-primary mb-6 p-4 flex-1">
        <slot />
      </div>

      <!-- Footer -->
      <footer class=" fixed bottom-0 left-0 right-0 z-10 text-white text-sm text-center p-4">
        &copy; {{ year }} {{ user.name }}. All rights reserved.
      </footer>
    </div>
  </Html>
</template>


<script setup>
import user from '../user.json';

const year = new Date().getFullYear();

useHead({
    title: user.title,
    meta: [
        { name: 'description', content: user.seoDescription },
        { name: 'keywords', content: user.seoKeywords },
        { name: 'author', content: user.name },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: user.seoTitle },
        { property: 'og:image', content: user.seoImage }, 
        { property: 'og:url', content: user.seoUrl },
    ],
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
});
</script>

<style  scoped>

</style>