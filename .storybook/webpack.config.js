import { resolve } from 'path'

export const module = {
    rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            ],
            include: resolve(__dirname, '../src'),
        },
    ],
}

