<template>
    <section>
        <footer class="briix-container pt-6 lg:pt-12 bg-briix-blue-7 lg:h-[368px] p-5">
            <BriixLogoWhite />
            <div class="grid grid-cols-2 gap-4 mt-[30px] lg:mt-10 lg:grid-cols-12 lg:gap-4 text-briix-white border-b border-briix-blue-1/20 lg:pb-7">
                <div class="lg:col-span-2">
                    <h1 class="font-manrope font-semibold text-xl leading-6 mb-[10px]">Company</h1>
                    <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">About</router-link>
                </div>
                <div class="lg:col-span-2">
                    <h1 class="font-manrope font-semibold text-xl leading-6 mb-[10px]">Our Products</h1>
                    <div class="flex flex-col space-y-[5px]">
                        <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">Properties</router-link>
                        <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">Fixed Incomes</router-link>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <h1 class="font-manrope font-semibold text-xl leading-6 mb-[10px]">Careers</h1>
                    <div class="flex flex-col space-y-[5px]">
                        <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">Professionals</router-link>
                        <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">Internships</router-link>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <h1 class="font-manrope font-semibold text-xl leading-6 mb-[10px]">Get in Touch</h1>
                    <div class="inline-flex items-center space-x-3">
                        <router-link class="font-inter transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6" to="#">
                            <img src="/icons/Facebook.svg" alt="sosmed-facebook">
                        </router-link>
                        <router-link class="font-inter transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6" to="#">
                            <img src="/icons/Linkedin.svg" alt="sosmed-linkedin">
                        </router-link>
                        <router-link class="font-inter transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6" to="#">
                            <img src="/icons/Instagram.svg" alt="sosmed-instagram">
                        </router-link>
                        <router-link class="font-inter transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6" to="#">
                            <img src="/icons/Twitter.svg" alt="sosmed-twitter">
                        </router-link>
                    </div>
                </div>
                <div class="col-span-2 mx-auto lg:col-span-4 lg:pl-[120px] pb-[30px] lg:pb-0">
                    <h1 class="font-manrope font-semibold text-center lg:text-left text-xl leading-6 mb-[10px]">Download Our App</h1>
                    <div class="inline-flex items-center space-x-3">
                        <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">
                            <img src="/icons/AppStore.svg" alt="sosmed-apple">
                        </router-link>
                        <router-link class="font-inter transition-colors hover:text-briix-white/60 font-normal leading-6" to="#">
                            <img src="/icons/GooglePlay.svg" alt="sosmed-google">
                        </router-link>
                    </div>
                </div>
            </div>
        
            <div class="mt-[30px] pb-[58px] lg:pb-0 flex justify-between lg:justify-start lg:flex-col lg:space-y-[5px] text-briix-white">
                 <router-link class="font-inter w-max transition-colors hover:text-briix-white/60 font-normal leading-6 underline" to="#">Privacy Policy</router-link>
                 <router-link class="font-inter w-max transition-colors hover:text-briix-white/60 font-normal leading-6 underline" to="#">Terms & Conditions</router-link>
            </div>
        </footer>
        <footer class="briix-container flex flex-col items-center justify-center bg-briix-blue-6 h-8 lg:h-[46px]">
            <p class="font-manrope font-medium lg:font-semibold text-[10px] lg:text-sm text-briix-white leading-5"> &copy; PT Briix Financial Technology. All Rights Reserved, {{ new Date().getFullYear() }}</p>
        </footer>
    </section>
</template>

<script>
import BriixLogoWhite from '../svg/BriixLogoWhite.vue';
export default {
    components:{ BriixLogoWhite }
}
</script>