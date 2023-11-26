<template>

<div class="d-flex justify-content-end">
    <div class="mt-3 ">
        <nuxt-link :to="{ name: 'index' }">
                Home
            </nuxt-link> /  <nuxt-link :to="{ name: pageName }">
                {{ currentBread }}
            </nuxt-link>
    </div>
</div>
</template>

<style scoped>
a,
a:hover {
    color: #000000;
}
</style>

<script>
export default {
    props: {
        currentBread: {
            type: String,
            required: true
        },
        pageName: {
            type: String,
            required: true
        },
    }
}
</script>