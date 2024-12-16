<template>
    <div class="flex items-center gap-2">
        <slot name="icon"> </slot>
         <p>{{ props.item }}</p>
    </div>
</template>

<script setup>
  const props = defineProps({
   item:String
  })
</script>

<style lang="scss" scoped>

</style>