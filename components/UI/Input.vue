<template>
    <div class="input">
        <label class="input-label" :for="id">{{ id }}</label>
        <textarea v-if="isComment" :id="id" class="input-input input-textarea">
        </textarea>
        <input v-else class="input-input input-input-field" 
        :type="type" :id="id" :name="id" :placeholder="placeholder">
    </div>
</template>

<script lang="ts" setup>
    const propsInput = defineProps({
        id: String,
        type: String,
        placeholder: String,
        isComment: Boolean,
    })
</script>

<style lang="scss" scoped>

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
        background-color: rgba(purple, 0.6);
        
        &-field {
            height: 20px;
        }

        &-textarea {
            min-height: 60px;
        }
    }
}
</style>