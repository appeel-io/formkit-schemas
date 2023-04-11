import { createInput } from '@formkit/vue'
import { FormKitNode, FormKitSchemaNode } from '@formkit/core'

const schema: FormKitSchemaNode = {
  $el: 'div',
  bind: '$attrs',
  attrs: {
    style: {
      padding: 0,
      display: 'flex',
      'flex-wrap': 'no-wrap'
    }
  },
  children: [
    {
      $el: 'input',
      attrs: {
        onInput: '$handlers.DOMInput',
        value: '$_value',
        class: '$classes.input',
        placeholder: '$placeholder',
        type: '$type'
      }
    },
    {
      $el: 'button',
      attrs: {
        type: 'button',
        onClick: '$handlers.toggle'
      },
      children: [
        {
          $cmp: 'Icon',
          if: '$type == text',
          props: {
            context: '$node.context',
            name: 'mdi:eye-off-outline',
            width: '24px',
            height: '24px',
            style: {
              margin: 'auto 4px'
            }
          }
        },
        {
          $cmp: 'Icon',
          if: '$type == password',
          props: {
            context: '$node.context',
            name: 'mdi:eye-outline',
            width: '24px',
            height: '24px',
            style: {
              margin: 'auto 4px'
            }
          }
        }
      ]
    }
  ]
}

const toggleFeature = (node: FormKitNode): void => {
  node.on('created', () => {
    node.props.type = 'password'

    node.context!.handlers.toggle = (): void => {
      node.props.type = node.props.type === 'text' ? 'password' : 'text'
    }
  })
}

const passwordToggle = createInput(schema, {
  props: ['name', 'validation', 'label', 'placeholder', 'type'],
  features: [toggleFeature]
})

export default passwordToggle
