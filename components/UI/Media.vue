<template>
    <div class="media" @click="zoom">
        <img class="media-picture" :src="source">
        <!-- <video></video> -->
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
    margin: 3px;
    width: 290px;
}

</style>