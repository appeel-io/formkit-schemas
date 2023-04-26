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
    <p v-if="input.description" class="py-4">
      {{ input.description }}
    </p>
    <FormKit :type="input.type" />
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
    <p class="pt-4">
      Plugin name: {{ input.plugin }}
    </p>
    <p>
      Formkit type: {{ input.type }}
    </p>
  </div>
</template>
