<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  type: { type: String, default: 'inputs' }
})

const { data, pending } = await useAsyncData(`code-${props.type}-${props.name}`,
  () => queryContent()
    .where({ _path: `/${props.type}/${props.name}` })
    .findOne()
)
</script>

<template>
  <Loader v-if="pending" />
  <ContentRenderer
    v-else-if="data"
    :value="data"
    class="overflow-x-auto max-w-full bg-white p-4 rounded-2xl border-2 text-xs shadow-right"
  />
</template>
