<template>
    <nav>
        <div class="nav d-flex justify-content-between nav-tabs py-2" style="font-size: 15px; font-weight: 500;"
            id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'FabNew' ? 'active' : ''" :to="'/FabNew/' + fabricatorId">New</RouterLink>
            <RouterLink class="nav-link " :class="active === 'FabDetail' ? 'active' : ''" :to="'/FabReady/' + fabricatorId">Ready</RouterLink>
            <RouterLink class="nav-link " :class="active === 'FabComing' ? 'active' : ''" :to="'/FabComingPage/' + fabricatorId">Coming</RouterLink>
            <RouterLink class="nav-link " :class="active === 'FabComplete' ? 'active' : ''" :to="'/FabReceivedPage/' + fabricatorId">Received</RouterLink>
            <RouterLink class="nav-link " :class="active === 'FabAll' ? 'active' : ''" :to="'/FabAll/' + fabricatorId">All</RouterLink>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: ["active", "fabricatorId"],
    components: { RouterLink }
}
</script>