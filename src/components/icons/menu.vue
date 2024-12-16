<script setup>

</script>
<template>
 <div class="hamburger group">
    <span></span>
    <span></span>
    <span></span>
 </div>
</template>
<style lang="css" scoped>
.hamburger {
    @apply w-6 h-6 flex flex-col justify-between items-center cursor-pointer ;
    span {
        @apply w-6 h-1 bg-gray-600 duration-300;
    }
}

 span:nth-child(2) {
    @apply group-hover:w-4;
}
span:nth-child(3) {
    @apply group-hover:w-2;
}
</style>

