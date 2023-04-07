import { generateClasses } from '@formkit/themes'
import { createAutoAnimatePlugin } from '@formkit/addons'

export default {
  plugins: [
    createAutoAnimatePlugin()
  ],
  config: {
    inputs: {},
    classes: generateClasses({
      global: {
        outer: 'formkit-disabled:opacity-40',
        label: 'font-bold mb-2 text-xs inline-block',
        help: 'text-xs text-slate-400 mt-1',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-pinkish-red text-xs',
        actions: 'mt-4',
        inner: `
          flex
          border
          rounded
          overflow-hidden
          focus-within:ring-1
          focus-within:ring-primary
          focus-within:border-primary
          formkit-invalid:ring-1
          formkit-invalid:ring-pinkish-red
          formkit-invalid:border-pinkish-red
          formkit-errors:ring-1
          formkit-errors:ring-pinkish-red
          formkit-errors:border-pinkish-red
        `,
        input: `
          w-full outline-none border-none px-4 py-3 h-12
        `,
        prefixIcon: 'h-12 pl-4 flex self-stretch grow-0 shrink-0 [&>svg]:m-auto',
        suffixIcon: 'h-12 pr-4 flex self-stretch grow-0 shrink-0 [&>svg]:m-auto'
      },
      form: {
        messages: 'list-none mt-4 mb-0 px-3 py-2 border-pinkish-red border bg-pinkish-red/10 rounded-md',
        message: 'text-pinkish-red text-xs'
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
