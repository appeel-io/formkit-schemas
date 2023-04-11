<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isSmall = useMediaQuery('(max-width: 768px)')

const isOpen: Ref<Boolean> = ref(false)

// close mobile menu when the screen is resized to a bigger screen
watch(isSmall, (v) => {
  if (!v && isOpen.value) {
    isOpen.value = false
  }
})
</script>

<template>
  <nav class="py-4 border-b">
    <div class="flex justify-between items-center gap-4 container">
      <NuxtLink to="/">
        <p class="heading-2">
          Forms
        </p>
      </NuxtLink>

      <ClientOnly>
        <div v-if="!isSmall" class="flex justify-end items-center gap-4">
          <RouteLink label="Forms" url="/forms" />
          <RouteLink label="Inputs" url="/inputs" />
          <RouteLink label="Generator" url="/generator" />
        </div>
        <Icon
          v-else
          name="mdi:hamburger-menu"
          class="w-8 h-8 min-w-[2rem] cursor-pointer"
          @click="isOpen = true"
        />
      </ClientOnly>

      <transition
        enter-active-class="duration-300 ease-in-out"
        enter-from-class="!-translate-y-full"
        enter-to-class="!translate-y-0"
        leave-active-class="duration-200 ease-in-out"
        leave-from-class="!translate-y-0"
        leave-to-class="!-translate-y-full"
      >
        <MobileMenu v-if="isOpen" @close="isOpen = false" />
      </transition>
    </div>
  </nav>
</template>
