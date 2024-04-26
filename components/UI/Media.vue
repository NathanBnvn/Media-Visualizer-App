<script lang="ts" setup>
const pictureProps = defineProps({
  source: String,
});

function zoom() {}

function getInformations() {}
</script>

<template>
  <div class="media" draggable="true" @click="zoom">
    <NuxtImg
      class="media-picture"
      :src="source"
      alt=""
      fit="cover"
      loading="lazy"
    />
  </div>
</template>

<style lang="scss" scoped>
.media {
  padding: 0px;
}
</style>
