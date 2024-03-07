<template>
    <div class="manager" style="background-color: red; height: 100%; width: 100%;">
        Tag Manager
        <div class="manager-search">
            <form class="manager-search-form">
                <UIInput class="manager-search-bar" 
                id="search" type="text"/>
                <UIInput class="manager-search-button" 
                id="button" type="submit"/>
            </form>
        </div>
        <table class="manager-table">
            <tr class="manager-table-header"> 
                <th>ID</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Is album</th>
                <th>Related tags</th>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.manager {
    padding: 10px;

    &-search {
        margin-bottom: 20px;
        
        &-form {
            display: flex;
            margin-right: 10px;
            background: blue;
        }

        &-bar {
            width: 450px;
            margin-right: 10px;
        }
    }

    &-table {
        border-collapse: collapse;
        width: 100%;
    }
    th {
        border: 1px solid black;
        margin: 0;
    }
}

</style>