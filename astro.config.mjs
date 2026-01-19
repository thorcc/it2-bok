// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({
			theme: 'forest',
			autoTheme: true
		}),
		starlight({
			title: 'IT2',
			defaultLocale: 'nb-NO',
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Apputvikling',
					autogenerate: { directory: 'apputvikling' },
					collapsed: false,
				},
				{
					label: 'Pygame',
					autogenerate: { directory: 'pygame' },
					collapsed: true
				},
				{
					label: 'Grunnleggende',
					autogenerate: { directory: 'grunnleggende' },
					collapsed: true
				},
				{
					label: 'Oppsett',
					autogenerate: { directory: 'oppsett' },
					collapsed: true
				},
				{
					label: 'Diverse',
					autogenerate: { directory: 'diverse' },
					collapsed: true
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
