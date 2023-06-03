<template>
    <div style="padding-bottom: 75px;">
        <div class="text-center my-2 border-bottom">
            <h4>Fabricators</h4>
        </div>
        <FabLink active="FabNew" :fabricatorId="this.$route.params.fabricatorId"></FabLink>
        <div v-for="(order, index) in orders" :key="index">

            <div class="d-flex justify-content-between container py-2 border-bottom">
                <div class="d-flex">
                    <div class="left">
                        <img :src="`${publicPath}${order.img}`" style="object-fit: cover; object-position: top; border-radius: 50px; width: 50px; height: 50px;" alt="">
                    </div>
                    <div class=" ms-2">
                        <p class="m-0 ">{{ order.id }} | <span class="text-info fw-bold">Qty:{{ order.total }}</span></p>
                        <p class="m-0 fw-bold">{{ order.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FabLink from './FabLink.vue';

export default {
    props: ['fabricators'],
    data(){
        return{
            publicPath: process.env.BASE_URL
        }
    },
    components: { FabLink },
    computed: {
        // orders() {
        //     return this.$store.getters.getOrders('fabricatorId')
        // },
        orders() {
            return this.$store.getters['getOrders']({
                fabricatorId: this.$route.params.fabricatorId,
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>