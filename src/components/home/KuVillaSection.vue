<template>
    <section class="border-t-2 border-t-briix-primary/20 mt-36 lg:mt-48 pb-20">
    <div class="font-manrope -mt-14 font-semibold w-max py-4 px-8 rounded-xl mx-auto bg-white text-center leading-[72px] text-2xl lg:text-5xl">KU VILLAS</div>
    
    <!-- Images Hero With Carrousel -->
    <div class="w-full lg:mt-10">
        <img class="h-full w-full object-cover" src="/img/KuVillas.png" alt="ku-villa-bg">
    </div>

    <!-- Masterplan -->
    <div class="lg:mt-[85px] grid lg:grid-cols-2 briix-container">
        <div>
            <img src="/img/KuMasterplan.png" alt="master-plan-light">
        </div>
        <div class="font-manrope flex flex-col justify-center">
            <div class="inline-flex items-center space-x-5 lg:pl-10">
                <div class="h-0.5 lg:mb-5 bg-briix-primary w-[100px]"></div>
                <h1 class="lg:text-[40px] text-2xl lg:mb-[30px] font-semibold leading-[56px] text-right">The Master Plan</h1>
            </div>
            <p class="lg:text-xl leading-relaxed lg:leading-[36px] tracking-[0.02em] text-briix-body text-left">KU Villas are positioned close to the action in the exotic and unique province of Kuta Mandalika. It’s the perfect base for those looking to enjoy everything the location has to offer, while also being the ideal retreat when you’re looking to re-balance.</p>
        </div>
    </div>

    <!-- Facilities -->
    <div class="font-manrope briix-container mt-20 lg:mt-[170px]">
        <div>
            <div class="inline-flex items-center space-x-5">
                <div class="h-0.5 lg:mb-5 bg-briix-primary w-[100px]"></div>
                <h1 class="lg:text-[40px] text-2xl lg:mb-[5px] font-semibold leading-[56px] text-left">The Facilities.</h1>
            </div>
            <p class="lg:text-xl leading-relaxed lg:leading-[36px] tracking-[0.02em] text-briix-body text-left">The resort offers a club house, fitness center, spa and an area for business travelers to work and host meetings.</p>
        </div>

        <div class="bg-white min-h-[351px] rounded-[15px] shadow-custom-c1 px-4 py-10 lg:mt-10 lg:p-[65px]">
            <div class="grid gap-4 lg:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <CardFacility v-for="fac in facilities" :key="fac.id" :facility="fac" />
            </div>
        </div>
    </div>

    <!-- Available Villas on the Market -->
    <div class="lg:mt-[170px] briix-container">
        <h1 class="text-center font-medium text-2xl mt-10 lg:mt-0 lg:text-[40px] leading-[56px] tracking-[0.03em]">Available Villas on the Market</h1>
    </div>


    <!-- Card of Properties -->
    <div class="briix-container grid lg:grid-cols-2 gap-10 lg:gap-20 mt-5 lg:mt-[100px]">
        <CardProperty v-for="(villa, idx) in villas" :key="idx" :villa="villa"/>
    </div>


    </section>
</template>

<script>
import CardFacility from '../cards/CardFacility.vue';
import CardProperty from '../cards/CardProperty.vue';
export default {
    data: () => ({
        facilities: [
            {
                id: "56826f08-ce61-4ea7-bd01-52a34f6b52e5",
                icon: "villa.svg",
                col: true,
                title: "Villa"
            },
            {
                id: "a6d9c1f9-de41-46eb-9d13-7dcd7d62542e",
                icon: "restaurant.svg",
                col: true,
                title: "Restaurant"
            },
            {
                id: "7a863210-bcd0-4aa5-9d93-4af5cb2c96a7",
                icon: "bar.svg",
                col: true,
                title: "Bar"
            },
            {
                id: "1c4da027-9720-4dd1-b277-20b730b46e94",
                icon: "club.svg",
                col: true,
                title: "Club"
            },
            {
                id: "6bd4a5f1-d8b0-4b42-8288-fcff02e83fd6",
                icon: "spa.svg",
                col: true,
                title: "Day Spa"
            },
            {
                id: "52f7b449-eaa9-4463-84df-f4b809401311",
                icon: "pool.svg",
                col: true,
                title: "Swimming Pools"
            },
            {
                id: "74fa242d-cf51-45f7-8c66-6ef69027f12e",
                icon: "ocean.svg",
                col: true,
                title: "Ocean View"
            },
            {
                id: "4f795822-e15e-4195-b30d-559bac162786",
                icon: "concierge.svg",
                col: true,
                title: "Full Concierge"
            },
            {
                id: "4345b310-26a4-439e-a31f-18c917e16785",
                icon: "wellness.svg",
                col: true,
                title: "Wellness"
            },
            {
                id: "8c278fcf-fa69-4b62-beeb-d165d1b4229e",
                icon: "parking.svg",
                col: true,
                title: "Vallet Parking"
            },
        ],
          villas: [
            {
                name: "Ku Standard Room",
                price:"",
                address:"Jl. Baturiti I, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
                area: 261,
                bed: 2,
                bath: 2,
                img: "Ku1.png"
            },
            {
                name: "Ku Rooms With Private Pools",
                price:"",
                address:"Jl. Baturiti I, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
                area: 261,
                bed: 2,
                bath: 2,
                img: "Ku2.png"
            },
            {
                name: "Two Bedrooms Family Suite",
                price:"",
                address:"Jl. Baturiti I, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
                area: 261,
                bed: 2,
                bath: 2,
                img: "Ku3.png"
            },
            {
                name: "Two Bedrooms Pool Villas",
                price:"",
                address:"Jl. Baturiti I, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
                area: 261,
                bed: 2,
                bath: 2,
                img: "Ku4.png"
            }
        ]

    }),
    components: { CardFacility, CardProperty }
}
</script>