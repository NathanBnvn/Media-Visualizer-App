<template>
    <div class="picture" @click="zoom">
        <img class="picture-content" :src="source">
    </div>
</template>

<script lang="ts" setup>
    const pictureProps = defineProps({
        source: String,
    })

    function zoom(){}

    function getInformations(){}


</script>

<style lang="scss" scoped>
.picture {
    margin: 5px;
    width: 236px;

    &-title {
        display: flex;
        justify-content: center;
    }

    &-content {
        border-radius: 5px;
    }
}

</style>