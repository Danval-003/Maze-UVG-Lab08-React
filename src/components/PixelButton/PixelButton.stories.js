import PixelButton from './PixelButton'

export default {
  title: 'Example/PixelButton',
  component: PixelButton,
  argTypes: {
    label: { control: 'text' },
    action: { action: 'clicked' },
    isActive: { control: 'boolean' },
    size: { control: 'number' },
  },
}

export const Default = {
  args: {
    label: 'Continuar',
    isActive: false,
  },
}

export const Primary = {
  args: {
    label: 'Continuar',
    isActive: true,
  },
}
