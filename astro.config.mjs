// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://davilood.github.io',
	base: '/Robotica-Movil-Practicas',
	integrations: [
		starlight({
			title: 'Cuaderno de Robótica Móvil',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Davilood/Robotica-Movil-Practicas' }],
			sidebar: [
				{
					label: 'Entradas',
					items: [{ autogenerate: { directory: 'posts' } }],
				},
			],
		}),
	],
});
