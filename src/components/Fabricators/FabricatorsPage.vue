<template>
    <div style="padding-bottom: 50px;">
        <div class="text-center my-2">
            <h4>Fabricators</h4>
        </div>
        <SearchBar class=" border-top"></SearchBar>
        <hr style="margin: 3px 0; opacity: 1;" class="">
        <div v-for="(fabricator, index) in fabricators" :key="index">
            <RouterLink :to="'/FabNew/' + fabricator.id" style="text-decoration: none;">
                <div class="d-flex flex-wrap">
                    <div class="left">
                        <img src="../../assets/fab1.png" style="border-radius: 50px; width: 50px; height: 50px;" alt="">
                    </div>
                    <div class="ms-2">
                        <p class="m-0 fs-5 fw-bold text-dark">{{ fabricator.name }}</p>
                        <p class="m-0 text-dark fw-semibold">Orders:
                            <span class="fw-normal">{{ fabricator.stats.count }}</span>
                            | Bal. Qty: <span class="fw-normal">{{ fabricator.stats.bal }}</span>
                            | Ready Qty: <span class="fw-normal">{{ fabricator.stats.ready }}</span>
                        </p>

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
        fabricators() {
            return this.$store.getters.getFabricators;
        }
    },
    components: { SearchBar }
}
</script>

<style lang="scss" scoped></style>