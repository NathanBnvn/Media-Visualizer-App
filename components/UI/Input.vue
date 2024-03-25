<script lang="ts" setup>
    const propsInput = defineProps({
        inputId: String,
        type: String,
        list: String,
        placeholder: String,
        hasLabel: Boolean,
        isComment: Boolean,
    })
</script>

<template>
    <div class="input">
        <label v-if="hasLabel" 
        class="input-label" 
        :for="inputId">
            {{ inputId }}
        </label>
        
        <textarea v-if="isComment"
        class="input-input input-textarea"
        :id="inputId" 
        />
        
        <input v-else 
        class="input-input input-input-field" 
        :list="list" 
        :type="type" 
        :id="inputId" 
        :name="inputId" 
        :placeholder="placeholder">
    </div>
</template>

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
        
        &-field {
            height: 20px;
            padding-left: 5px;

            &::placeholder {
                font-style: italic;
                font-size: small;
            }

            &::-webkit-search-cancel-button {
                display: block;
            }
        }

        &-textarea {
            min-height: 60px;
        }
    }
}


</style>