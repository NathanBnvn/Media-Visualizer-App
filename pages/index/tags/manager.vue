<script lang="ts" setup>

definePageMeta({
  title: 'Tag Manager'
})

</script>

<template>
    <div class="manager">
        <SearchBar/>
        <div> 
            <table class="manager-table">
                <tr class="manager-table-header"> 
                    <th>ID</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Is album</th>
                    <th>Type</th>
                    <th>Related tags</th>
                </tr>
            </table>
        </div>
        <NuxtPage></NuxtPage>
    </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.manager {
    height: 100%;
    padding: 35px;

    @media (prefers-color-scheme: dark) {
        color: white;
        background-color: color(dark_primary);
    }

    @media (prefers-color-scheme: light) {
        color: black;
        background-color: color(light_primary);
    }

    &-search {
        margin-bottom: 40px;
        
        &-bar {

        }
    }

    // padding: 10px;

    // &-search {
    //     display: flex;
    //     margin-bottom: 20px;
        
    //     &-form {
    //         display: flex;
    //         margin-right: 10px;
    //         background: blue;
    //     }

    //     &-bar {
    //         width: 450px;
    //         margin-right: 10px;
    //     }
    // }

    // &-table {
    //     border-collapse: collapse;
    //     width: 100%;
    // }
    // th {
    //     border: 1px solid black;
    //     margin: 0;
    // }
}

</style>