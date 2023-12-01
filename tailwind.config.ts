import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			mona: ['Mona Sans', 'sans-serif'],
		},
		extend: {
			backgroundImage: {},
			colors: {
				light: '#FBFAF5',
				dark: '#080808',
				cream: '#D7B5A0',
				sun: '#FBD66E',
				lime: '#74BE8E',
				brownGray: '#57514C',
				brownRed: '#AF6E5C',
				darkYellow: '#D9A054',
			},
		},
	},
	plugins: [],
};
export default config
