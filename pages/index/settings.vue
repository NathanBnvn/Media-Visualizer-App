<template>
    <div class="settings">
        <div class="settings-container" @focusout="dismiss" tabindex="0">
            <nav></nav>
            <div>
                <NuxtPage></NuxtPage>
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
        </div>
    </div>
</template>

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
    console.log(1)
    const router = useRouter()
    router.go(-1)
}
</script>

<style lang="scss" scoped>
@import './assets/scss/tools.scss';

.settings {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1px; left: 1px;
    height: 100vh;
    width: 100vw;
    z-index: 10000;

    @media (prefers-color-scheme: dark) {
        background-color: color(dark_tertiary, 0.8);
    }

    @media (prefers-color-scheme: light) {
        background-color: color(light_tertiary, 0.8);
    }

    &-container {
        position: relative;
        max-height: 715px;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 0px;
        width: 1150px;
        max-width: calc(-100px + 100vw);
        height: calc(-100px + 100vh);
        opacity: 1;

        @media (prefers-color-scheme: dark) {
            color: white;
            //background-color: color(dark_primary);
            background-color: darkorange;
        }

        @media (prefers-color-scheme: light) {
            color: black;
            //background-color: color(light_primary);
            background-color: orangered;

        }
    }
}

</style>