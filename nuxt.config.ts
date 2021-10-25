import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    nitro: {
        preset: 'azure',
        timing: true
    },
    privateRuntimeConfig: {
        redisURL: 'http://localhost:6379',
        token: process.env.MAGIC_TOKEN,
        signedURL: process.env.SIGNED_URL
    },
    publicRuntimeConfig: {
        enableMiddleware: process.env.ENABLE_MIDDLEWARE,
        publicInfo: 'hey there, reading my source'
    }
})
