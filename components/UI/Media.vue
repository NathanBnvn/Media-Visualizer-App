<script lang="ts" setup>
    const pictureProps = defineProps({
        source: String,
    })

    function zoom(){}

    function getInformations(){}

</script>

<template>
    <div class="media" @click="zoom">
        <NuxtImg class="media-picture" 
        :src="source"
        alt=""
        width="290"
        fit="cover"
        loading="lazy"
        />
        <!-- 
            <video class="media-video" :src="source"/>
        -->
    </div>
</template>

<style lang="scss" scoped>
.media {
    margin: 3px;
}

</style>