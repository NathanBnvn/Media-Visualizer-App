<template>
    <div class="input">
        <label v-if="hasLabel" class="input-label" :for="id">
            {{ id }}
        </label>
        <textarea v-if="isComment" :id="id" class="input-input input-textarea">
        </textarea>
        <input v-else class="input-input input-input-field" 
        :list="list" :type="type" :id="id" 
        :name="id" :placeholder="placeholder">
    </div>
</template>

<script lang="ts" setup>
    const propsInput = defineProps({
        id: String,
        type: String,
        list: String,
        placeholder: String,
        hasLabel: Boolean,
        isComment: Boolean,
    })
</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';
.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    &-label {
        margin-bottom: 5px;

        &::first-letter {
            text-transform: capitalize;
        }
    }

    &-input {
        border: none;
        width: 100%;
        border-radius: 3px;

        @media (prefers-color-scheme: dark) {
            background-color: color(dark_tertiary);
        }
        
        @media (prefers-color-scheme: light) {
            background-color: color(light_tertiary);
        }
        
        &-field {
            height: 20px;
        }

        &-textarea {
            min-height: 60px;
        }
    }
}


</style>