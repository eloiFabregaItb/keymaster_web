// https://nuxt.com/docs/api/configuration/nuxt-config

import { api_ip } from "./constants"
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-socket-io', 'nuxt-svgo'],
  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'play',
        url: `${api_ip}`,
        default: true,
        vuex: { /* see section below */ },
        namespaces: { /* see section below */ }
      },
    ]
  },
  ssr: false
})

export const state = () => ({})