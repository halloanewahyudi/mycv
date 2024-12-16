<script lang="ts" setup>
type Props = {
    year: number,
    title: string,
    description: string
}
const props = defineProps<Props>()
</script>
<template>
    <div class="flex gap-2">
        <div class="w-4 h-4 bg-secondary rounded-full poin"></div>
   <div class="flex flex-col gap-2">
    <span class="text-sm text-neutral-500"> {{ year }} </span> 
    <span class="text-lg font-semibold"> {{ title }} </span> 
    <span class=""> {{ description }} </span>
   </div>
    </div>

</template>
<style lang="css" scoped>
 .poin::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: gray;
    top: 0;
    left: 7px;
 }

</style>
