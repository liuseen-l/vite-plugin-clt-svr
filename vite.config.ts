import { defineConfig, PluginOption, HMRPayload } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs/promises'
import path from 'node:path'
interface Options {
  [key: string]: {
    on?: (...argus: any[]) => unknown
    close: () => void
  }
}

const test = (options?: Options): PluginOption => ({
  name: 'vite-plugin-server-handler',
  apply: 'serve',
  configureServer(server) {
    if (options) {
      Object.keys(options).forEach(key => {
        const serverFn = options[key].on
        server.ws.on(key, (...argus) => {
          serverFn(...argus, {
            send: (arg: HMRPayload) => {
              server.ws.send(arg)
            },
          });
        })
      })
    }
  },
})


const server = async (c, d) => {
  const v = await fs.readFile(path.resolve(__dirname, './README.md'), 'utf-8')
  console.log(d.send('z', v));
  // d.server.ws.send('x', 'hhha')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), test({
    d: {
      on: server,
    }
  })],
})
