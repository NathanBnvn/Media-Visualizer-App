<template>
    <div style="background-color: yellow; height: 100%; width: 100%;">
        Profil
        <form>
            <UIInput id="" list="themes"/>
            <datalist id="themes">
                <option value="Dark mode"/>
                <option value="Light mode"/>
                <option value="System mode"/>
            </datalist>
            <UIInput id="select-mode" type="submit"/>
        </form>
    </div>
</template>

<script lang="ts" setup>

// document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
//   const isDarkMode = await window.darkMode.toggle()
//   document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
// })

// document.getElementById('reset-to-system').addEventListener('click', async () => {
//   await window.darkMode.system()
//   document.getElementById('theme-source').innerHTML = 'System'
// })
</script>

<style lang="scss" scoped>

</style>