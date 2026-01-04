import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import zh from './locales/zh.js'
const savedLocale = localStorage.getItem('user-locale') || 'zh'

const i18n = createI18n({
  legacy: false, // Use Composition API
  globalInjection: true, // Allow usage of $t in templates
  locale: savedLocale, // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
  },
})

export default i18n
