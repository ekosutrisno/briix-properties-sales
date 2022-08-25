<template>
    <section class="border-t-2 border-t-briix-primary/20 mt-36 lg:mt-48 pb-20">
    <div class="font-manrope -mt-14 font-semibold w-max py-4 px-8 rounded-xl mx-auto bg-white text-center leading-[72px] text-2xl lg:text-5xl">Siwa Cliff</div>
    
    <!-- Images Hero With Carrousel -->
    <div class="w-full lg:mt-10">
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
    <div class="font-manrope briix-container mt-20 lg:mt-[170px]">
        <div>
            <div class="inline-block lg:inline-flex items-center space-x-5">
                <div class="h-0.5 mb-5 bg-briix-primary w-[100px]"></div>
                <h1 class="text-[40px] lg:mb-[5px] font-semibold leading-[56px] text-left">The Facilities.</h1>
            </div>
            <p class="text-xl leading-[30px] tracking-[0.02em] text-briix-body text-left">The resort offers a club house, fitness center, spa and an area for business travelers to work and host meetings.</p>
        </div>

        <div class="bg-white min-h-[351px] rounded-[15px] shadow-custom-c1 lg:mt-10 p-4 mt-10 lg:p-[65px]">
            <div class="grid gap-4 lg:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <CardFacility v-for="fac in facilities" :key="fac.id" :facility="fac" />
            </div>
        </div>
    </div>

    <!-- Available Villas on the Market -->
    <div class="lg:mt-[170px] briix-container">
        <h1 class="text-center font-medium lg:text-[40px] leading-[56px] tracking-[0.03em]">Available Villas on the Market</h1>
        
        <!-- Card Available -->
        <div class="w-full font-manrope overflow-hidden min-h-[488px] lg:mt-[100px] grid lg:grid-cols-2 bg-white rounded-[15px] shadow-custom-c1">
            <div class="rounded-[15px] overflow-hidden lg:pr-10">
                <img class="h-full w-full object-cover rounded-[15px]" src="/img/villa-k.png" alt="available-img">
            </div>
            <div class="p-8">
                <div class="flex items-center justify-between">
                    <p class="text-4xl leading-[50px] font-bold">Villa K</p>
                    <p class="text-2xl leading-[33px] font-semibold text-briix-primary">IDR 13,000,000,000</p>
                </div>

                <div class="mt-4 text-xl leading-[34px] tracking-[0.02em] text-briix-body">
                    VILLA K is a stunning three bedroom villa situated on the second row of villas on SIWA Cliffs first phase of developments. 
                </div>

                <!-- Facility -->
                <div class="lg:mt-4 grid lg:gap-3 grid-cols-2">
                    <CardFacility  v-for="fac in villaKs" :key="fac.id" :facility="fac" />
                </div>

                <div class="lg:mt-5 inline-flex items-center justify-between lg:space-x-20 w-full">
                    <button type="button" class="rounded-full w-full border-2 hover:bg-briix-blue-1 transition text-briix-primary border-briix-primary py-3 px-10 inline-flex items-center justify-center space-x-4">
                        <p>Live Chat</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.486 2 2 6.486 2 12V16.143C2 17.167 2.897 18 4 18H5C5.26522 18 5.51957 17.8946 5.70711 17.7071C5.89464 17.5196 6 17.2652 6 17V11.857C6 11.5918 5.89464 11.3374 5.70711 11.1499C5.51957 10.9624 5.26522 10.857 5 10.857H4.092C4.648 6.987 7.978 4 12 4C16.022 4 19.352 6.987 19.908 10.857H19C18.7348 10.857 18.4804 10.9624 18.2929 11.1499C18.1054 11.3374 18 11.5918 18 11.857V18C18 19.103 17.103 20 16 20H14V19H10V22H16C18.206 22 20 20.206 20 18C21.103 18 22 17.167 22 16.143V12C22 6.486 17.514 2 12 2Z" fill="#1F9ED3"/>
                        </svg>
                    </button>
                    <button type="button" class="rounded-full w-full text-white bg-briix-primary hover:bg-briix-primary/90 transition py-3 px-10 inline-flex items-center justify-center space-x-4">
                        <p>Enquire Now</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.586 2.586C12.211 2.2109 11.7024 2.00011 11.172 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11.172C2.00011 11.7024 2.2109 12.211 2.586 12.586L10.586 20.586C10.9611 20.9609 11.4697 21.1716 12 21.1716C12.5303 21.1716 13.0389 20.9609 13.414 20.586L20.586 13.414C20.9609 13.0389 21.1716 12.5303 21.1716 12C21.1716 11.4697 20.9609 10.9611 20.586 10.586L12.586 2.586ZM7 9C6.46943 8.99987 5.96065 8.78897 5.58558 8.41371C5.21051 8.03845 4.99987 7.52957 5 6.999C5.00013 6.46843 5.21103 5.95965 5.58629 5.58458C5.96155 5.20951 6.47043 4.99887 7.001 4.999C7.53157 4.99913 8.04035 5.21003 8.41542 5.58529C8.79049 5.96055 9.00113 6.46943 9.001 7C9.00087 7.53057 8.78997 8.03935 8.41471 8.41442C8.03945 8.78949 7.53057 9.00013 7 9Z" fill="white"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>


    <!-- Card of Properties -->
    <div class="briix-container grid lg:grid-cols-2 gap-10 lg:gap-20 lg:mt-[100px]">
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
        villaKs: [
            {
                id: "56826f08-ce61-4ea7-bd01-52a34f6b52e5",
                icon: "villa-sm.svg",
                col: false,
                title: "439 m² building area"
            },
            {
                id: "a6d9c1f9-de41-46eb-9d13-7dcd7d62542e",
                icon: "area.svg",
                col: false,
                title: "652 m² lot area"
            },
            {
                id: "7a863210-bcd0-4aa5-9d93-4af5cb2c96a7",
                icon: "pool-sm.svg",
                col: false,
                title: "77 m² pool size"
            },
            {
                id: "1c4da027-9720-4dd1-b277-20b730b46e94",
                icon: "floor.svg",
                col: false,
                title: "2 Floors"
            },
            {
                id: "6bd4a5f1-d8b0-4b42-8288-fcff02e83fd6",
                icon: "bed.svg",
                col: false,
                title: "3 Bedrooms"
            },
            {
                id: "52f7b449-eaa9-4463-84df-f4b809401311",
                icon: "bath.svg",
                col: false,
                title: "3 Bathrooms"
            }
        ],
        villas: [
            {
                name: "Villa A",
                img: "Villa1.png"
            },
            {
                name: "Villa B",
                img: "Villa2.png"
            },
            {
                name: "Villa C",
                img: "Villa2.png"
            },
            {
                name: "Villa D",
                img: "Villa4.png"
            },
            {
                name: "Villa G",
                img: "Villa5.png"
            },
            {
                name: "Villa I",
                img: "Villa6.png"
            },
        ]

    }),
    components: { CardFacility, CardProperty }
}
</script>