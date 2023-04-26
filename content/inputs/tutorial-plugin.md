```ts
// formkit.config.ts

import { createPasswordTogglePlugin } from 'appeel-formkit'

export default {
  plugins: [ 
    ..., 
    createPasswordTogglePlugin() 
  ],
  config: {
    ...
  }
}
```