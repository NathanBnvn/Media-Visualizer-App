<template>
    <div class="main">
        <NavigationBar/>
        <main class="main-content">
            <Header :title="headerTitle"/>
            <!-- 
                <slot/>
            -->
        </main>
    </div>
</template>

<script lang="ts" setup>
const layoutProps = defineProps({
    headerTitle: String
})

</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.main {
    display: flex;
    position: absolute;
    font-family: Montserrat;
    font-size: 14px;
    top: 0; left: 0;
    height: 100vh;
    width: 100vw;

    @media (prefers-color-scheme: dark) {
            background-color: color(dark_primary);
        }

        @media (prefers-color-scheme: light) {
            background-color: color(light_primary);
        }   
    
    &-content {
        flex-grow: 1;
        overflow: hidden;
    }
    }
</style>