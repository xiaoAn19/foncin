<script setup lang="ts">
const emit = defineEmits(['close']);
</script>

<template>
  <div class="app-menu">
    <div class="menu-container">
      <div class="menu-column">
        <nav>
          <RouterLink to="/" @click="emit('close')">{{ $t('nav.home') }}</RouterLink>
          <RouterLink to="/about" @click="emit('close')">{{ $t('nav.about') }}</RouterLink>
        </nav>
        <nav>
          <RouterLink to="/product" @click="emit('close')">{{ $t('nav.product') }}</RouterLink>
          <RouterLink to="/sustainability" @click="emit('close')">{{ $t('nav.sustainability') }}</RouterLink>
          <RouterLink to="/equipment" @click="emit('close')">{{ $t('nav.equipment') }}</RouterLink>
        </nav>
      </div>
      <div class="menu-right">
        <img src="@/assets/menu.webp" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-menu {
  width: 100%;
  background-color: #f0efeb;
  /* Light warm gray to match/contrast header */
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
}

.menu-container {
  width: 100%;
  max-width: 1200px;
  /* Match content width */
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
}

.menu-column {
  display: flex;
  gap: 55px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  a {
    font-size: 16px;
    /* Large, easy to tap */
    font-weight: 400;
    color: #5E4F46;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #000;
      text-decoration: underline;
      transform: translateX(10px);
    }
  }

  &.highlight {
    a {
      font-weight: 400;
    }
  }
}

@media (max-width: 768px) {
  .menu-right {
    display: none;
  }

  .menu-container {
    padding: 0 1rem;
    gap: 0;
    /* Remove huge gap since right side is gone */
    justify-content: center;
    /* Center the menu items */
  }

  .menu-column {
    width: 100%;
    justify-content: center;
    gap: 2rem;
    /* Adjust gap between nav columns if needed */
  }
}
</style>
