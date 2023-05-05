import CheckboxList from './CheckboxList'

export default {
  title: 'Example/CheckboxList',
  component: CheckboxList,
  argTypes: {
    options: {
      control: {
        rows: { type: 'number', defaultValue: 7 },
        columns: { type: 'number', defaultValue: 7 },
        label: { type: 'string', defaultValue: 'Continuar' },
      },
    },
    onChange: { action: 'clicked' },
  },
}

export const Default = {
  args: {
    options: ['Con tiempo', 'Sin tiempo'],
  },
}
