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

.album {
    display: flex;
    flex-direction: column;
    width: 236px;
    margin: 5px;
    
    &-cover {
        display: flex;
        flex-direction: row;
        height: 157px;
        overflow: auto;
        border: 1px transparent solid;
        border-radius: 10px;

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
            margin-left: 2px;

            &-first, &-second {
                height: 50%;
            }

            &-first {
                margin-bottom: 1px;
            }

            &-second {
                margin-top: 1px;
            }
        }
    }

    &-title {
        color: white;
        text-align: center;
        margin: 5px 0px;

    }
}
</style>