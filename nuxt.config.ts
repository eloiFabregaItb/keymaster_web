// https://nuxt.com/docs/api/configuration/nuxt-config

import { api_ip } from "./constants"
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-socket-io'],
  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'play',
        url: `http://${api_ip}:3000`,
        default: true,
        vuex: { /* see section below */ },
        namespaces: { /* see section below */ }
      }, 
    ]
  },
  ssr: false
})

export const state = () => ({})