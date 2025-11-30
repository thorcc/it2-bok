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
					label: 'Pygame',
					autogenerate: { directory: 'pygame' },
				},
				{
					label: 'Flask',
					autogenerate: { directory: 'flask' },
				},
				{
					label: 'Grunnleggende',
					autogenerate: { directory: 'grunnleggende'}
				},
				{
					label: 'Oppsett',
					autogenerate: { directory: 'oppsett' },
				},
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
