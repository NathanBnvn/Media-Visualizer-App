<script lang="ts" setup>
definePageMeta({
  title: "Home",
  layout: "media",
});
</script>

<template>
  <div class="home">
    <div class="home-container">
      <div class="home-container-album">
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />
        <UIAlbum
          class="home-album"
          title="Test"
          path="/album/lais"
          source="/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
        />

        <UIAlbum class="home-album" title="Test" path="/album/lais" />
      </div>

      <div class="home-container-media" ref="dropZoneRef">
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
        <UIMedia
          class="home-media"
          source="/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg"
        />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/scss/tools.scss";

.home {
  &-media {
    margin: 3px;
  }

  &-container {
    padding: 20px;
    padding-bottom: 40px;

    &-album {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, max-content));
      justify-content: center;
      row-gap: 10px;
      column-gap: 10px;
      margin-bottom: 80px;
    }

    &-media {
      margin: 0px;
      padding: 0px;

      display: grid;

      @include mobile {
        grid-template-columns: auto auto;
      }

      @include tablet {
        grid-template-columns: auto auto auto auto;
      }

      @include desktop {
        grid-template-columns: auto auto auto auto auto;
      }

      @include wide {
        grid-template-columns: auto auto auto auto auto auto;
      }
    }
  }
}
</style>
