/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
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