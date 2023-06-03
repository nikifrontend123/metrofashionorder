<template>
    <div>
        <div id="mobile bottomNav">
            <div class="bnav d-flex h-100">
                <div class="bottom-nav w-100 position-fixed " style="bottom: 0px;">
                    <!-- <div class="heading d-flex justify-content-between text-start py-1 container bg-white position-absolute">
                        <div class="pt-1">
                            <h3>Metro Fashion</h3>
                        </div>
                        <div class="">
                            <RouterLink to="/" :class="{ 'text-dark' : currentRoute === 'DashBoard'}">
                                <i class="bi bi-house fs-4 px-2"></i>
                                <i class=" home bi bi-house-door fs-2 px-2"></i>
                            </RouterLink>
                            <RouterLink to="/OrderPage"  :class="{ 'text-dark' : currentRoute === 'OrderPage'}">
                                <img class="text-danger" src="../../assets/shop.svg" width="34" alt="" >
                                <i class="bi bi-shop fs-4 px-2"></i>
                                <i class="bi bi-shop-window fs-3 px-2 "></i>
                            </RouterLink>
                            <RouterLink to="/FabricatorsPage"  :class="{ 'text-dark' : currentRoute === 'FabricatorsPage'}">
                                <i class="bi bi-person fs-4 px-2 text-danger"></i>
                                <i class="bi bi-people fs-2 px-2 "></i>
                            </RouterLink>
                        </div>
                    </div> -->
                    <!-- <div class="d-flex justify-content-between bg-white">
                        <RouterLink to="/ReadyPage" class=" w-100 m-2">
                            <button class="btn btn-secondary w-100 m-2">Orders</button>
                        </RouterLink>
                        <RouterLink to="/FabricatorsPage" class=" w-100 m-2">
                            <button class="btn btn-secondary w-100 m-2">Fabricator</button>
                        </RouterLink>
                    </div> -->
                    <div class="bottom-nav w-100 position-absolute" style="height: 5%;">
                        <div class="btn-front position-absolute d-flex justify-content-evenly w-100 "
                            style="bottom:0; width: 100%; background-color: #f2f2f2; ">
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-house-fill fs-4"></i>
                                    <p style="font-size: 14px;">Home</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/ReadyPage" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-shop-window fs-4"></i>
                                    <p style="font-size: 14px;">Store</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/FabricatorsPage" class="text-dark text-center"
                                    style="text-decoration: none;">
                                    <i class="bi bi-person-fill fs-4"></i>
                                    <p style="font-size: 14px;">Fabricators</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-bag-fill fs-4"></i>
                                    <p style="font-size: 14px;">Orders</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-people-fill fs-4"></i>
                                    <p style="font-size: 14px;">Customer</p>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>