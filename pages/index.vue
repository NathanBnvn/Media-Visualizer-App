<template>
  <div class="main">
    <NavigationBar/>
    <div class="main-content">
      <Header/>
      <div class="main-content-area">
        
        <UIPicture :title="'pic 1'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 2'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 3'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 4'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 5'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 6'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 7'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 8'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 9'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 10'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        <UIPicture :title="'pic 11'" :source="'/v-srinivasan-gVWE1OBE_Z0-unsplash.jpg'"/>
        
      </div>
    </div>
    <!--
      <NuxtChild/>
      <TagBar/>
    -->
  </div>
</template>

<script lang="ts">

</script>


<style lang="scss" scoped>
.main {
  display: flex;
  position: absolute;
  background-color: black;
  font-family: Montserrat;
  font-size: 14px;
  top: 0; left: 0;
  height: 100vh;
  width: 100vw;
  
  &-content {
    overflow: hidden;

    &-area {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
      overflow-x: hidden;
      overflow-y: scroll;
      height: 95vh;
    }
  }
}
</style>
