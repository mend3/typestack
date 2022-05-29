import { themes } from '@storybook/theming'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../src/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    theme: themes.light,
  },
}

export const decorators = [Story => <Story />]
