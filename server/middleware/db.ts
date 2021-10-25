import redisDriver from 'unstorage/drivers/redis'
import { storage } from '#storage'
import config from '#config'

import { assets } from '#assets'

storage.mount('meta', redisDriver({
    base: '',
    url: config.redisURL,
}))

export default async (req, res, next) => {
    console.log(await assets.getKeys())
    console.log(req.url)
}