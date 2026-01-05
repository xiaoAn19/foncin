<template>
  <footer class="footer">

    <div class="footer-icon">
      <img src="@/assets/bottom-icon1.webp" alt="">
    </div>

    <!-- 顶部区域 -->
    <div style="display: flex;justify-content: center;">
      <div class="footer-main">
        <!-- 左侧菜单 -->
        <div class="footer-menu">
          <RouterLink to="/sustainability">{{ $t('nav.sustainability') }}</RouterLink>
          <!-- <a href="#">Brand</a> -->
          <RouterLink to="/product">{{ $t('nav.product') }}</RouterLink>
        </div>

        <div class="footer-menu">
          <RouterLink to="/equipment">{{ $t('nav.equipment') }}</RouterLink>
          <a href="#" @click.prevent="openContact">{{ $t('nav.contact') }}</a>
        </div>

        <!-- 中间分割线 -->
        <div class="footer-divider"></div>

        <!-- 右侧二维码 -->
        <div class="footer-qrcode">
          <div class="qrcode-item">
            <div class="qrcode-box"></div>
            <span>WhatsApp</span>
          </div>
          <div class="qrcode-item">
            <div class="qrcode-box"></div>
            <span>Wechat</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 背景大字 -->
    <div class="footer-bg-text">
      <img src="@/assets/bottom-icon.webp" alt="">
    </div>

    <!-- 底部版权 -->
    <div class="footer-copyright">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const openContact = () => {
  const contactBtn = document.querySelector('.header-right .contact-btn') as HTMLElement
  if (contactBtn) {
    contactBtn.click()
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: calc(100vh - 100px);
  width: 100%;
  background-color: #eae7e2;
  padding: 40px 100px;
  overflow: hidden;
  color: #6f6a63;

  &-icon {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 145px;
  }
}

/* 顶部内容 */
.footer-main {
  width: 1006px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  margin-bottom: 140px;
}

/* 左侧菜单 */
.footer-menu {
  display: flex;
  flex-direction: column;
  gap: 18px;

  a {
    font-weight: 400;
    font-size: 14px;
    color: #5E4F46;
    text-underline-offset: 4px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
}

/* 中间分割线 */
.footer-divider {
  width: 1px;
  height: 120px;
  background-color: #8b857e;
  opacity: 0.6;
  margin: 0 80px;
}

/* 二维码区域 */
.footer-qrcode {
  display: flex;
  gap: 40px;
}

.qrcode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 12px;
    color: #6f6a63;
  }
}

/* 二维码占位 */
.qrcode-box {
  width: 80px;
  height: 80px;
  background: url('@/assets/qrcode.webp') no-repeat;
  background-size: contain;
}

/* 背景大字 */
.footer-bg-text {
  display: flex;
  justify-content: center;
  font-size: 260px;
  font-weight: 300;
  letter-spacing: 8px;
  color: #8c8c8c;
  pointer-events: none;
  user-select: none;
  z-index: 1;

  img {
    width: 1006px;
    height: 240px;
  }
}

/* 版权信息 */
.footer-copyright {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 120px;
  text-align: center;
  font-size: 12px;
  color: #a5a19a;
  z-index: 2;
}


@media screen and (max-height: 980px) {
  .footer {
    height: 788px;
    padding: 24px;
  }

  .footer-icon {
    margin-bottom: 87px;
  }

  .footer-main {
    margin-bottom: 84px;
    /* Scale width if needed, or keep as is */
  }

  .footer-menu {
    gap: 11px;
  }

  .footer-divider {
    height: 72px;
    margin: 0 8px;
  }

  .qrcode-box {
    width: 48px;
    height: 48px;
  }

  .footer-bg-text img {
    height: 100px;
    width: 90%;
  }

  .footer-copyright {
    margin-top: 72px;
    bottom: 20px;
  }
}
</style>
