<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const isMobile = ref(false)

const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-main">
      <RouterView />
      <AppFooter class="mobile-footer" v-if="isMobile" />
    </main>
    <AppFooter class="pc-footer" v-if="!isMobile" />
  </div>
</template>

<style>
/* Global resets */
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #f0efeb;
  font-family: "Microsoft YaHei", sans-serif;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
  /* Above footer */
  background-color: #f0efeb;
  /* Ensure it's opaque */
  margin-bottom: calc(100vh - 100px);
  /* margin-bottom removed for static footer */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  /* Optional shadow for depth */
}

@media screen and (max-height: 980px) {
  .app-main {
    margin-bottom: 788px;
  }
}

@media (max-width: 768px) {

  html,
  body,
  #app {
    width: 100%;
    overflow-x: hidden;
  }

  .app-main {
    box-shadow: unset;
    margin-bottom: 0;
  }

  /* Toggle footers on mobile - handled by JS now
  .pc-footer {
    display: none;
  }

  .mobile-footer {
    display: block !important;
  } */
}

/* PC Footer defaults (visible) */
.pc-footer {
  /* display: block; - handled by v-if */
  position: fixed;
  bottom: 0;
  height: calc(100vh - 100px);
  z-index: 0;
  width: 100%;
  /* Ensure width is set */
}

/* Mobile Footer defaults (hidden) */
.mobile-footer {
  /* display: none; - handled by v-if */
  position: relative;
  height: auto;
  min-height: 500px;
}
</style>
