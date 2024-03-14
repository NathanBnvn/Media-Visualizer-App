<template>
    <header class="header">
        <div class="header-container">
            <div class="header-container-navigation">
                <UIButton buttonType="button" iconName="lucide:sidebar" 
                @is-clicked="activateNavigationBar(isActive = !isActive)"/>
                <UIButton buttonType="navigation" 
                iconName="ic:baseline-arrow-back-ios-new" />
                <UIButton buttonType="navigation" iconName="ic:baseline-arrow-forward-ios"/>
                <div class="header-breadcrumb">{{ title }}</div>
            </div>
            <!--
                <ButtonContainer/>
            -->
        </div>
    </header>
</template>

<script lang="ts" setup>
    var isActive:boolean = false

    const headerProp = defineProps({
        title: String
    })

    function activateNavigationBar(isActive: boolean): void {
        const navigationBar = document.getElementsByClassName(
            'navigation-bar')[0] as HTMLElement | null
        const navigationBarContainer = document.getElementsByClassName(
            'navigation-bar-container')[0] as HTMLElement | null

        if (navigationBar != null && navigationBarContainer != null) {
            if (isActive) {
                navigationBarContainer.style.display = "none"                
                navigationBar.style.width = "0px"
                isActive = false
                manageHeaderContainer(isActive)
            } else {
                navigationBar.style.width = "250px"
                navigationBarContainer.style.display = "block"
                isActive = true
                manageHeaderContainer(isActive)
            }
        }
    }

    function manageHeaderContainer(navigationBarIsOpen: boolean): void {
        const headerContainer = document.getElementsByClassName(
            'header-container')[0] as HTMLElement | null
        if(headerContainer != null){
        // @To fix -- Make it reactive 
            if(!window.screenTop && !window.screenY) {
                headerContainer.style.marginLeft = "0px"
            } else {
                if (navigationBarIsOpen) {
                    headerContainer.style.marginLeft = "0px"
                } else {
                    headerContainer.style.marginLeft = "60px"
                }
            }
        }
    }
    

</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';
.header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 35px;
    width: 100%;
    z-index: 111;
    //border-bottom: 1px solid #d0d0d0;
    
    @media (prefers-color-scheme: dark) {
        color: white;
        background-color: color(dark_primary);
    }

    @media (prefers-color-scheme: light) {
        color: black;
        background-color: color(light_primary);
    }

    &-container {
        display: flex;
        height: 35px;
        flex-grow: 1;
        padding: 0px 5px;
        align-items: center;
        justify-content: space-between;
        -webkit-app-region: drag;  
        -webkit-user-select: none;  
        user-select: none;

        &-navigation, &-action {
            display: flex;
        }
    }
    
    &-breadcrumb {
        display: flex;
        align-self: center;
        margin-left: 5px;
    }
    
}

</style>