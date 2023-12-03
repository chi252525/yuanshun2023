<template>
    <b-container>
        <div class="m-5">
            <h1 v-if="error.statusCode === 404">404 找不到此頁面</h1>
            <h1 v-else>Opps ! 發生錯誤</h1>
            <div>
                {{error.message}}
            </div>
            <nuxt-link to="/">回首頁</nuxt-link>
        </div>
    </b-container>
</template>

<script>
export default {
    props: ['error'],
}
</script>