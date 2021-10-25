import redisDriver from 'unstorage/drivers/redis'
import { storage } from '#storage'
import config from '#config'

storage.mount('meta', redisDriver({
    base: '',
    url: config.redisURL,
}))

export default (req, res, next) => {
    console.log(req.url)
    next()
}

// server
// server/api
// server/api/notes
// pages/
// pages/index.html