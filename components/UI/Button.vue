<template>
    <NuxtLink v-if='buttonType == "navigation"' 
    class="button button-navigation" 
    @click="$emit('isClicked')" :to="path">
        
        <Icon v-if="iconName"
        class="button-icon button-icon-navigation" 
        :name="iconName"/>
        
        <div v-if="buttonName" 
        class="button-navigation-name">
            {{ buttonName }}
        </div>
    </NuxtLink>
    
    <div v-else-if='buttonType == "button"' 
    class="button" 
    @click="$emit('isClicked')">
        <Icon v-if="iconName"
        class="button-icon" 
        :name="iconName"/>
    </div>
    
    <div v-else class="button-bar">
        <Icon v-if="iconName"
        class="button-icon button-icon-bar" 
        :name="iconName"/>
        <div v-if="buttonName" class="button-name">
            {{ buttonName }}
        </div>
    </div>
</template>

<script lang="ts" setup>
    const propsButton = defineProps({
        path: String,
        iconName: String,
        buttonName: String,
        buttonType: String,
    })

</script>


<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 

    @include square(25px);
    
    border-radius: 2px;
    margin: 0px 2px;
    -webkit-app-region: no-drag;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media (prefers-color-scheme: dark) {
        &:hover, &-navigation.router-link-exact-active {
            background-color: color(dark_selected, 0.08);   
        }
    }

    @media (prefers-color-scheme: light) {
        &:hover, &-navigation.router-link-exact-active {
            background-color: color(light_selected, 0.08);
        }
    }

    &-navigation {
        text-align: center;
        text-decoration: none;
        margin: 0px 1px;

        &-name {
            margin-left: 5px;
        }
    }

    &-icon {
        &-bar {
            margin-right: 5px;
        }
    }

    &-navigation, &-icon {
        @media (prefers-color-scheme: dark) {
            color: white;
        }
        
        @media (prefers-color-scheme: light) {
            color: black;
        }
    }
}

</style>