import Spritesheet from './Spritesheet'
import down from '../../ratspritesheet/down.png'
import left from '../../ratspritesheet/left.png'
import up from '../../ratspritesheet/up.png'
import right from '../../ratspritesheet/right.png'

export default {
  title: 'Spritesheet',
  component: Spritesheet,
  argTypes: {
    image: {
      control: {
        type: 'inline-radio',
        options: [down, left, up, right],
      },
    },
    widthFrame: { control: 'number' },
    heightFrame: { control: 'number' },
    steps: { control: 'number' },
    fps: { control: 'number' },
    isAnimating: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    image: down,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true,
  },
}

export const Down = {
  args: {
    image: down,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true,
  },
}

export const Up = {
  args: {
    image: up,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true,
  },
}

export const Left = {
  args: {
    image: left,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true,
  },
}

export const Right = {
  args: {
    image: right,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true,
  },
}
