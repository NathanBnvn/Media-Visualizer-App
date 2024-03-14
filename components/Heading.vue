<template>
    <div class="heading">
        <h1 class="heading-title">{{ title }} Home</h1>
        <div class="heading-description" v-if="description">
            {{ description }}
        </div>
        <div class="heading-tags" v-if="showTags && tags">
        </div>
        <ButtonContainer/>
    </div>
</template>

<script lang="ts" setup>

const headingProp = defineProps({
    title: String,
    description: String,
    tags: Array,
    showTags: Boolean, 
})


</script>

<style lang="scss" scoped>
.heading {
    display: flex;
    flex-direction: column;
    padding: 40px 5px 20px;

    &-title {
        font-size: x-large;
    }

    &-title, &-description {
        margin-left: 20px;
    }
}

</style>
