<template>
  <div class="main">
    <NavigationBar/>
    <div class="main-content">
      <Header/>
      <NuxtLink to="/home">XO</NuxtLink>
      <NuxtChild></NuxtChild>
    </div>
    <TagBar/>
  </div>
</template>

<script lang="ts" setup>

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
    flex-grow: 1;
    overflow: hidden;
  }
}
</style>
