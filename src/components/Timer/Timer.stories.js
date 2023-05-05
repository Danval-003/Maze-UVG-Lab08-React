import Timer from './Timer'

export default {
  title: 'Timer',
  component: Timer,
  argsTypes: {
    time: { control: 'number' },
    onFinish: { control: 'func' },
  },
}

export const Default = {
  args: {
    time: 5,
    onFinish: () => {},
  },
}
