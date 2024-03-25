<script lang="ts" setup>

const route = useRoute()
const description: string = ""

const headingProp = defineProps({
    title: String,
    tags: Array,
    showTags: Boolean,
})

</script>

<template>
    <div class="heading">
        <div class="heading-text"> 
            <h1 class="heading-title">
                {{ route.meta.title }}
            </h1>
            <div class="heading-description" 
            contenteditable="true" 
            data-text="Add a description...">
                {{ description }}
            </div>
            <div class="heading-tags" v-if="showTags == false">
                <UITag tag-name="maximum" />
                <SingleTagCreator />
            </div>
        </div>

    </div>
</template>


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
        margin-bottom: 10px;
    }

    &-description {
        width: 70%;
        margin-bottom: 20px;
        outline: none;

        &[contentEditable=true]:empty:before {
            content:attr(data-text);
            font-style: italic;
            font-size: small;
            color: gray;
        }
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
