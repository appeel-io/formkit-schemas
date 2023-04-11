<script setup lang="ts">
defineProps({ input: { type: Object, required: true } })
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
    <template v-if="input.requirements">
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
    <div class="flex justify-end pt-6">
      <a
        :href="`/schemas/inputs/{{ input.type }}/input.{{ input.fileType }}`"
        download
        target="_blank"
      >
        <button class="btn-teal">
          Download
        </button>
      </a>
    </div>
  </div>
</template>
