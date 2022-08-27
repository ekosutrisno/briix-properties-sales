<template>
    <div :class="[facility.col ? 'flex-col items-center': 'flex-row items-start space-x-4']" class="flex font-manrope">
        <img :src="`/icons/${facility.icon}`" :alt="facility.icon">
        <p class="mt-2.5 leading-[22px] text-briix-grey-7 lg:font-semibold">{{ facility.title }}</p>
    </div>
</template>

<script>
export default {
    props:{
        facility:{
            type: Object,
            required: true
        }
    }
}
</script>