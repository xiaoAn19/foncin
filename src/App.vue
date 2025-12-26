<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-main">
      <RouterView />
    </main>
    <AppFooter />
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
  /* Match footer height */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  /* Optional shadow for depth */
}

@media screen and (max-height: 980px) {
  .app-main {
    margin-bottom: 788px;
  }
}
</style>
