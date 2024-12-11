<template>
    <div class="d-flex justify-content-center">
        <div  class="row justify-content-center w-75" data-index="1" style="max-width: 600px; min-width: 350px;">
              <a :href="widget.url"  class="link-offset-2 link-underline link-underline-opacity-0">
              <div  id="link" class="d-flex text-center rounded-pill mt-4 text-light align-items-center position-relative"
                    style="height: 80px;">
                    <img :src="widget.img" class=" position-absolute p-2 h-100 w-auto img-fluid rounded-circle"/>
                    <div class="w-50 mx-auto text-center">
                        <p style="font-size:15px" class=" mb-0 text-wrap">{{ widget.name }}</p>

                    </div>
                </div>
            </a> 
        </div>
   
    </div>
</template>

<script setup>

defineProps({
    widget: {
        type: Object,
        required: false
    }
})
</script>

<style>

</style>