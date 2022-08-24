<template>
  <div class="max-w-screen-2xl mx-auto">
    <Hero />

    <OurProperties />

    <WhyUseBriix/>

    <SiwaCliffSection/>

    <Contact/>

    <Footer/>
  </div>
</template>

<script>
import Hero from './components/home/Hero.vue';
import OurProperties from './components/home/OurProperties.vue';
import WhyUseBriix from './components/home/WhyUseBriix.vue';
import SiwaCliffSection from './components/home/SiwaCliffSection.vue';
import Contact from './components/home/Contact.vue';
import Footer from './components/home/Footer.vue';
export default {
  components: { Hero, OurProperties, WhyUseBriix, SiwaCliffSection, Contact, Footer }
}
</script>