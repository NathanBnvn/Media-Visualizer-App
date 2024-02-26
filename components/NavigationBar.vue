<template>
    <nav class="navigation-bar">
        <div class="navigation-bar-top"/>
        <div class="navigation-bar-container">
            <UIButton class="navigation-bar-button" 
            buttonName="Profil" iconName="healthicons:ui-user-profile-outline"/>
        </div>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.navigation-bar {
    //position: absolute;
    width: 250px;
    flex-grow: 0;
    flex-shrink: 0;
    z-index: 100;
    background-color: darkcyan;
    //background: color(secondary);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.025) -1px 0px 0px 0px inset;
    transition: 0.5s;

    &-top {
        height: 35px;
        -webkit-app-region: drag;  
        -webkit-user-select: none;  
        user-select: none;
    }

    &-button {
        padding: 5px 10px;
        width: 100%;
    }
}
</style>