<template>
  <div class="flex justify-center items-center h-full py-4">
    <div class="dot bg-teal" style="animation-delay: 0s;" />
    <div class="dot bg-orange" style="animation-delay: 0.3s;" />
    <div class="dot bg-yellow" style="animation-delay: 0.6s;" />
    <div class="dot bg-pink" style="animation-delay: 0.9s;" />
    <div class="dot bg-red" style="animation-delay: 1.2s;" />
  </div>
</template>

<style scoped>
  .dot {
    animation: dot-pulse 1.5s ease-in-out infinite;
    @apply inline-block w-3 h-3 mr-2 rounded-full border;
  }

  @keyframes dot-pulse {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.5;
    }

    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.5;
    }
  }
</style>
