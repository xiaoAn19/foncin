<template>
  <footer class="footer">

    <div class="footer-icon">
      <img src="@/assets/bottom-icon1.png" @click="goHome" alt="">
    </div>

    <!-- 顶部区域 -->
    <div style="display: flex;justify-content: center;">
      <div class="footer-main">
        <!-- 左侧菜单 -->
        <div style="display: flex;align-items: center;">
          <div class="footer-menu">
            <RouterLink to="/sustainability">{{ $t('nav.sustainability') }}</RouterLink>
            <!-- <a href="#">Brand</a> -->
            <RouterLink to="/product">{{ $t('nav.product') }}</RouterLink>
          </div>

          <div class="footer-menu">
            <RouterLink to="/equipment">{{ $t('nav.equipment') }}</RouterLink>
            <a href="#" @click.prevent="openContact">{{ $t('nav.contact') }}</a>
          </div>
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
      <img src="@/assets/logo.png" alt="">
    </div>

    <!-- 底部版权 -->
    <div class="footer-copyright">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const goHome = () => {
  router.push("/")
}
const openContact = () => {
  window.dispatchEvent(new CustomEvent('open-contact'))
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #eae7e2;
  padding: 0px 0px 30px 0;
  overflow: hidden;
  color: #6f6a63;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &-icon {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 120px;
    cursor: pointer;

    img {
      width: 85px;
      height: 80px;
    }
  }

  @media screen and (max-width: 768px) {
    background-color: #f2f0eb;
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
  margin-bottom: 80px;
}

/* 左侧菜单 */
.footer-menu {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-right: 120px;

  &:last-child {
    margin-right: 0;
  }

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
  width: 1.5px;
  height: 120px;
  background-color: #5E4F46;
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
  background: url('@/assets/qrcode.png') no-repeat;
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
    // height: 240px;
  }
}

/* 版权信息 */
.footer-copyright {
  margin-top: auto;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: #C7BDAE;
  z-index: 2;
  // margin-bottom: 20px;
}

@media screen and (max-width: 760px) {
  .footer {
    width: 100%;
    padding: 24px;
  }

  .footer-icon {
    margin-bottom: 60px;
  }

  .footer-main {
    width: 100%;
  }


  .footer-qrcode {
    gap: 15px;
  }

  .qrcode-box {
    width: 60px;
    height: 60px;
  }

  .footer-bg-text img {
    height: auto;
    width: 100%;
  }

  .footer-divider {
    display: none;
  }

  .footer-menu {
    gap: 11px;
    margin-right: 10px;

    a {
      text-decoration: none;
    }
  }

  .footer-copyright {
    position: relative;
  }

}


@media screen and (max-width: 1440px) {
  .footer-icon {
    margin-bottom: 20px;
  }
}


@media screen and (max-height: 700px) {
  .footer {
    padding: 24px;
  }

  .footer-icon {
    margin-bottom: 90px;
  }

  .footer-main {
    margin-bottom: 30px;
    /* Scale width if needed, or keep as is */
  }

  .footer-menu {

    // gap: 11px;

    a {
      text-decoration: none;
    }
  }

  .footer-divider {
    height: 72px;
    margin: 0 8px;
  }

  // .qrcode-box {
  //   width: 48px;
  //   height: 48px;
  // }

  .footer-bg-text {
    img {
      width: 45%;
      height: auto;
    }
  }

  .footer-copyright {
    margin-bottom: 0;
  }
}
</style>
