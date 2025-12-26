<script setup lang="ts">
const emit = defineEmits(['close']);

const scrollToTop = () => {
  emit('close')
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth'
  // });
};
</script>

<template>
  <section class="contact-section">
    <!-- 顶部说明文案 -->
    <p class="intro-text">
      We welcome brands, buying offices and partners from Europe and
      around the world to talk with us about premium, comfortable, high-
      quality fabrics.
    </p>

    <!-- 联系方式列表 -->
    <div class="contact-list">
      <div class="contact-item">
        <h4>Email</h4>
        <p>123456789@gmail.com</p>
      </div>

      <div class="contact-item">
        <h4>Phone</h4>
        <p>+86 12345678901</p>
      </div>

      <div class="contact-item">
        <h4>Address</h4>
        <p>guangzhou city · guangdong · China</p>
      </div>

      <div class="contact-item">
        <h4>Wechat</h4>
        <p>12345678</p>
      </div>

      <div class="contact-item">
        <h4>Facebook</h4>
        <p>12345678</p>
      </div>
    </div>

    <!-- 底部说明 -->
    <p class="footer-text">
      Whether you are exploring possibilities or ready to discuss a specific
      project, feel free to reach out through any of the channels above.
    </p>

    <!-- 返回顶部按钮 -->
    <div class="back-top" @click="scrollToTop">
      <span class="arrow"></span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-section {
  min-height: calc(100vh - 100px);
  /* Adjusted to fit the dropdown request logic */
  background-color: #F0EFEB;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 80px;
  color: #6f6a63;
  overflow-y: auto;
}

/* 顶部说明 */
.intro-text {
  max-width: 520px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #5E4F46;
  line-height: 28px;
  margin-bottom: 80px;
}

/* 联系方式列表 */
.contact-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-bottom: 50px;
}

.contact-item {
  text-align: center;

  h4 {
    font-weight: bold;
    font-size: 20px;
    color: #5E4F46;
    line-height: 28px;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
    color: #5f5a53;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: #5E4F46;
  }
}

/* 底部说明 */
.footer-text {
  max-width: 480px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #5E4F46;
  line-height: 28px;
  margin-bottom: 40px;
}

/* 返回顶部按钮 */
.back-top {
  width: 36px;
  height: 36px;
  border: 1px solid #5e4f46;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  .arrow {
    width: 8px;
    height: 8px;
    border-top: 1.5px solid #5e4f46;
    border-left: 1.5px solid #5e4f46;
    transform: rotate(45deg);
    margin-top: 4px;
  }
}
</style>
