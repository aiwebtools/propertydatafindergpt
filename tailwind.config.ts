
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['SF Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					blue: '#0ff',
					purple: '#f0f',
					pink: '#ff36f9',
					green: '#0f6',
					yellow: '#ff0'
				},
				cyber: {
					dark: '#0A0B10',
					darker: '#070810',
					darkest: '#030408',
					blue: '#3672F8',
					purple: '#9B30FF',
					green: '#38F9D7',
					pink: '#FF36F9',
					accent: '#36A3FF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 10px theme(colors.neon.blue)',
				'neon-purple': '0 0 5px theme(colors.neon.purple), 0 0 10px theme(colors.neon.purple)',
				'neon-green': '0 0 5px theme(colors.neon.green), 0 0 10px theme(colors.neon.green)',
				'neon-blue-sm': '0 0 2px theme(colors.neon.blue), 0 0 4px theme(colors.neon.blue)',
				'neon-purple-sm': '0 0 2px theme(colors.neon.purple), 0 0 4px theme(colors.neon.purple)',
			},
			keyframes: {
				'accord-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accord-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.8 }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-40rem 0' },
					'100%': { backgroundPosition: '40rem 0' }
				},
			},
			animation: {
				'accord-down': 'accord-down 0.2s ease-out',
				'accord-up': 'accord-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-in-slow': 'fade-in 0.8s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'slide-in-up': 'slide-in-up 0.6s ease-out',
				'slide-in-up-delay-1': 'slide-in-up 0.6s ease-out 0.1s both',
				'slide-in-up-delay-2': 'slide-in-up 0.6s ease-out 0.2s both',
				'slide-in-up-delay-3': 'slide-in-up 0.6s ease-out 0.3s both',
				'slide-in-down': 'slide-in-down 0.5s ease-out',
				'enter': 'fade-in 0.4s ease-out, scale-in 0.3s ease-out',
				'exit': 'fade-out 0.4s ease-out, scale-out 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
			},
			backgroundImage: {
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
				'cyber-gradient': 'linear-gradient(135deg, #0A0B10 0%, #111220 100%)',
				'hero-pattern': 'radial-gradient(circle, rgba(38, 38, 58, 0.4) 1px, transparent 1px)',
				'shimmer': 'linear-gradient(90deg, rgba(56, 249, 215, 0) 0%, rgba(56, 249, 215, 0.1) 20%, rgba(56, 249, 215, 0.2) 60%, rgba(56, 249, 215, 0))'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
