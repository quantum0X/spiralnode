/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                'main-dark': '#4C4E50',
                'main-light': '#A1A1A1',
                'main-disable': '#87857E',
                'main-hover': '#686763',
                'main-text-light': '#F8F8F8'
            },
            height: {
                '90vh': '90vh',
                '80vh': '80vh',
                '70vh': '70vh'
            }
        },
    },
    plugins: [],
}