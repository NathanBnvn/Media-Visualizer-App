<template>
    <div class="button-container">
        <UIButton button-type="button" 
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
        icon-name="heroicons:tag-16-solid" 
        @is-clicked="showTags = !showTags"/>
        
        <UIButton button-type="button" 
        icon-name="mingcute:settings-2-line" 
        @is-clicked="console.log('5')"/>
        
        <UIButton button-type="button" 
        icon-name="charm:search" 
        @is-clicked="console.log('6')"/>
        
        <UIButton button-type="button" 
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

.button-container {
    display: flex;
    justify-content: flex-end;
    padding: 0px 5px 5px 0px;
    border-bottom: 1px solid black;
    z-index: 10000;
}

</style>