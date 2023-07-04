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


```typescript
import clrSvr from "vite-plugin-clr-svr";

export default defineConfig({
  plugins: [
    clrSvr({
      callback_$1:(count, option ) => {
         if(count === 10) {
            option.send(0)
         }
      },
      callback_$2:(...) => {...},
    }),
  ]
});
```

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
function add() {
  import.meta.hot?.send('callback_$1', count.value)
}

import.meta.hot?.on('restart', () => {
  count.value = 0
})
</script>

<template>
  <div>
    {{ count }}<div />
    <button type="button" @click="add">
      click
    </button>
  </div>
</template>
```

## 📄 License

[MIT License](https://github.com/vite-plugins/vite-plugin-clt-svr/blob/main/LICENSE) © 2019-PRESENT [LiuSeen](https://github.com/liuseen-l)
