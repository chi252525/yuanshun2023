<template>
    <b-container>
        <BreadCrumb currentBread="Project" pageName="collection"></BreadCrumb>
        <div class="mt-5 mb-5">
            <Title titleEng="Project" titleCh="設計作品"></Title>
            <div class="d-flex">
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    </b-container>
</template>

<style>

</style>

<script>
import Title from '~/components/Title.vue'
import Card from '~/components/Card.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
export default {
    components: {
        Title,
        Card,
        BreadCrumb
    }
}
</script>