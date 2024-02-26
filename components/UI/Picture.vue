<template>
    <div class="picture">
        <NuxtImg class="picture-content" 
        :src="source"
        fit="cover"
        width="240"
        height="240"
        />
        <div v-if="false" class="picture-title">{{ title }}</div>
        <div v-if="false" class="picture-tags">tags</div>
    </div>
</template>

<script lang="ts" setup>
    const pictureProps = defineProps({
        source: String,
        title: String,
    })
</script>

<style lang="scss" scoped>
.picture {
    margin: 5px;
    width: 240px;

    &-title {
        display: flex;
        justify-content: center;
    }

    &-content {
        border-radius: 5px;
    }
}

</style>