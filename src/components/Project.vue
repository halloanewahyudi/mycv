<script setup>
import projects from "@/assets/project.json";
import IconLink from "./icons/Link.vue";
</script>
<template>
<div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div v-for="(item, index) in projects" :key="index" class="">
            <img :src="item.image" alt="" srcset="" class="rounded-xl w-full h-[180px] object-cover mb-4">
            <p>{{ item.name }}</p>
            <a :href="item.url" class="flex items-center gap-2 text-primary" target="_blank">visit website <IconLink class="text-sm"/></a>
        </div>
    </div>
</div>
</template>