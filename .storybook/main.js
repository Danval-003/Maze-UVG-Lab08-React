module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "@storybook/addon-mdx-gfm", "@storybook/addon-actions", "@storybook/addon-controls"],
  "types": [{
    "name": "PixelButtonProps",
    "base": "{ label: string; action: () => void }",
    "meta": {
      "description": "Props for the PixelButton component"
    }
  }],
  "argTypes": {
    label: {
      control: {
        type: 'text'
      }
    },
    action: {
      action: 'clicked'
    }
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};