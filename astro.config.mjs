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
			title: 'Cuaderno de Robótica Móvil',
			description: 'Blog de prácticas de Robótica Móvil: objetivos, desarrollo, pruebas y conclusiones.',
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
