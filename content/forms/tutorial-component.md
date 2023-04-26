```vue
// your vue component

<script setup lang="ts">
import { FormKitSchema } from '@formkit/vue'
import schema from '@/src/forms/login.json'

const form = ref({ mail: null, password: null })
const data = ref({ isLoading: false })
</script>

<template>
  <FormKit v-model="form" type="form">
    <FormKitSchema :schema="schema" :data="data" />
  </FormKit>
</template>
```