<template>
    <div class="manager" style="background-color: red; height: 100%; width: 100%;">
        Tag Manager
        <div class="manager-search">
            <form action="">
                <UIInput class="manager-search-bar" 
                id="search" type="text"/>
                <UIInput class="manager-search-button" 
                id="button" type="submit"/>
            </form>
        </div>
        <div class="manager-table">
            <div class="manager-table-header"> 
                <div>Name</div>
                <div>Is primary</div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.manager {
    padding: 10px;

    &-search {
        display: flex;
        margin-bottom: 20px;
    }

    &-table {
    }
}

</style>