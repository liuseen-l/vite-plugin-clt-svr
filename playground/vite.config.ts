import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import clr from '../src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), clr({
    callback_$1: (count, option) => {
      if (count === 10)
        return option.send('restart', 0)
      option.send('restart', count + 1)
    },
  })],
})
