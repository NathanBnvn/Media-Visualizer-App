<template>
    <div class="media" @click="zoom">
        <img class="media-picture" :src="source">
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
.media {
    margin: 5px;
    width: 236px;

    &-title {
        display: flex;
        justify-content: center;
    }

    &-picture {
        border-radius: 5px;
    }
}

</style>