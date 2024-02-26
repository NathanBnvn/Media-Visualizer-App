<template>
    <header class="header">
        <div class="header-container">
            <div class="header-container-navigation">
                <UIButton buttonType="button" iconName="lucide:sidebar" @is-clicked="moveNavigationBar"/>
                <UIButton buttonType="navigation" iconName="ic:baseline-arrow-back-ios-new"/>
                <UIButton buttonType="navigation" iconName="ic:baseline-arrow-forward-ios"/>
                <div class="header-title">Title</div>
            </div>
            <div class="header-container-action">
                <UIButton buttonType="button" iconName="ic:round-add" @is-clicked="console.log('2')"/>
                <UIButton buttonType="button" iconName="octicon:upload-16" @is-clicked="console.log('3')">
                    <!--
                        <label class="header-action-add" for="file-input"/>    
                        <input class="header-action-add-input" type="file" style="display: none;"/>

                        iconName="streamline:hierarchy-2"
                    -->
                </UIButton>
                <UIButton buttonType="button" iconName="fe:picture-square" @is-clicked="console.log('4')"/>
                <UIButton buttonType="button" iconName="f7:folder" @is-clicked="console.log('5')"/>
                <UIButton buttonType="button" iconName="charm:search" @is-clicked="console.log('6')"/>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    
    function moveNavigationBar(): void {
        const navigationBar = document.getElementsByClassName('navigation-bar')[0] as HTMLInputElement | null

        if (navigationBar != null) {
            if (navigationBar.style.width == "250px") {
                navigationBar.style.width = "0px"
            } else {
                navigationBar.style.width = "250px"
            }
        }
    }
// function dizzy(){
//     document.getElementsByClassName("side-navigation-bar")[0].style.width = "0px"
//     console.log("2")
// }
 
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
    background-color: rgb(255, 191, 0);
    border-bottom: 1px solid #d0d0d0;

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