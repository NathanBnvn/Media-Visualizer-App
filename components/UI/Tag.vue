<template>
    <NuxtLink>
        <div class="tag"> 
        <!-- <div :data-theme="tagColor"> -->
            {{ tagName }}
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
    const propsTag = defineProps({
        tagName: String,
    })
</script>

<style lang="scss" scoped>
    .tag {
        display: inline-block;
        border-radius: 2px;
        border: none;
        padding: 5px 2px;
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