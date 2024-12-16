<script setup>
import menus from "@/assets/menus.json";
import iconMenu from "@/components/icons/menu.vue";
import { onMounted, onUnmounted } from "vue";

</script>

<template>
    <div>
        <nav id="navbar"
            class="fixed top-3 w-auto flex justify-between items-center py-3 px-5 gap-4 rounded-full border mt-5 bg-white z-50">
            <div class="logo text-xl font-semibold">
                <a href="#profile">Wahyudi </a>

            </div>
            <div class="md:hidden">
                <iconMenu />
            </div>
            <div class="menu hidden md:block">
                <ul class=" md:flex md:flex-row items-center gap-4">
                    <li v-for="(item, index) in menus" :key="index">
                        <a :href="`/${item.url}`" class="nav-link"> {{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>
<style lang="css" scoped>
.nav-link {
    @apply text-gray-600 hover:text-gray-900 font-medium duration-300;
}
</style>
