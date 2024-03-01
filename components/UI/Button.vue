<template>
    <NuxtLink v-if='buttonType == "navigation"' class="button button-navigation" :to="path">
        <Icon class="button-icon button-icon-navigation" :name="iconName"/>
        {{ buttonName }}
    </NuxtLink>
    <div v-else-if='buttonType == "button"' class="button" @click="$emit('isClicked')">
        <Icon class="button-icon" :name="iconName"/>
        <slot>
        </slot>
    </div>
    <div v-else class="button-bar">
        <div class="button-name" v-if="buttonName">
            <Icon class="button-icon button-icon-bar" :name="iconName"/>
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
        &:hover {
            background-color: color(dark_selected, 0.08);   
        }
    }

    @media (prefers-color-scheme: light) {
        &:hover {
            background-color: color(light_selected, 0.08);
        }
    }

    &-navigation {
        text-align: left;
        text-decoration: none;
        margin: 0px 1px;
    }

    &-icon {

        &-navigation, &-bar {
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