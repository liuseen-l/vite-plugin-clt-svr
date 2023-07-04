import type { PluginOption, HMRPayload } from 'vite'
interface Options {
  [key: string]: {
    on?: (...argus: any[]) => unknown
    close?: () => void
  }
}

export default (options?: Options): PluginOption => {
  return {
    name: 'vite-plugin-server-handler',
    apply: 'serve',
    configureServer(server) {
      if (options) {
        Object.keys(options).forEach(key => {
          const serverFn = options[key].on
          if (serverFn) {
            server.ws.on(key, (...argus) => {
              serverFn(...argus, {
                send: (arg: HMRPayload) => {
                  server.ws.send(arg)
                },
              });
            })
          }
        })
      }
    },
  }
}
