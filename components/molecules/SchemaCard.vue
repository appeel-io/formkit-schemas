<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps({ meta: { type: Object, required: true } })

const schema = await import(`../../src/forms/${props.meta.json}/index.json` /* @vite-ignore */)
const { copy } = useClipboard()
</script>

<template>
  <div class="border-2 gap-4 rounded-2xl pt-8 w-full grid">
    <div class="px-4">
      <p v-if="meta.name" class="font-bold">
        {{ meta.name }}
      </p>
      <p v-if="meta.author" class="text-xs">
        By {{ meta.author }}
      </p>
      <p v-if="meta.description" class="py-4">
        {{ meta.description }}
      </p>
      <button
        v-if="schema?.default"
        class="btn-teal"
        @click="copy(JSON.stringify(schema.default))"
      >
        Copy json
      </button>
      <template v-if="meta.requirements?.length">
        <div class="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p class="text-xs">
            Requirements:
          </p>
          <template
            v-for="requirement in meta.requirements"
            :key="requirement"
          >
            <Tag>
              {{ requirement }}
            </Tag>
          </template>
        </div>
      </template>
    </div>
    <div
      v-if="schema?.default"
      class="flex flex-col gap-5 max-w-md border-t-2 rounded-2xl px-4 pb-8 pt-4"
    >
      <FormKitSchema :schema="schema.default" />
    </div>
  </div>
</template>
