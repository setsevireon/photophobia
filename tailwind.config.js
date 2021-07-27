module.exports = {
	purge: { content: [ './layouts/**/*.html' ] },
	darkMode: false,
	theme: { 
		container: {
			center: true,
			padding: '3rem'
		},
		fontFamily: {
			sans: ['Raleway', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			mono: ['Firacode', 'monospace']
		},
	},
	variants: {
		extend: {}
	},
	plugins: [],
}
