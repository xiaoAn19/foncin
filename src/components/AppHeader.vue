<script setup lang="ts">
import { ref } from 'vue';
import AppMenu from './AppMenu.vue';
import AppContact from './AppContact.vue';

const isMenuOpen = ref(false);
const isContactOpen = ref(false);

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
            ☰ Menu
          </span>
        </div>
        <div class="header-center">
          <h1 class="brand-logo"><img src="@/assets/logo.webp" alt=""></h1>
        </div>
        <div class="header-right" @click="toggleContact">
          <span class="contact-link">
            + contact us
          </span>
        </div>
      </div>
    </header>

    <Transition name="slide">
      <AppMenu v-if="isMenuOpen" class="menu-dropdown" />
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
</style>
