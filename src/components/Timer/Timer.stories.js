import Timer from './Timer'

export default {
  title: 'Timer',
  component: Timer,
  argsTypes: {
    time: { control: 'number' },
    onFinish: { action: 'Finished' },
  },
}

export const Default = {
  args: {
    time: 5,
  },
}
