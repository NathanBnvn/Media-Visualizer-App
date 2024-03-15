<template>
    <div class="home">
        <Heading description="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo 
        consequat." />
        <div class="home-container">
            <div class="home-container-album">
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album" 
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
                <UIAlbum class="home-album"
                title="Test" path="/albums/lais"
                source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"/>
            </div>
            <div class="home-container-media">
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
                <UIMedia class="home-media" source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"/>
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
        
        &-album, &-media {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(236px, max-content));
            justify-content: center;
            margin-bottom: 40px;
        }
    }
}
</style>