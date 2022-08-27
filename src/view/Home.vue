<template>
  <div>
    <Hero />

    <OurProperties />

    <WhyUseBriix/>

    <SiwaCliffSection/>

    <KuVillaSection/>

    <AraVillaSection/>

    <SiwaUluwatuVillaSection/>
  </div>
</template>

<script>
import Hero from '../components/home/Hero.vue';
import OurProperties from '../components/home/OurProperties.vue';
import WhyUseBriix from '../components/home/WhyUseBriix.vue';
import SiwaCliffSection from '../components/home/SiwaCliffSection.vue';
import Footer from '../components/home/Footer.vue';
import KuVillaSection from '../components/home/KuVillaSection.vue';
import AraVillaSection from '../components/home/AraVillaSection.vue';
import SiwaUluwatuVillaSection from '../components/home/SiwaUluwatuVillaSection.vue';
export default {
  components: { Hero, OurProperties, WhyUseBriix, SiwaCliffSection, Footer, KuVillaSection, AraVillaSection, SiwaUluwatuVillaSection }
}
</script>