import { generateClasses } from '@formkit/themes'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { createPasswordTogglePlugin } from 'appeel-formkit'

export default {
  plugins: [
    createAutoAnimatePlugin(),
    createPasswordTogglePlugin()
  ],
  config: {
    classes: generateClasses({
      global: {
        outer: 'formkit-disabled:opacity-40',
        label: 'font-bold ml-4',
        help: 'text-xs text-slate-400 mt-2',
        messages: 'list-none p-0 mt-2 mb-0',
        message: 'text-red text-xs',
        actions: 'mt-4',
        inner: `
        bg-white py-1 px-2 rounded-full overflow-hidden border-2 shadow-right flex
        focus-within:shadow-right-clicked
        formkit-invalid:border-red
        formkit-errors:border-red
        `,
        suffixIcon: 'my-auto'
      },
      form: {
        messages: 'list-none mt-4 mb-0 px-3 py-2 border-red border bg-red/10 rounded-md',
        message: 'text-red text-xs'
      },
      text: {
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      password: {
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      number: {
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      textarea: {
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      select: {
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      date: {
        input: 'w-full focus:outline-none border-none px-4 py-2'
      },
      submit: {
        wrapper: 'flex justify-end',
        input: 'btn-teal'
      },
      button: {
        wrapper: 'flex justify-end',
        input: 'btn-teal'
      }
    })
  }
}
