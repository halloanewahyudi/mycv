<script setup>
import Card from "./ExperienceItem.vue";
import exporiences from "@/assets/experience.json";
</script>
<template>
    <div class="relative flex flex-col gap-5">
        <Card v-for="(item, index) in exporiences" :key="index" :year="item.year" :title="item.title" :description="item.description" />
    </div>
</template>