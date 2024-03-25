<script lang="ts" setup>

const router = useRouter()

var breadcrumb = {}

console.log(router.currentRoute.value.fullPath)
console.log(router.currentRoute.value.meta.title)

</script>

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


<style lang="scss" scoped>

.breadcrumb {
    & ul {
        list-style: none;
    }
    
    & li {
      display: inline;
      font-size: small;
    }
    
    & li+li:before {
        content: "/\00a0";
        padding: 0px 2px;
        color: grey;
    }
}

</style>