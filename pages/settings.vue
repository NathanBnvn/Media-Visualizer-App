<script lang="ts" setup>

definePageMeta({
  title: 'Settings'
})

const theme = ref<string>()

const themeSelector = document.getElementsByClassName('settings-theme-selector')

// document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
//   const isDarkMode = await window.darkMode.toggle()
//   document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
// })

// document.getElementById('reset-to-system').addEventListener('click', async () => {
//   await window.darkMode.system()
//   document.getElementById('theme-source').innerHTML = 'System'
// })

function dismiss(){
    const router = useRouter()
    router.go(-1)
}
</script>

<template>
    <UIModal @is-close="dismiss">
        <div class="settings"> 
            <nav class="settings-navigation">
                <UIButton button-type="navigation" button-name="personalisation" path="settings/personalisation"/>
    
            </nav>
            <div class="settings-content">
                <NuxtPage/>
            </div>
        </div>
    </UIModal>
</template>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.settings {
    display: flex;
    height: 100%;

    &-navigation {
        flex-grow: 0;
        flex-shrink: 0;
        height: 100%;
        width: 250px;
        overflow-y: auto;
        background-color: yellow;
    }

    &-content {
        padding: 20px;
    }
}

</style>