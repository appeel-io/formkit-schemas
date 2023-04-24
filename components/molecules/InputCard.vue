<script setup lang="ts">
defineProps({ input: { type: Object, required: true } })

const showCode = ref(false)
</script>

<template>
  <div class="border-2 rounded-2xl px-4 py-8 w-full">
    <p v-if="input.name" class="font-bold">
      {{ input.name }}
    </p>
    <p v-if="input.author" class="text-xs">
      By {{ input.author }}
    </p>
    <div
      :class="{ 'mt-4 bg-red-500': input.author || input.name }"
    >
      <FormKit :type="input.type" />
    </div>
    <p v-if="input.description" class="pt-4">
      {{ input.description }}
    </p>
    <template v-if="input.requirements?.length">
      <div class="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p class="text-xs">
          Requirements:
        </p>
        <template
          v-for="requirement in input.requirements"
          :key="requirement"
        >
          <Tag>
            {{ requirement }}
          </Tag>
        </template>
      </div>
    </template>
    <template v-if="showCode">
      <CodeBlock :name="input.mdFileName" />
      <div class="pt-2">
        You can now use FormKit type="{{ input.type }}"
      </div>
    </template>
    <div class="flex justify-end pt-2">
      <button class="btn-teal" @click="showCode = !showCode">
        {{ showCode ? 'Show less' : 'Show code' }}
      </button>
    </div>
  </div>
</template>
