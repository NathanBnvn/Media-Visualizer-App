<template>
    <article class="informations">
        <UIButton class="informations-close-button" buttonType="button" iconName="mi:close" @is-clicked="closeInformations"/>
        <form class="informations-form">
        <div class="informations-content">
            <div> 
                <UIInput class="informations-input" 
                input-id="name" type="text" 
                :has-label="true"/>
                <div class="informations-category">
                    <UIInput class="informations-input informations-type" 
                    input-id="type" type="text" 
                    :has-label="true"/>
                    <UIInput class="informations-input informations-extension" 
                    input-id="extension" type="text" 
                    :has-label="true"/>
                </div>
                <div class="informations-category">
                    <UIInput class="informations-input informations-created" 
                    input-id="created" type="text" 
                    :has-label="true"/>
                    <UIInput class="informations-input informations-modified" 
                    input-id="modified" type="text" 
                    :has-label="true"/>
                </div>
                <UIInput class="informations-input" input-id="path" type="text" 
                :has-label="true"/>
            </div>
            <hr>
            <div class="informations-add">
                <UIButton class="informations-add-button" 
                buttonType="bar" 
                iconName="gala:add" 
                buttonName="Add a tag"/>
                <div class="informations-add-divider"/>
            </div>
            <hr>
            <UIInput :isComment="true" id="comments" 
            :has-label="true"/>
        </div>
        <div class="informations-bottom">
            <input class="tag-button-submit" type="submit" value="Submit">
        </div>
        </form>
    </article>
</template>

<script lang="ts" setup>

    function closeInformations(): void {
        const informations = document.getElementsByClassName('informations')[0] as HTMLInputElement | null
        const informationsForm = document.getElementsByClassName('informations-form')[0] as HTMLInputElement | null
        const informationsCloseButton = document.getElementsByClassName('informations-close-button')[0] as HTMLElement | null
        let informationsIsClosed: boolean = false
        
        if (informations != null && informationsForm != null && informationsCloseButton != null) {
            if (informationsIsClosed) {
                informations.style.width = "250px"
                informationsForm.style.display = "flex"
                informationsCloseButton.style.display = "flex"
                informationsIsClosed = false
            } else {
                informations.style.width = "0px"
                informationsForm.style.display = "none"
                informationsCloseButton.style.display = "none"
                informationsIsClosed = true
            }
        }
    }

</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.informations {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 250px;
    flex-grow: 0;
    flex-shrink: 0;
    box-shadow: rgba(0, 0, 0, 0.025) -1px 0px 0px 0px inset;
    transition: 0.1s ease-in-out;

    @media (prefers-color-scheme: dark) {
        background-color: color(dark_secondary);
        color: color(dark_unselectedTypography);
    }

    @media (prefers-color-scheme: light) {
        background-color: color(light_secondary);
        color: color(light_unselectedTypography);
    }
    
    &-close-button {
        position: absolute;
        top: 5px; left: 2px;
        margin-bottom: 10px;
    }
    
    &-content {
        padding: 15px;
    }

    &-input {
        @media (prefers-color-scheme: dark) {
            background-color: color(dark_tertiary);
        }
        
        @media (prefers-color-scheme: light) {
            background-color: color(light_tertiary);
        }
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
        background-color: aquamarine;
        height: 80px;
        width: 100%;
    }
}
</style>