<template>
    <div style="background-color: yellow; height: 100%; width: 100%;">
        Settings
        <span> Selected: {{ theme }}</span>
        <select v-model="theme">
            <option>Dark mode</option>
            <option>Light mode</option>
            <option>System mode</option>
        </select>
    </div>
</template>

<script lang="ts" setup>

const theme=ref<string>()

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