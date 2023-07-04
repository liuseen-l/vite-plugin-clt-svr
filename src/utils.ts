/// <reference types="vite/client" />

export const on: Required<ImportMeta>['hot']['on'] = (event, cb) => {
  import.meta.hot?.on(event, cb)
}
export const send: Required<ImportMeta>['hot']['send'] = (event, cb) => {
  import.meta.hot?.send(event, cb)
}
