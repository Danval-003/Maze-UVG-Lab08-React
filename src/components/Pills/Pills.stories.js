import Pills from './Pills'

export default {
  title: 'ButtonsPixel/Pills',
  component: Pills,
  argTypes: {
    options: {
      control: {
        rows: { type: 'number', defaultValue: 7 },
        columns: { type: 'number', defaultValue: 7 },
        label: { type: 'string', defaultValue: 'Continuar' },
      },
    },
    setSelectable: { action: 'clicked' },
    widht: { control: 'number' },
  },
}

export const Default = {
  args: {
    options: ['Hello', 'World'],
    widht: 400,
  },
}

export const Three = {
  args: {
    options: ['Hello', 'World', 'Manolo'],
    widht: 400,
  },
}
