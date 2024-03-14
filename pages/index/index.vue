<template>
    <div class="home">
        <Heading/>
        <div class="home-container">
            <div class="home-container-album">
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
            </div>
            <div class="home-container-picture">
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIPicture source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
            </div>
        </div>
        <NuxtPage/>
    </div>
</template>

<script lang="ts" setup>

definePageMeta({
  title: 'Home'
})

</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    
    &-container {
        padding: 20px;
        
        &-album, &-picture {
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            margin-bottom: 40px;

        }
    }
}
</style>