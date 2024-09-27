<template>
  <div class="content">
    <Header />
    <main>
      <div class="container">
        <Aside />
        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header/Header.vue';
import Footer from '@/components/layout/Footer/Footer.vue';
import Aside from '@/components/layout/Aside/Aside';
</script>

<style lang="scss" scoped>
.container {
  background-color: $GREY_FDFDFD;
  min-height: 100%;
  display: grid;
  grid-template: repeat(12, 1fr);
  box-shadow: 0px 0px 10px 0px $GREY_0000001A;
  border-radius: 10px;
  padding: 0;

  .main-content {
    grid-column: 4/12;
    align-content: center;
  }
}
</style>
