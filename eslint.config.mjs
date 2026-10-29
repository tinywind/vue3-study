import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {ignores: ['.tmp/**', '.serena/**', 'dist/**', 'node_modules/**']},
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {languageOptions: {globals: globals.browser}},
  // Preserve the existing sample route names.
  {files: ['src/pages/*.vue', 'src/components/Modal.vue'], rules: {'vue/multi-word-component-names': 'off'}},
  // Headless UI exposes Menu and Dialog components with these names.
  {files: ['src/components/Modal.vue', 'src/components/singleton/AppHeader.vue', 'src/components/singleton/LoginModal.vue', 'src/components/singleton/AlertModal.vue'], rules: {'vue/no-reserved-component-names': 'off'}},
]
