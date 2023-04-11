<script setup lang="ts">
defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 flex flex-col overflow-x-hidden overflow-y-auto bg-forms p-4 z-20">
    <div class="flex justify-between items-center gap-4 pb-10">
      <NuxtLink to="/" class="max-w-[40px]">
        <h2>
          Forms
        </h2>
      </NuxtLink>
      <Icon
        name="ic:baseline-clear"
        class="w-10 h-10 cursor-pointer text-red"
        @click="$emit('close')"
      />
    </div>
    <div class="flex flex-col gap-y-2 pt-4">
      <RouteLink label="Forms" url="/forms" />
      <RouteLink label="Inputs" url="/inputs" />
      <RouteLink label="Generator" url="/generator" />
    </div>
  </div>
</template>
