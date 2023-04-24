<script setup lang="ts">
import passwordToggle from '@/src/inputs/passwordToggle.json'

const inputs = [
  passwordToggle
]
</script>

<template>
  <NuxtLayout>
    <p class="heading-3 mb-6">
      INPUTS
    </p>
    <div class="grid lg:grid-cols-2 gap-10 items-start">
      <InputCard
        v-for="input in inputs"
        :key="input.type"
        :input="input"
      />
    </div>
  </NuxtLayout>
</template>

<style>
.formkit-suffix-icon svg {
  @apply w-6 cursor-pointer;
}
</style>
