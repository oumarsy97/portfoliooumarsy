import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1A6062',
					light: '#2C8F92',
					dark: '#135456',
				},
				secondary: {
					DEFAULT: '#FF6B6B',
					light: '#FF8F8F',
					dark: '#E55E5E',
				},
				background: {
					light: '#F4F4F4',
					DEFAULT: '#FFFFFF',
					dark: '#1F2937',
				},
				text: {
					light: '#333333',
					DEFAULT: '#1F2937',
					dark: '#F9FAFB',
				}
			},
			transitionProperty: {
				'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
			},
			animation: {
				'fade-in': 'fadeIn 0.3s ease-in-out',
				'slide-right': 'slideRight 0.5s ease-out forwards',
				'slide-in': 'slideIn 0.5s ease-out forwards',
				'scale-in': 'scaleIn 0.6s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideRight: {
					'from': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				slideIn: {
					'from': {
						opacity: '0',
						transform: 'translateX(-100%)'
					},
					'to': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				scaleIn: {
					'from': {
						opacity: '0',
						transform: 'scaleX(0)'
					},
					'to': {
						opacity: '1',
						transform: 'scaleX(1)'
					}
				}
			}
		},
	},
	plugins: [],
};

export default config;