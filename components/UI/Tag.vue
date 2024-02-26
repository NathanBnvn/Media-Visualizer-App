<template>
    <div class="tag" :data-theme="tagColor">
        {{ tagName }}
    </div>    
</template>

<script lang="ts" setup>
    const propsTag = defineProps({
        tagName: { 
            type: String, 
            required: true
        },
        tagColor: {
            type: String,
        }
    })
</script>

<style lang="scss" scoped>
    .tag {
        display: flex;
        border-radius: 15px;

        @each $name, $color in $colors {
            &[data-theme='#{$name}'] {
                background-color: #{$color};
            }
        }
    }

</style>