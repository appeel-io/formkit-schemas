# FormKit Schemas

This repository contains a collection of schema files that can be used with FormKit, a form building library used in web development. Some schema files are plug-and-play and others need some more configuration.

<br />

## How to use

### form example

```typescript
import schema from 'path to the json file'
import { FormKitSchema } from '@formkit/vue'

const form = ref({ 
  email: null,
  password: null,
 })
```
```html
<FormKit
  v-model="form"
  type="form"
  @submit="your submit function"
>
  <FormKitSchema :schema="schema" />
</FormKit>
```
### input example
```typescript
// formkit config file

import passwordToggle from 'path to input'

// in your formkit config add the following
inputs: {
    passwordToggle
  }
```

```html
<FormKit
  type="passwordToggle"
  name="password"
  validation="required"
  label="Password"
/>
```



<br />

## Contributing

Contributions are always welcome!

If it's a schema for a form you can add it to the **/forms** folder otherwise you can add it to the **/inputs** folder

All contributions need to be added trough a pull request

<br />

## License

This repository is licensed under the MIT license
