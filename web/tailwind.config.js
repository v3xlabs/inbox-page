/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2d3436',
                },
                secondary: {
                    DEFAULT: '#fd79a8',
                },
                text: {
                    DEFAULT: '#2d3436',
                    inverse: 'white',
                },
            },
        },
    },
    plugins: [],
};
