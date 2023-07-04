import type { HMRPayload, PluginOption } from 'vite'

interface Options {
  [key: string]: (...argus: any[]) => unknown
}

export default (options?: Options): PluginOption => {
  return {
    name: 'vite-plugin-server-handler',
    apply: 'serve',
    configureServer(server) {
      if (options) {
        Object.keys(options).forEach((key) => {
          const serverFn = options[key]
          if (serverFn) {
            server.ws.on(key, (msg: any) => {
              serverFn(msg, {
                send: (eventName: string, arg: HMRPayload) => {
                  server.ws.send(eventName, arg)
                },
              })
            })
          }
        })
      }
    },
  }
}

export * from './utils'
