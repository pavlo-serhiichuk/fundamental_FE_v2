import type { Preview } from "@storybook/react"
import 'app/styles/index.scss'
import { RouterDecorator, ThemeDecorator, TranslationDecorator } from 'shared/lib/StorybookDecorators/decorators'

const preview: Preview = {
  decorators: [RouterDecorator, ThemeDecorator('light'), TranslationDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
