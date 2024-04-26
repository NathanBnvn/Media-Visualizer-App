<script lang="ts" setup>

</script>

<template>
    <div class="tag-creator">
        <Icon class="tag-creator-icon" name="heroicons:tag-16-solid"/>
        <UIInput class="tag-creator-input" 
        type="text" placeholder="Add a tag"/>
        <UIInput class="tag-creator-color-picker"
        type="color" value="#ffffff"/>
    </div>
</template>

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
        margin: 0px;
        width: 90px;

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

    &-color-picker {
        width: 20px;
        height: 20px;
    }
}

</style>