<template>
    <div class="header">
        <UIButton button-type="button" 
        class="header-button"
        icon-name="ic:round-add"
        @is-clicked="console.log('2')"/>

        <label id="header-label-input">
            <UIInput id="header-label-input" 
            type="file" 
            style="display: none;"/>
            <span>
                <UIButton button-type="button"
                icon-name="octicon:upload-16"/>
            </span>
        </label>
        <UIButton button-type="button" 
        class="header-button"
        icon-name="heroicons:tag-16-solid" 
        @is-clicked="showTags = !showTags"/>
        
        <UIButton button-type="button" 
        class="header-button"
        icon-name="mingcute:settings-2-line" 
        @is-clicked="console.log('5')"/>
        
        <UIButton button-type="button"
        class="header-button"
        icon-name="charm:search" 
        @is-clicked="console.log('6')"/>
        
        <UIButton button-type="button"
        class="header-button"
        icon-name="ri:more-fill" 
        @is-clicked="console.log('7')"/>
    </div>
</template>

<script lang="ts" setup>

const showTags: Boolean = true

// const buttonContainerProp = defineProps({

// })

</script>

<style lang="scss" scoped>

.header {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    height: 35px;
    margin-left: auto;
    padding: 5px 0px;
    z-index: 112;

    &-button:last-child {
        margin-right: 5px;
    }

    &:after {
        content: " ";
        display: block;
        position: absolute;
        height: 1px;
        background-color: black;
        width: 100vw;
        bottom: 0px;
    }
}

</style>