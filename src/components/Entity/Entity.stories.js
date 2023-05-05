import Entity from './Entity'

export default {
  title: 'Example/Entity',
  component: Entity,
  argTypes: {
    type: { control: 'text' },
    next: { control: 'text' },
    typeStand: { control: 'text' },
  },
}

export const Default = {
  args: {
    type: '',
  },
}

export const Standing = {
  args: {
    type: '|',
  },
}

export const LyingDown = {
  args: {
    type: '--',
  },
}

export const LapRight = {
  args: {
    type: '+',
    next: '-',
    typeStand: '  ',
  },
}

export const LapLeft = {
  args: {
    type: '+',
    next: ' -',
    typeStand: '  ',
  },
}

export const LapUp = {
  args: {
    type: '+',
    next: '  ',
    typeStand: '|',
  },
}

export const LapDown = {
  args: {
    type: '+',
    next: '  ',
    typeStand: ' |',
  },
}

export const LapDownRight = {
  args: {
    type: '+',
    next: '-',
    typeStand: ' |',
  },
}

export const LapUpRight = {
  args: {
    type: '+',
    next: '-',
    typeStand: '|',
  },
}

export const LapDownLeft = {
  args: {
    type: '+',
    next: ' -',
    typeStand: ' |',
  },
}

export const LapUpLeft = {
  args: {
    type: '+',
    next: ' -',
    typeStand: '|',
  },
}

export const LapUpDownLeft = {
  args: {
    type: '+',
    next: ' -',
    typeStand: '||',
  },
}

export const LapUpDownRight = {
  args: {
    type: '+',
    next: '-',
    typeStand: '||',
  },
}

export const LapDownRightLeft = {
  args: {
    type: '+',
    next: '--',
    typeStand: ' |',
  },
}

export const LapUpRightLeft = {
  args: {
    type: '+',
    next: '--',
    typeStand: '|',
  },
}

export const LapPLUS = {
  args: {
    type: '+',
    next: '--',
    typeStand: '||',
  },
}
