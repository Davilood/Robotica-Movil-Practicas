// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://davilood.github.io',
	base: '/Robotica-Movil-Practicas',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Robótica Móvil',
			description: 'Blog de prácticas de Robótica Móvil.',
			locales: { root: { label: 'Español', lang: 'es' } },
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Davilood/Robotica-Movil-Practicas' }],
			sidebar: [
				{ label: 'Inicio', slug: '' },
				{
					label: 'Prácticas',
					items: [{ autogenerate: { directory: 'posts' } }],
				},
			],
		}),
	],
});
