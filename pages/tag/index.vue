<script lang="ts" setup></script>

<template>
  <div class="tag">
    <table>
      <tr>
        <th>Tag</th>
        <th>Type</th>
        <th>Level</th>
        <th>Status</th>
      </tr>
      <tr>
        <td><NuxtLink href="tag/jtest">Johnny Test</NuxtLink></td>
        <td>
          <form>
            <select>
              <option value="object">Object</option>
              <option value="living being">Living being</option>
              <option value="location">Location</option>
              <option value="event">Event</option>
              <option value="entity">Entity</option>
            </select>
          </form>
        </td>
        <td>
          <select>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
          </select>
        </td>
        <td>
          <select>
            <option value="public">Public</option>
            <option value="semi-private">Semi-private</option>
            <option value="private">Private</option>
            <option value="private">Protected</option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.tag {
  padding-top: 20px;
}
table,
th,
td {
  border: 1px solid darkgray;
  padding: 5px;
  color: white;
  border-collapse: collapse;
}

table {
  margin: auto;
  width: 80%;
}
</style>
