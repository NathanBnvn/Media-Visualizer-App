<script lang="ts" setup>

definePageMeta({
  title: 'Home',
  layout: 'media',
})

</script>

<template>
    <div class="home">
        <div class="home-container">
            <div class="home-container-album" v-if="false">
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
                />
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

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.home {
    &-media {
        margin: 3px;
    }

    &-container {
        padding: 20px;
        padding-bottom: 40px;
        
        &-album, &-media {
            // display: grid;
            // grid-template-columns: repeat(
            //     auto-fit, minmax(290px, max-content)
            //     );
            // justify-content: center;
        }
        &-album {
            // row-gap: 30px;
            // column-gap: 10px;
            // margin-bottom: 80px;
        }
        &-media {
            margin: 0px;
            padding: 0px;

            // display: inline-block;
            // line-height: 0;
   
            //column-count:         4;
            //column-gap:           3px;

            display: grid;
            grid-template-columns: auto auto auto auto;
            
        }
    }
}
</style>