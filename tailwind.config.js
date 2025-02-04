/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			colors: {
				Primary: 'hsl(var(--primary))',
				Secondary: 'hsl(var(--secondary))',
				Neutral: 'hsl(var(--neutral))',
				BgPrimary: 'hsl(var(--bg-primary))'
			}
		},
		container: {
			padding: '1.25rem',
			center: true
		}
	}
};
