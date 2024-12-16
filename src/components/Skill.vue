<script setup>
import Figma from "./icons/Figma.vue";
import Html from './icons/Html.vue';
import Css from './icons/Css.vue';
import Tailwind from './icons/Tailwind.vue';
import Wordpress from "./icons/Wordpress.vue";
import IconVue from "./icons/Vue.vue";
import Nuxt from "./icons/Nuxt.vue";
</script>
<template>
    <div>
        <div class="flex items-center gap-2">
            <span class="w-[100px] shrink-0"> Design Tools</span>
            <div><span class="flex items-center gap-1">
                    <Figma /> Figma
                </span> 
            </div>
        </div>
        <div class="flex gap-2">
            <span class="w-[100px] shrink-0"> Development</span>
            <div class="flex gap-2 flex-wrap">
                <span class="flex items-center gap-1">
                    <Html /> HTML
                </span>
                <span class="flex items-center gap-1">
                    <Css /> CSS
                </span>
                <span class="flex items-center gap-1">
                    <Tailwind /> Tailwind css
                </span>
                <span class="flex items-center gap-1">
                    <Wordpress /> Wordpress
                </span>
                <span class="flex items-center gap-1">
                    <IconVue /> Vue js
                </span>
                <span class="flex items-center gap-1">
                    <Nuxt /> Nuxt
                </span>
            </div>

        </div>
    </div>
</template>