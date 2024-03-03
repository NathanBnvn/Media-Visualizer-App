<template>
    <header class="header">
        <div class="header-container">
            <div class="header-container-navigation">
                <UIButton buttonType="button" iconName="lucide:sidebar" @is-clicked="activateNavigationBar(isActive = !isActive)"/>
                <UIButton buttonType="navigation" iconName="ic:baseline-arrow-back-ios-new"/>
                <UIButton buttonType="navigation" iconName="ic:baseline-arrow-forward-ios"/>
                <div class="header-title">Title</div>
            </div>
            <div class="header-container-action">
                <UIButton buttonType="button" iconName="ic:round-add" @is-clicked="console.log('2')"/>
                <!--
                    
                    iconName="streamline:hierarchy-2"
                -->
                <label id="x">
                    <UIInput id="x" type="file" style="display: none;"/>
                    <span>
                        <UIButton buttonType="button" iconName="octicon:upload-16"/>
                    </span>
                </label>
                <UIButton buttonType="button" iconName="fe:picture-square" @is-clicked="console.log('4')"/>
                <UIButton buttonType="button" iconName="f7:folder" @is-clicked="console.log('5')"/>
                <UIButton buttonType="button" iconName="charm:search" @is-clicked="console.log('6')"/>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    var isActive:boolean = false

    function activateNavigationBar(isActive: boolean): void {
        const navigationBar = document.getElementsByClassName('navigation-bar')[0] as HTMLElement | null
        const navigationBarContainer = document.getElementsByClassName('navigation-bar-container')[0] as HTMLElement | null

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
        const headerContainer = document.getElementsByClassName('header-container')[0] as HTMLElement | null
        
        
        if(headerContainer != null){
            if (navigationBarIsOpen) {
                headerContainer.style.marginLeft = "0px"
            } else {
                headerContainer.style.marginLeft = "60px"
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
    height: 35px;
    width: 100%;
    z-index: 111;
    border-bottom: 1px solid #d0d0d0;
    @media (prefers-color-scheme: dark) {
        background-color: color(dark_secondary);
    }

    @media (prefers-color-scheme: light) {
        background-color: color(light_secondary);
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
    
    &-title {
        display: flex;
        align-self: center;
        margin-left: 5px;
    }
    
}

</style>