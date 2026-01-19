// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'IT2',
			defaultLocale: 'nb-NO',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Apputvikling',
					autogenerate: { directory: 'apputvikling' },
				},
				{
					label: 'Pygame',
					autogenerate: { directory: 'pygame' },
				},
				{
					label: 'Grunnleggende',
					autogenerate: { directory: 'grunnleggende'}
				},
				{
					label: 'Oppsett',
					autogenerate: { directory: 'oppsett' },
				},
				{
					label: 'Diverse',
					autogenerate: { directory: 'diverse' },
				}
				// {
				// 	label: 'Spill',
				// 	autogenerate: { directory: 'spill' },
				// },
				// {
				// 	label: 'Stortignet Fantasy',
				// 	autogenerate: { directory: 'stortinget-fantasy' },
				// },
			],
		}),
	],
});
