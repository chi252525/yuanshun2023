<template>
    <b-container>
        <BreadCrumb currentBread="Service" pageName="service"></BreadCrumb>
        <div class="mt-5 mb-5">
            <Title titleEng="Service" titleCh="服務流程"></Title>
        </div>
     </b-container>
</template>
<style></style>
<script>
import Title from '~/components/Title.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
export default {
    components: {
        Title,
        BreadCrumb
    }
}
</script>