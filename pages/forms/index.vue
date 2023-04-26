<script setup lang="ts">
import loginMeta from '@/src/forms/login/meta.json'
</script>

<template>
  <NuxtLayout>
    <div class="grid xl:grid-cols-2 gap-6 pb-6">
      <div>
        <p class="heading-3 mb-6">
          How to use schema forms
        </p>
        <p class="max-w-prose">
          To begin, ensure that you have installed the <span class="font-bold">Formkit</span> package in your project.
          Once installed, you can utilize the form schemas by creating a JSON file within your project to store your schema.
          The location of the JSON file is not crucial.
        </p>
        <p class="max-w-prose pt-2">
          In order to use your schema as a form,
          you must enclose it within a Formkit tag with the "form" type.
        </p>
        <p class="max-w-prose pt-2">
          You can add a data prop to your schema so that you can use the values in the schema as variables.
          This is optional and is not needed for every schema.
        </p>
      </div>
      <CodeBlock name="tutorial-component" type="forms" />
    </div>
    <p class="heading-3 mt-10 mb-6">
      Our forms
    </p>
    <div class="grid lg:grid-cols-2 gap-10 items-start">
      <SchemaCard
        v-for="meta in [
          loginMeta
        ]"
        :key="meta.json"
        :meta="meta"
      />
    </div>
  </NuxtLayout>
</template>

<style>
.formkit-suffix-icon svg {
  @apply w-6 cursor-pointer;
}
</style>
