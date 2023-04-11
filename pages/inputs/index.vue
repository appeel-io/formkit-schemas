<script setup lang="ts">
const { $inputs } = useNuxtApp()
</script>

<template>
  <NuxtLayout>
    <p class="heading-3 mb-6">
      INPUTS
    </p>
    <div class="grid lg:grid-cols-2 gap-10">
      <template v-for="input in $inputs" :key="input.type">
        <InputCard :input="input" />
      </template>
    </div>
  </NuxtLayout>
</template>
