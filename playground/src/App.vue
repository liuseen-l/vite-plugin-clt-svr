<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
function add() {
  import.meta.hot?.send('callback_$1', count.value)
}

import.meta.hot?.on('restart', (v) => {
  count.value = v
})
</script>

<template>
  <div>
    {{ count }}
    <div />
    <button type="button" @click="add">
      click
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
