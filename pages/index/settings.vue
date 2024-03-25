<script lang="ts" setup>

definePageMeta({
  title: 'Settings'
})

const theme=ref<string>()

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
        
        <nav></nav>
        <div>
            Settings
            
            <div>account</div>
            <div>link account</div>
            <span> Selected: {{ theme }}</span>
            <select class="settings-theme-selector" v-model="theme">
                <option>Dark mode</option>
                <option>Light mode</option>
                <option>System mode</option>
            </select>
        </div>
    </UIModal>
</template>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

</style>