<template>
    <div style="padding-top: 50px;">
        <hr style="margin: 3px 0; opacity: 1;" class="">
        <SearchBar></SearchBar>
        <hr style="margin: 3px 0; opacity: 1;" class="">
        <div class="text-center"><h4>Order</h4></div>
        <div v-for="(order, index) in orders" :key="index">
            <RouterLink to="/ComingPage" style="text-decoration: none;">
            <div class="d-flex  justify-content-between">
                <div class="d-flex">
                    <div class="left">
                    <img src="../../assets/23.jpg" style="border-radius: 50px; width: 50px; height: 50px;" alt="">
                </div>
                <div class="right ms-2">
                    <p class="m-0 text-dark">{{ order.name }}</p>
                    <p class="m-0 text-dark fw-bold ">Pending by {{ order.pending }}</p>
                </div>
                </div>
                <div class="me-2 d-flex justify-content-center align-items-center">
                    <div class="badge bg-secondary p-2">{{ order.num }}</div>
                </div>
            </div>
        </RouterLink>
            <hr style="margin: 3px 0; opacity: 1;" class="my-2">
        </div>
    </div>
</template>

<script>
import SearchBar from '../SearchBar/SearchBar.vue';

export default {
    computed: {
        orders() {
            return this.$store.getters.getOrders;
        }
    },
    components: { SearchBar }
}
</script>

<style lang="scss" scoped></style>