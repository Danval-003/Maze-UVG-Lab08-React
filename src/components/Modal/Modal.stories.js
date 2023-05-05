import Modal from './Modal'

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    show: { control: 'boolean' },
    loading: { control: 'boolean' },
    victory: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    show: false,
    loading: false,
    victory: false,
  },
}
