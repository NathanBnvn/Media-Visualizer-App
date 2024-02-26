<template>
    <div class="tag-bar">
        <UIButton class="tag-bar-close-button" buttonType="button" iconName="mi:close" @is-clicked="closeTagBar"/>
        <form>
        <div class="tag-bar-content">
            <div> 
                <UIInput id="name" type="text"/>
                <div class="tag-bar-category">
                    <UIInput class="tag-bar-type" id="type" type="text"/>
                    <UIInput class="tag-bar-extension" id="extension" type="text"/>
                </div>
                <div class="tag-bar-category">
                    <UIInput class="tag-bar-created" id="created" type="text"/>
                    <UIInput class="tag-bar-modified" id="modified" type="text"/>
                </div>
                <UIInput id="path" type="text"/>
            </div>
            <hr>
            <div class="tag-bar-add">
                <UIButton class="tag-bar-add-button" 
                buttonType="bar" 
                iconName="gala:add" 
                buttonName="Add a tag"/>
                <div class="tag-bar-add-divider"/>
            </div>
            <hr>
            <UIInput :isComment="true" id="comments"/>
        </div>
        <div class="tag-bar-bottom">
            <input class="tag-button-submit" type="submit" value="Submit">
        </div>
        </form>
    </div>
</template>

<script lang="ts" setup>

    function closeTagBar(): void {
        const tagBar = document.getElementsByClassName('tag-bar')[0] as HTMLInputElement | null
        
        if (tagBar != null) {
            if (tagBar.style.width == "250px") {
                tagBar.style.width = "0px"
            } else {
                tagBar.style.width = "250px"
            }
        }
    }

</script>

<style lang="scss" scoped>
.tag-bar {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    box-shadow: rgba(0, 0, 0, 0.025) -1px 0px 0px 0px inset;
    background-color: rebeccapurple;
    transition: 0.5s;

    &-close-button {
        position: absolute;
        top: 5px; left: 2px;
    }

    &-content {
        margin-top: 20px;
    }

    &-type, &-created {
        margin-right: 5px;
    }

    &-extension, &-modified {
        margin-left: 5px;
    }

    &-add {
        display: flex;
        margin: 15px 0;

        &-button {
            white-space: nowrap;
        }

        &-divider {
            width: 100%;
            border-bottom: 1px solid white;
            margin: 10px 0 10px 10px;
            
        }
    }

    &-category {
        display: flex;
        justify-content: space-evenly;
    }

    &-bottom {
        position: absolute;
        bottom: 0; left: 0;
        display: flex; 
        align-content: center; 
        justify-content: center;
        padding: 5px;
        background-color: aquamarine;
        height: 80px;
        width: 100%;
    }
}
</style>