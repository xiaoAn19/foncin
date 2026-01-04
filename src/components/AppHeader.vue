<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import AppMenu from './AppMenu.vue';
import AppContact from './AppContact.vue';

const { locale } = useI18n();

watch(locale, (newLocale) => {
  localStorage.setItem('user-locale', newLocale);
});

const isMenuOpen = ref(false);
const isContactOpen = ref(false);
const isLangOpen = ref(false);

const toggleLang = () => {
  isLangOpen.value = !isLangOpen.value;
};

const setLocale = (lang: string) => {
  locale.value = lang;
  isLangOpen.value = false;
};

const toggleMenu = () => {
  if (isContactOpen.value) isContactOpen.value = false;
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleContact = () => {
  if (isMenuOpen.value) isMenuOpen.value = false;
  isContactOpen.value = !isContactOpen.value;
};
</script>

<template>
  <div class="header-container">
    <header class="header">
      <div class="header-inner">
        <div class="header-left" @click="toggleMenu">
          <span class="menu-icon">
            ☰ {{ $t('nav.menu') }}
          </span>
        </div>
        <div class="header-center">
          <h1 class="brand-logo"><img src="@/assets/logo.png" alt=""></h1>
        </div>
        <div class="header-right">
          <div @click="toggleContact" class="contact-btn">
            <span class="contact-link">
              + {{ $t('nav.contact') }}
            </span>
          </div>
          <div class="lang-switch" @click.stop="toggleLang">
            <span class="current-lang">{{ locale === 'zh' ? '中文' : 'English' }}</span>
            <Transition name="fade">
              <ul v-if="isLangOpen" class="lang-dropdown">
                <li :class="{ active: locale === 'zh' }" @click.stop="setLocale('zh')">中文</li>
                <li :class="{ active: locale === 'en' }" @click.stop="setLocale('en')">English</li>
              </ul>
            </Transition>
          </div>
        </div>
      </div>
    </header>

    <Transition name="slide">
      <AppMenu v-if="isMenuOpen" class="menu-dropdown" @close="toggleMenu" />
    </Transition>

    <Transition name="slide">
      <AppContact v-if="isContactOpen" class="menu-dropdown" @close="toggleContact" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.header {
  /* Center perfectly */
  width: 100%;
  max-width: 1920px;
  /* Constrain width to design size */
  display: flex;
  justify-content: center;
  background-color: #F0EFEB;
  z-index: 1100;
  /* Higher than menu */
  font-size: 0.9rem;
  color: #333;
  align-items: center;

  &-container {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: #F0EFEB;
    z-index: 1000;
  }


  &-right,
  &-left {
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    min-width: 60px;
    /* Prevent layout shift when text changes */
  }

  &-right {
    text-align: right;
    display: flex;
    align-items: center;
    gap: 20px;

    .contact-btn {
      cursor: pointer;
    }

    .lang-switch {
      position: relative;
      cursor: pointer;
      font-size: 14px;
      user-select: none;

      .current-lang {
        display: block;
        padding: 5px 0;
      }

      .lang-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        list-style: none;
        padding: 5px 0;
        margin: 5px 0 0 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        min-width: 60px;
        text-align: center;
        z-index: 1200;

        li {
          padding: 8px 12px;
          cursor: pointer;
          transition: background-color 0.2s;
          color: #666;

          &:hover {
            background-color: #f5f5f5;
            color: #000;
          }

          &.active {
            color: #000;
            font-weight: 500;
          }
        }
      }
    }
  }
}


.header-inner {
  width: 100%;
  /* max-width removal: Parent is already constrained */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 240px;
}

.brand-logo {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin: 0;

  img {
    height: 40px;
  }
}

/* Menu Dropdown Positioning */
.menu-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 999;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
