<template>
    <NuxtLink :to="path">
        <div class="album">
            <div class="album-cover">
                <img class="album-cover-main" :src="source">
                <div class="album-cover-minor"> 
                    <img class="album-cover-minor-first" :src="source">
                    <img class="album-cover-minor-second" :src="source">
                </div>
            </div>
            <div class="album-title">
                {{ title }}
            </div>
            <div class="album-details">
                <div>
                    3 pictures, 2 videos, no audio files
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>

const albumProps = defineProps({
    source: String,
    path: String,
    title: String,
})



</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.album {
    display: flex;
    flex-direction: column;
    width: 290px;

    @media (prefers-color-scheme: dark) {
        color: white;
    }

    @media (prefers-color-scheme: light) {
        color: black;
    }
    
    &-cover {
        display: flex;
        flex-direction: row;
        height: 157px;
        overflow: auto;
        border: 1px transparent solid;
        border-radius: 10px 10px 0px 0px;

        &-main {
            height: 100%;
            width: 60%;
        }

        &-main, &-minor-first, &-minor-second {
            object-fit: cover;
        }

        &-minor {
            display: flex;
            flex-direction: column;
            margin-left: 3px;

            &-first, &-second {
                height: 50%;
            }

            &-first {
                margin-bottom: 1.5px;
            }

            &-second {
                margin-top: 1.5px;
            }
        }
    }

    &-title {
        margin: 5px 0px;
    }

    &-details {
        display: flex;
        align-items: center;
        font-size: smaller;

        @media (prefers-color-scheme: dark) {
            color: white;
        }

        @media (prefers-color-scheme: light) {
            color: black;
        }

    }

}
</style>