# vite-plugin-clr-svr

[![Test Status](https://img.shields.io/github/actions/workflow/status/Menci/vite-plugin-wasm/test.yaml?branch=main&style=flat-square)](https://github.com/Menci/vite-plugin-wasm/actions?query=workflow%3ATest)
[![npm](https://img.shields.io/npm/v/vite-plugin-wasm?style=flat-square)](https://www.npmjs.com/package/vite-plugin-wasm)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/Menci/vite-plugin-wasm?style=flat-square)](LICENSE)

Allow local `server` to communicate with `client`.

## 📦 Install

Now this plugin supports both Vite 2.x and 3.x. Just install it:

```bash
pnpm add -D vite-plugin-clr-svr
```

## 🦄 Usage

Let's use a VUE project as an example

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import clrSvr from "vite-plugin-clr-svr";

export default defineConfig({
  plugins: [vue(), clr({
    callback_$1: (count, option) => {
      if (count === 10)
        return option.send('restart', 0)
      option.send('restart', count + 1)
    },
  })],
})
```

At Vue file

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { on, send } from 'vite-plugin-clr-svr'

const count = ref(0)
function add() {
  send('callback_$1', count.value)
}

on('restart', (v) => {
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
```

## 📄 License

[MIT License](https://github.com/vite-plugins/vite-plugin-clt-svr/blob/main/LICENSE) © 2019-PRESENT [LiuSeen](https://github.com/liuseen-l)
