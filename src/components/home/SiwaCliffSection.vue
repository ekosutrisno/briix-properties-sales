<template>
    <section class="border-t-2 border-t-briix-primary/20 lg:mt-48">
    <div class="font-manrope -mt-14 font-semibold w-max py-4 px-8 rounded-xl mx-auto bg-white text-center leading-[72px] text-5xl">Siwa Cliff</div>
    
    <!-- Images Hero With Carrousel -->
    <div class="w-full lg:mt-4">
        <img class="h-full w-full object-cover" src="/img/hero-siwa-cliff.png" alt="siwa-cliff-bg">
        <div class="absolute inset-0 hidden">
            <div class="relative">
                <div>Left</div>
                <div>Right</div>
            </div>
        </div>
    </div>

    <!-- Masterplan Button -->
    <div class="my-24 mx-auto text-center">
        <div class="space-x-8">
            <button type="button" class="rounded-full py-2.5 px-[30px] hover:shadow-cst border bg-briix-blue-1 text-briix-primary">The Masterplan</button>
            <button type="button" class="rounded-full py-2.5 px-[30px] hover:shadow-cst border bg-[#F9F9F9] text-[#A6A6A6]">Masterplan Isolated Night</button>
        </div>
    </div>

    <!-- Masterplan -->
    <div class="relative">
        <div class="absolute text-right lg:right-[100px] top-0 lg:max-w-lg font-manrope">
            <div class="inline-flex items-center space-x-5">
                <div class="h-0.5 mb-5 bg-briix-primary w-[100px]"></div>
                <h1 class="text-[40px] lg:mb-[30px] font-semibold leading-[56px] text-right">The Master Plan</h1>
            </div>
            <p class="text-xl leading-[30px] tracking-[0.02em] text-briix-body text-right">The SIWA Cliffs property marks a new dawn in luxury property development and management in South Lombok with it's unique approach to sustainability through design, service and living.</p>
        </div>
        <img src="/img/MasterplanLight.png" alt="master-plan-light">
    </div>


    <!-- Carrousel Fake Image -->
    <div class="grid lg:grid-cols-12 lg:mt-[275px]">
        <div class="col-span-3 cursor-pointer">
            <img class="h-full w-full object-cover" src="/img/Left.png" alt="left">
        </div>
        <div class="col-span-6 cursor-pointer border-r-2 border-l-2">
            <img class="h-full w-full object-cover" src="/img/Center.png" alt="center">
        </div>
        <div class="col-span-3 cursor-pointer">
            <img class="h-full w-full object-cover" src="/img/Right.png" alt="right">
        </div>
    </div>

    <!-- Facilities -->
    <div class="font-manrope briix-container lg:mt-[170px]">
        <div>
            <div class="inline-flex items-center space-x-5">
                <div class="h-0.5 mb-5 bg-briix-primary w-[100px]"></div>
                <h1 class="text-[40px] lg:mb-[5px] font-semibold leading-[56px] text-left">The Facilities.</h1>
            </div>
            <p class="text-xl leading-[30px] tracking-[0.02em] text-briix-body text-left">The resort offers a club house, fitness center, spa and an area for business travelers to work and host meetings.</p>
        </div>

        <div class="bg-white min-h-[351px] rounded-[15px] shadow-custom-c1 lg:mt-10 lg:p-[65px]">
        
        </div>
    </div>



    </section>
</template>

<script>
export default {

}
</script>
<style>
.shadow-custom-c1{
    box-shadow: 15px 15px 40px rgba(12, 63, 84, 0.15);
}
</style>