<template>
    <div class="heading">
        <div class="heading-text"> 
            <h1 class="heading-title">{{ title }} Home</h1>
            <div class="heading-description" contenteditable="true" v-if="description">
                {{ description }}
            </div>
            <!--
                v-if="showTags && tags"
            -->
            <div class="heading-tags" >
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
                <UITag tag-name="maximum" />
            </div>
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
        width: 60%;
        margin-bottom: 10px;
    }

    &-tags {
        width: 80%;
    }
}

</style>
