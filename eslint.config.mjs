// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

export default withNuxt({
	plugins: { eslintPluginPrettier },
	...pluginVue.configs['flat/base'],
	rules: {
		'eslintPluginPrettier/prettier': ['warn', { endOfLine: 'auto' }],
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off'
	}
});
