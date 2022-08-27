<template>
    <section class="briix-container lg:mt-48">
    <div class="grid lg:grid-cols-6">
        <div class="col-span-2">
            <Employee class="w-80 lg:w-auto"/>
        </div>
        <div class="col-span-4 lg:pl-24 lg:pt-5">
            <h1 class="font-manrope text-2xl lg:text-[48px] leading-[72px] font-semibold lg:mb-4">Why use Briix?</h1>
            <p class="font-normal text-briix-body lg:text-2xl leading-relaxed lg:leading-[36px] lg:mb-12">Briix provides a wide range of property investments for investors looking to increase their real estate asset portfolio.</p>
            <div class="grid lg:grid-cols-2">
                <div class="lg:space-y-4 mt-2 lg:mt-0">
                    <div v-for="left in data.left" class="inline-flex items-center space-x-4">
                        <ListStyle class="w-10 lg:w-auto"/>
                        <p class="lg:text-xl font-manrope leading-[20px] text-briix-body">{{ left }}</p>
                    </div>
                </div>
                <div class="lg:space-y-4 mt-2 lg:mt-0">
                    <div v-for="right in data.right" class="inline-flex items-center space-x-4">
                        <ListStyle class="w-10 lg:w-auto"/>
                        <p class="lg:text-xl font-manrope leading-[20px] text-briix-body">{{ right }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import Employee from '../svg/Employee.vue';
import ListStyle from '../svg/ListStyle.vue';
export default {
    components: { Employee, ListStyle },
    data:()=>({
        data: {
            left:[
                "Fixed annual yield",
                "No management fee",
                "Developer financing"
            ],
            right:[
                "Small down payment",
                "Fixed monthly return",
                "Owner stays for 30 days"
            ]
        }
    })
}
</script>