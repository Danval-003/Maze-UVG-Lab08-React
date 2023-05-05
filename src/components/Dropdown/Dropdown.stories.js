import Dropdown from './Dropdown'

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: {
        rows: { type: 'number', defaultValue: 7 },
        columns: { type: 'number', defaultValue: 7 },
        label: { type: 'string', defaultValue: 'Continuar' },
      },
    },
    setSelect: { action: 'clicked' },
  },
}

export const Default = {
  args: {
    options: ['None', 'green', 'blue', 'red'],
  },
}
