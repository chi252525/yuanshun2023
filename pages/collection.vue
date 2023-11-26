<template>
    <b-container>
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
export default {
    components: {
        Title,
        Card
    }
}
</script>