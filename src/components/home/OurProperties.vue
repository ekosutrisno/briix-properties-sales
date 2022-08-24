<template>
    <section class="bg-gradient-to-b from-[#C7E7F4]/40 to-[#FFFFFF]/0 briix-container lg:mb-[42px] -mt-10 pt-10">
        <h1 class="font-manrope font-semibold text-2xl my-10 lg:text-5xl lg:leading-[72px] text-center">Our Properties</h1>

        <div class="grid gap-y-6 lg:grid-cols-4 lg:gap-6 lg:mt-[86px]">
            <CardOurProperties v-for="card in cards" :key="card.id" :data="card"/>
        </div>
    </section>
</template>

<script>
import CardOurProperties from '../cards/CardOurProperties.vue';
export default {
    components: { CardOurProperties },
    data: ()=>({
        cards: [
            {
                id: 'e1c3439d-a64f-4ace-8b81-f07de474ac6a',
                bgImg: 'C1.png',
                logo: 'siwa-logo.png',
                subLogo: 'cliff-logo.png',
                soon: false
            },
            {
                id: '8593ee46-7064-4666-ab23-d1daa2a61d0b',
                bgImg: 'C2.png',
                logo: 'ku-logo.png',
                subLogo: '',
                soon: false
            },
            {
                id: '160844c5-4a3d-419e-9e2b-8a336e96e20f',
                bgImg: 'C3.png',
                logo: 'ara-logo.png',
                subLogo: '',
                soon: true
            },
            {
                id: '2033b496-4bf3-401c-8299-ba57b391b8f2',
                bgImg: 'C4.png',
                logo: 'siwa-logo.png',
                subLogo: 'uluw-logo.png',
                soon: true
            },
        ]
    })
}
</script>