<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  file: { type: String, default: 'formkit.config.ts' }
})

const { data } = await useAsyncData('code', () => queryContent()
  .where({ _path: `/inputs/${props.name}` })
  .findOne()
)
</script>

<template>
  <div class="mt-4">
    <p>
      ~ {{ file }}
    </p>
    <ContentRenderer
      v-if="data"
      :value="data"
      class="overflow-x-auto bg-white p-4 rounded-2xl border-2"
    />
  </div>
</template>
