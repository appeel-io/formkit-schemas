<script setup>
defineProps({
  url: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<template>
  <NuxtLink
    :to="url"
    class="hover:text-teal duration-200 ease-in-out max-w-max cursor-pointer"
    active-class="active-link"
  >
    {{ label }}
  </NuxtLink>
</template>

<style scoped>
.active-link {
  @apply text-teal underline;
}
</style>
