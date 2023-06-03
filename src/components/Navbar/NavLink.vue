<template>
    <nav >
        <div class="nav d-flex justify-content-between nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'Coming' ? 'active' : ''" href="/ComingPage">Orders</a>
            <a class="nav-link " :class="active === 'Running' ? 'active' : ''" href="/RunningPage">Arrange</a>
            <a class="nav-link " :class="active === 'Ready' ? 'active' : ''" href="/ReadyPage">Ready</a>
            <a class="nav-link " :class="active === 'Complete' ? 'active' : ''" href="/CompletePage">Complete</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>