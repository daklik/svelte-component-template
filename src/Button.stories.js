
import { action } from '@storybook/addon-actions'
import Button from './Button.svelte'

export default {
  component: Button,
  title: 'Atoms/Button',
  parameters:{
    layout:'centered',
  },
}

const Template = ({ ...args }) => ({
  Component: Button,
  props: args,
  on: {
    onButtonClick: action('onButtonClick'),
  },
})

export const Default = Template.bind({})
Default.args = {
  label: 'Hello',
}