<template>
    <div class="media">
        <NavigationBar/>
        <main class="media-content">
            <Header/>
            <SingleHeading/>
            <SingleHeader/>
                <slot name="media-container">
                    <NuxtPage/>
                </slot>
        </main>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.media {
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
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
}
</style>