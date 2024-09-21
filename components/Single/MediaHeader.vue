<script lang="ts" setup>
const showTags: Boolean = true;

// const buttonContainerProp = defineProps({

// })
</script>

<template>
  <div class="media-header">
    <UIButton
      button-type="button"
      class="media-header-button-add"
      icon-name="ic:round-add"
      @is-clicked="console.log('1')"
    />

    <form method="post" id="media-header-form" enctype="multipart/form-data">
      <label id="media-header-label">
        <UIInput
          id="media-header-label-input"
          multiple
          type="file"
          style="display: none"
        />
        <span>
          <UIButton
            button-type="button"
            icon-name="octicon:upload-16"
            @is-clicked="console.log('2')"
          />
        </span>
      </label>
    </form>

    <UIButton
      button-type="button"
      class="media-header-button"
      icon-name="heroicons:tag-16-solid"
      @is-clicked="console.log('3')"
    />

    <UIButton
      button-type="button"
      class="media-header-button"
      icon-name="mingcute:settings-2-line"
      @is-clicked="console.log('5')"
    />

    <UIButton
      button-type="button"
      class="media-header-button"
      icon-name="charm:search"
      @is-clicked="console.log('6')"
    />

    <UIButton
      button-type="button"
      class="media-header-button"
      icon-name="ri:more-fill"
      @is-clicked="console.log('7')"
    />
  </div>
</template>

<style lang="scss" scoped>
.media-header {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  height: 35px;
  margin-left: auto;
  padding: 5px 0px;
  z-index: 112;

  &-button:last-child {
    margin-right: 5px;
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    height: 1px;
    background-color: black;
    width: 100vw;
    bottom: 0px;
  }

  &-modal {
    position: fixed;
  }
}
</style>
