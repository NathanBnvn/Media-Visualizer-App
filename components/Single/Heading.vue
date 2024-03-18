<template>
    <div class="heading">
        <div class="heading-text"> 
            <h1 class="heading-title">{{ route.meta.title }}</h1>
            <div class="heading-description" contenteditable="true" v-if="description">
                {{ description }}
            </div>
            <div class="heading-tags" v-if="showTags && tags">
                <UITag tag-name="maximum" />
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

const route = useRoute()

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
    
    @media (prefers-color-scheme: dark) {
        color: white;
    }
    
    @media (prefers-color-scheme: light) {
        color: black;
    }
    
    &-text {
        padding: 30px 5px 15px 20px;
    }

    &-title {
        font-size: x-large;
        margin-bottom: 5px;
    }

    &-description {
        width: 70%;
        margin-bottom: 10px;
    }

    &-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        column-gap: 4px;
        row-gap: 4px;
        width: 80%;
    }
}

</style>
