<script lang="ts" setup>

const albumProps = defineProps({
    source: String,
    path: String,
    title: String,
})

</script>


<template>
    <NuxtLink class="album" :to="path">
        <div class="album-cover">
            <NuxtImg class="album-cover-main" 
            v-if="source" 
            :src="source"
            alt=""
            height="157"
            width="174"
            fit="cover"
            />
            <div v-else
            class="album-cover-main
            album-cover-main-blank"
            />

            <div class="album-cover-minor">
                <NuxtImg class="album-cover-minor-first" 
                v-if="source" 
                :src="source"
                alt=""
                height="77"
                width="113"
                fit="cover"
                />
                <div v-else
                class="album-cover-minor-first
                album-cover-minor-first-blank"
                />
                
                <NuxtImg class="album-cover-minor-second" 
                v-if="source" 
                :src="source"
                alt=""
                height="77"
                width="113"
                fit="cover"
                />

                <div v-else
                class="album-cover-minor-second
                album-cover-minor-second-blank
                "
                />
            </div>
        </div>
        <div class="album-text">
        <div class="album-title">
            {{ title }}
        </div>
        <div class="album-details">
                3 pictures, 2 videos, no audio files
            </div>
        </div>
    </NuxtLink>
</template>


<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.album {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 290px;
    text-decoration: none;

    @media (prefers-color-scheme: dark) {
        color: white;
    }
    @media (prefers-color-scheme: light) {
        color: black;
    }
    
    &-cover {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        border: none;
        border-radius: 10px 10px 0px 0px;

        &-main-blank {
            height: 157px;
            width: 174px;
        }

        &-minor-first-blank,
        &-minor-second-blank {
            height: 77px;
            width: 113px;
        }

        &-main-blank, &-minor-first-blank,
        &-minor-second-blank {
            background-color: rgba(
                $color: #2e2e2e, $alpha: 0.5
            );
        }

        &-minor {
            display: flex;
            flex-direction: column;
            margin-left: 3px;

            &-first {
                margin-bottom: 1.5px;
            }

            &-second {
                margin-top: 1.5px;
            }
        }
    }

    &-text {
        padding: 10px 10px 10px 0px;
    }
    
    &-title {
        margin: 5px 0px;
    }

    &-details {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: smaller;
    }
}
</style>