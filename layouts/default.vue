<template>
    <Html class="bg-secondary">
    <div class="container mx-auto selection:bg-primary  p-4">
        <slot />
    </div>
    <div class="selection:bg-primary  mx-auto absolute bottom-0 left-0 right-0 text-center p-4">
        <p class="text-white text-sm">
            &copy; {{year}} {{user.name}}. All rights reserved.
        </p>
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