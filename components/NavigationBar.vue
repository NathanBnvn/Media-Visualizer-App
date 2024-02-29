<template>
    <nav class="navigation-bar">
        <div class="navigation-bar-top"/>
        <div class="navigation-bar-container">
            <UIButton class="navigation-bar-button" 
            buttonType="navigation" buttonName="Profil" 
            path="/settings" iconName="healthicons:ui-user-profile-outline"/>

            <UIButton class="navigation-bar-button"
            buttonType="navigation" buttonName="Home" 
            path="/" iconName="mdi:home-circle-outline"/>

            <UIButton class="navigation-bar-button"
            buttonType="navigation" buttonName="Tag Manager" 
            path="/tag-manager" iconName="solar:hashtag-circle-outline"/>

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
    background-color: darkcyan;
    //background: color(secondary);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.025) -1px 0px 0px 0px inset;
    transition: 0.1s ease-in-out;

    &-top {
        height: 35px;
        -webkit-app-region: drag;  
        -webkit-user-select: none;  
        user-select: none;
    }

    &-button {
        justify-content: flex-start;
        padding-left: 10px;
        width: 240px;
    }
}

@media (prefers-color-scheme: dark) {
    .navigation-bar {
        background-color: color(dark_secondary);
        color: color(dark_unselectedTypography);
    }
}

@media (prefers-color-scheme: light) {
    .navigation-bar {
        background-color: color(light_secondary);
        color: color(light_unselectedTypography);
    }
}

</style>