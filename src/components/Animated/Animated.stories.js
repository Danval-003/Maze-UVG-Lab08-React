import Animated from './Animated'

export default {
  title: 'Animated',
  component: Animated,
  argTypes: {
    orientation: {
      options: ['^', 'v', '>', '<'],
      control: { type: 'radio' },
    },
    skin: {
      options: ['', 'blue', 'red', 'green'],
      control: { type: 'radio' },
    },
    animate: { control: 'boolean' },
    xPlayer: { control: 'number' },
    yPlayer: { control: 'number' },
  },
}

export const Default = {
  args: {
    orientation: 'v',
    skin: '',
  },
}

export const Red = {
  args: {
    orientation: 'v',
    skin: 'red',
  },
}

export const Green = {
  args: {
    orientation: 'v',
    skin: 'green',
  },
}

export const Blue = {
  args: {
    orientation: 'v',
    skin: 'blue',
  },
}

export const Up = {
  args: {
    orientation: '^',
    skin: '',
  },
}

export const Down = {
  args: {
    orientation: 'v',
    skin: '',
  },
}

export const Right = {
  args: {
    orientation: '>',
    skin: '',
  },
}

export const Left = {
  args: {
    orientation: '<',
    skin: '',
  },
}
