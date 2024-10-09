import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textColor: {
				gray: 'hsl(var(--gray))',
				ring: 'hsl(var(--ring))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'custom-gradient-h': 'linear-gradient(180deg, rgba(194,65,12,0.3) 10%, rgba(194,65,12,1) 30%, rgba(194,65,12,1) 70%, rgba(194,65,12,0.3) 90%)',
				'custom-gradient-v': 'linear-gradient(90deg, rgba(194,65,12,0.3) 10%, rgba(194,65,12,1) 30%, rgba(194,65,12,1) 70%, rgba(194,65,12,0.3) 90%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	safelist: [
		'group-hover:text-[#EA2857]',
		'group-hover:text-[#417E38]',
		'group-hover:text-[#2d79c6]',
		'group-hover:text-[#61dbfb]',
		'group-hover:text-primary',
		'group-hover:text-[#1D63ED]',
		'group-hover:text-[#2F5E8D]',
		'group-hover:text-[#10AA50]',
		'group-hover:text-[#E44D26]',
		'group-hover:text-[#2D54E5]',
		'group-hover:text-[#F8DC3D]',
		'group-hover:text-[#90C53F]',
		'group-hover:text-[#E2089B]',
		'group-hover:text-[#009788]',
		'group-hover:text-[#00BCFF]',
		'group-hover:text-[#CD6799]',
	]
};
export default config;
