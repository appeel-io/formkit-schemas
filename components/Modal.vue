<script setup>
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 bg-black/30 cursor-pointer z-10" @click="$emit('close')" />
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto z-20"
    >
      <div class="relative">
        <button aria-label="Close modal" class="absolute -top-5 -right-5 group">
          <Icon
            name="ic:baseline-clear"
            size="30"
            class="text-pinkish-red"
            @click="$emit('close')"
          />
        </button>
        <div class="space-y-8">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
