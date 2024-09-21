<script lang="ts" setup></script>

<template>
  <div class="search-bar">
    <form class="search-bar-form">
      <UIInput class="search-bar-field" id="search" type="text" />
      <UIInput class="search-bar-button" id="button" type="submit" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  height: 60px;

  &-form {
    display: flex;
  }
  &-field {
    width: 100%;
    height: 60px;
  }

  &-button {
    margin-left: 10px;
    width: 60px;
    height: 60px;

    background-image: url(ph:magnifying-glass-bold); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat; /* make the background image appear only once */
    background-position: 0px 0px;
  }
}
</style>
