import NumericalInput from './NumericalInput'

export default {
  title: 'Input/NumericalInput',
  component: NumericalInput,
  argTypes: {
    value: { control: 'number' },
    onChange: { action: 'clicked' },
    min: { control: 'number' },
    max: { control: 'number' },
  },
}

export const Default = {
  args: {
    value: 10,
    min: 4,
    max: 25,
  },
}
