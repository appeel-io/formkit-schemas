<script setup lang="ts">
defineProps({
  url: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<template>
  <NuxtLink
    :to="url"
    class="hover:text-teal duration-200 ease-in-out max-w-max cursor-pointer"
    active-class="underline underline-offset-4"
  >
    {{ label }}
  </NuxtLink>
</template>
