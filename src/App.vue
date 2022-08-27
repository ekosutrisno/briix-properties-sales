<template>
  <div class="max-w-screen-2xl mx-auto">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/home/Footer.vue';
export default {
    components: { Footer }
}
</script>