<script lang="ts">
</script>

<template>
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
</template>

<style lang="scss" scoped>
</style>