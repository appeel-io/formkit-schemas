<script setup lang="ts">
defineProps({
  url: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<template>
  <NuxtLink
    :to="url"
    class="hover:scale-110 duration-200 ease-in-out max-w-max cursor-pointer"
    active-class="font-bold"
  >
    {{ label }}
  </NuxtLink>
</template>
