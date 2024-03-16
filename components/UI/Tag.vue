<template>
    <div v-if="seletable">
        <div class="tag"> 
        <!-- <div :data-theme="tagColor"> -->
            {{ tagName }}
        </div>
    </div>
    <NuxtLink v-else>
        <div class="tag"> 
        <!-- <div :data-theme="tagColor"> -->
            {{ tagName }}
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
    const propsTag = defineProps({
        tagName: String,
        seletable: Boolean,
    })
</script>

<style lang="scss" scoped>
    .tag {
        display: inline-block;
        border-radius: 4px;
        border: none;
        padding: 4px;
        font-size: small;
        // @each $name, $color in $colors {
        //     &[data-theme='#{$name}'] {
        //         background-color: #{$color};
        //     }
        // }

        background-color: orange;
        color: white;

    }

</style>