import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps, styles } from './Button'

export default {
  component: Button,
  title: 'Button',
} as Meta<ButtonProps & { level: keyof typeof Button }>

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
