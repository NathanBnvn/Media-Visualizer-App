<template>
    <div class="home">
        <div class="home-container">
            <UIPicture :title="'pic 1'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 2'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 3'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 4'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 5'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 6'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 7'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 8'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 9'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 10'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
            <UIPicture :title="'pic 11'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        </div>
        <NuxtPage/>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.home {
    display: flex;
    height: 95vh;
    width: 100%;

    &-container {
        display: flex;
        margin: 10px;
        flex-grow: 1;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: scroll;
    }
}
</style>