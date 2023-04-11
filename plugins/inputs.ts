import passwordToggleMeta from '~/public/schemas/inputs/passwordToggle/meta.json'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      inputs: [
        passwordToggleMeta
      ]
    }
  }
})
