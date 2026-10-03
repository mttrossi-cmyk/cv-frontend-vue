<template>
    <!-- Not a link: in the offline build there is no site to go back to. -->
    <span :class="cvlogo"></span>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        cvlogo: {
            type: String,
            default: 'logo',
        },
    },
    data() {
        return {}
    },
}
</script>

<style scoped>
/* @import url('./Logo.css'); */
</style>
