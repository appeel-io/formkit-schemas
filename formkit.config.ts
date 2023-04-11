import { generateClasses } from '@formkit/themes'
import { createAutoAnimatePlugin } from '@formkit/addons'

import passwordToggle from '~/public/schemas/inputs/passwordToggle/input'

export default {
  plugins: [
    createAutoAnimatePlugin()
  ],
  inputs: {
    passwordToggle
  },
  config: {
    classes: generateClasses({
      global: {
        outer: 'formkit-disabled:opacity-40',
        label: 'font-bold',
        help: 'text-xs text-slate-400 mt-2',
        messages: 'list-none p-0 mt-2 mb-0',
        message: 'text-red text-xs',
        actions: 'mt-4',
        inner: `
        bg-white py-1 px-2 rounded-full overflow-hidden border-2 shadow-right
        focus-within:shadow-right-clicked
        focus-within:border-teal
        formkit-invalid:border-red
        formkit-errors:border-red
        `,
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      form: {
        messages: 'list-none mt-4 mb-0 px-3 py-2 border-red border bg-red/10 rounded-md',
        message: 'text-red text-xs'
      },
      submit: {
        wrapper: 'flex justify-end',
        input: 'btn'
      },
      button: {
        wrapper: 'flex justify-end',
        input: 'btn'
      }
    })
  }
}
