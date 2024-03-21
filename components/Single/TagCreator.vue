<template>
    <div class="tag-creator">
        <Icon class="tag-creator-icon" name="heroicons:tag-16-solid"/>
        <UIInput class="tag-creator-input" 
        type="text" placeholder="Add a tag"/>
    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>

.tag-creator {
    display: flex;
    align-items: center;
    border-radius: 3px;
    height: 20px;
    padding-left: 5px;

    @media (prefers-color-scheme: dark) {
        background-color: white;
    }
    
    @media (prefers-color-scheme: light) {
        background-color: black;
    }

    &-icon {
        color: darkgray;
    }

    &-input {
        margin: 0px 0px 0px 0px;

        @media (prefers-color-scheme: dark) {
            color: white;
        }
    
        @media (prefers-color-scheme: light) {
            color: black;
        }

        & :active, & :focus {
            outline: none;
        }
    }
}

</style>