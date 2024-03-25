<script lang="ts" setup>

const emit = defineEmits<{
    (e: 'isClose'): void
}>()

function dismiss(event: Event){
    const modal = document.getElementsByClassName(
        'modal')[0] as HTMLElement | null
        
    if(modal != null && event != null) {
        if(event.target == modal) {
            emit('isClose')
            modal.style.display = 'none'
        }
    }
}
</script>

<template>
    <div class="modal" @click="dismiss($event)">
        <div class="modal-container">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.modal {
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    z-index: 200;

    @media (prefers-color-scheme: dark) {
        background-color: color(dark_tertiary, 0.7);
        //background-color: rgba($color: #2e2e2e, $alpha: 0.7)
    }

    @media (prefers-color-scheme: light) {
        //background-color: color(light_tertiary, 0.8);
        background-color: rgba($color: #2e2e2e, $alpha: 0.7)
    }

    &-container {
        position: relative;
        padding: 20px;
        border-radius: 10px;
        overflow: hidden;
        max-width: calc(-100px + 100vw);
        height: calc(-100px + 100vh);
        opacity: 1;

        @media (prefers-color-scheme: dark) {
            color: white;
            background-color: color(dark_primary);
        }

        @media (prefers-color-scheme: light) {
            color: black;
            background-color: color(light_primary);
        }
    }
}
</style>