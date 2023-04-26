<script setup lang="ts">
import passwordToggle from '@/src/inputs/passwordToggle.json'
</script>

<template>
  <NuxtLayout>
    <div class="grid xl:grid-cols-2 gap-6 pb-6">
      <div>
        <p class="heading-3 mb-6">
          How to use custom inputs
        </p>
        <p class="max-w-prose">
          To get started, you should install the <span class="font-bold">appeel-formkit</span> package.
          Once installed in your project, you can utilize its inputs by registering them as plugins in your formkit config file.
          It's important to note that the formkit package must also be installed,
          as appeel-formkit cannot function independently.
        </p>
        <p class="max-w-prose pt-2">
          After registering the plugin, you can use it by adding the following line of code in your template:
          <span class="font-bold">&lt;Formkit type=&quot;passwordToggle&quot;&gt;</span>.
          You can also include all the other properties that a formkit input typically accepts.
        </p>
      </div>
      <div class="flex flex-col gap-6">
        <CodeBlock name="tutorial-download" type="inputs" />
        <CodeBlock name="tutorial-plugin" type="inputs" />
      </div>
    </div>
    <p class="heading-3 mt-10 mb-6">
      Our inputs
    </p>
    <div class="grid lg:grid-cols-2 gap-10 items-start">
      <InputCard
        v-for="input in [
          passwordToggle,
        ]"
        :key="input.type"
        :input="input"
      />
    </div>
  </NuxtLayout>
</template>

<style>
.formkit-suffix-icon svg {
  @apply w-6 cursor-pointer;
}
</style>
