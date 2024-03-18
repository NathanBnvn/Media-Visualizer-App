<template>
    <div class="breadcrumb">
        <ul>
        <li>
            <NuxtLink href="">
                Plus
            </NuxtLink>
        </li>
        <li>
            <NuxtLink href="">
                Ultra
            </NuxtLink>
        </li>
    </ul>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.breadcrumb {
    & ul {
        list-style: none;
    }
    
    & li {
      display: inline;
      font-size: small;
    }
    
    /* Add a slash symbol (/) before/behind each list item */
    & li+li:before {
        content: "/\00a0";
        padding: 0px 2px;
        color: grey;
    }
}

</style>