/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'Russo': ["Russo One", "sans-serif"],
            'rubik-scribble': ["Rubik Scribble", "system-ui"],
            'rubik-mono': ["Rubik Mono One", "monospace"],
        },
        extend: {
            backgroundImage: {
                'background-image': "url('https://thumbs.dreamstime.com/z/vote-background-25501275.jpg?ct=jpeg')",
            }
        }
    },
    darkMode: 'class',
    plugins: [],
}