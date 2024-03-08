<template>
    <nav class="navigation-bar">
        <div class="navigation-bar-top"/>
        <div class="navigation-bar-container">            
            <UIButton class="navigation-bar-button"
            buttonType="navigation" buttonName="Home" 
            path="/" iconName="mdi:home-circle-outline"/>

            <UIButton class="navigation-bar-button"
            buttonType="navigation" buttonName="Recent"
            path="/history" iconName=""/>
            
            <UIButton class="navigation-bar-button"
            buttonType="navigation" buttonName="Tag Manager" 
            path="/tags/manager" iconName="solar:hashtag-circle-outline"/>
            
            <UIButton class="navigation-bar-button" 
            buttonType="navigation" buttonName="Settings" 
            path="/settings" iconName="iconoir:ios-settings"/>

        </div>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.navigation-bar {
    width: 250px;
    flex-grow: 0;
    flex-shrink: 0;
    z-index: 100;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.025) -1px 0px 0px 0px inset;
    transition: 0.1s ease-in-out;

    @media (prefers-color-scheme: dark) {
        background-color: color(dark_secondary);
    }

    @media (prefers-color-scheme: light) {
        background-color: color(light_secondary);
    }

    &-top {
        height: 35px;
        -webkit-app-region: drag;  
        -webkit-user-select: none;  
        user-select: none;
    }

    &-button {
        justify-content: flex-start;
        padding-left: 10px;
        width: 100%;
    }
}

// @media (prefers-color-scheme: dark) {
//     .navigation-bar {
//         background-color: color(dark_secondary);
//         color: color(dark_unselectedTypography);
//     }
// }

// @media (prefers-color-scheme: light) {
//     .navigation-bar {
//         background-color: color(light_secondary);
//         color: color(light_unselectedTypography);
//     }
// }

</style>