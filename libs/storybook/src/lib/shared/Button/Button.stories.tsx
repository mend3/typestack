import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const styles = {
  primary: 'border-indigo-500 bg-indigo-500 hover:bg-indigo-600',
  success: 'border-green-500 bg-green-500 hover:bg-green-600',
  error: 'border-red-500 bg-red-500 hover:bg-red-600',
  warning: 'border-yellow-500 bg-yellow-500 hover:bg-yellow-600',
  info: 'border-teal-500 bg-teal-500 hover:bg-teal-600',
} as const

export default {
  component: Button,
  title: 'Button',
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = args => <Button {...args} />
export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  className: styles.primary,
}
export const Success = Template.bind({})
Success.args = {
  children: 'Success',
  className: styles.success,
}
export const Error = Template.bind({})
Error.args = {
  children: 'Error',
  className: styles.error,
}
export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning',
  className: styles.warning,
}
export const Info = Template.bind({})
Info.args = {
  children: 'Info',
  className: styles.info,
}
