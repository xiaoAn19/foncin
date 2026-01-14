<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AppMenu from './AppMenu.vue';
import AppContact from './AppContact.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { locale } = useI18n();

const goHome = () => {
  router.push("/")
}

watch(locale, (newLocale) => {
  localStorage.setItem('user-locale', newLocale);
});

const isMenuOpen = ref(false);
const isContactOpen = ref(false);
const isLangOpen = ref(false);

// Refs for click outside detection
const menuRef = ref();
const menuBtnRef = ref();
const contactRef = ref();
const contactBtnRef = ref();

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;

  // Close Menu if clicked outside
  if (isMenuOpen.value) {
    const menuEl = menuRef.value?.$el || menuRef.value;
    const btnEl = menuBtnRef.value;
    if (menuEl && !menuEl.contains(target) && btnEl && !btnEl.contains(target)) {
      isMenuOpen.value = false;
    }
  }

  // Close Contact if clicked outside
  if (isContactOpen.value) {
    const contactEl = contactRef.value?.$el || contactRef.value;
    const btnEl = contactBtnRef.value;
    if (contactEl && !contactEl.contains(target) && btnEl && !btnEl.contains(target)) {
      isContactOpen.value = false;
    }
  }

  // Close Lang if clicked outside
  if (isLangOpen.value) {
    // Basic implementation for lang dropdown (since it's inside header-right, might need specific ref if we want strict outside check)
    // Current toggleLang has .stop modifier so clicking toggle won't trigger this instantly if we bound it to window,
    // but here we are manual.
    // Actually, for simplicity, let's just leave lang as is or handle it if needed.
    // The user specifically asked for "Menu" (and likely Contact by extension of logic).
    // Let's stick to Menu and Contact as these are the major drawers.
    isLangOpen.value = false;
  }
};

const openContactModal = () => {
  // Use setTimeout to skip the current event loop (prevent handleClickOutside from closing it immediately)
  setTimeout(() => {
    if (isMenuOpen.value) isMenuOpen.value = false;
    isContactOpen.value = true;
  }, 0);
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('open-contact', openContactModal);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('open-contact', openContactModal);
});

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
        <div class="header-left" @click.stop="toggleMenu" ref="menuBtnRef">
          <span class="menu-icon-symbol">☰</span>
          <span class="menu-text">{{ $t('nav.menu') }}</span>
        </div>
        <div class="header-center">
          <h1 class="brand-logo" @click="goHome"><img src="@/assets/logo1.png" alt="Logo"></h1>
        </div>
        <div class="header-right">
          <div @click.stop="toggleContact" class="contact-btn" ref="contactBtnRef">
            <span class="contact-icon-symbol">+</span>
            <span class="contact-text">{{ $t('nav.contact') }}</span>
          </div>
          <div class="lang-switch" @click.stop="toggleLang">
            <span class="current-lang">{{ $t('nav.lang') }}</span>
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
      <AppMenu v-if="isMenuOpen" class="menu-dropdown" @close="toggleMenu" ref="menuRef" />
    </Transition>

    <Transition name="slide">
      <AppContact v-if="isContactOpen" class="menu-dropdown" @close="toggleContact" ref="contactRef" />
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
  color: #333;
  align-items: center;

  &-container {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: #F0EFEB;
    z-index: 1000;

    @media (max-width: 768px) {
      height: 60px;
      /* Smaller height for mobile */
    }
  }


  &-right,
  &-left {
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    min-width: 60px;
    display: flex;
    align-items: center;
    /* Prevent layout shift when text changes */
  }

  &-left {
    gap: 8px;

    .menu-icon-symbol {
      font-size: 20px;
    }
  }

  &-right {
    text-align: right;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;

    @media (max-width: 768px) {
      gap: 15px;
    }

    .contact-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;

      .contact-icon-symbol {
        font-size: 20px;
      }
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
  position: relative;

  @media (max-width: 1440px) {
    padding: 0 100px;
  }

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
}

.header-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.brand-logo {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 40px;
    /* Ensure strictly 40x40 as requested */
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      height: 60px;
      width: 60px;
    }
  }
}

/* Mobile Adjustments */
@media (max-width: 768px) {

  .menu-text,
  .contact-text {
    display: none;
    /* Hide text on mobile */
  }

  .header-left,
  .header-right {
    min-width: auto;
    /* Allow shrinking */
  }

  .menu-icon-symbol,
  .contact-icon-symbol {
    font-size: 24px;
    /* Larger icons on mobile */
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
