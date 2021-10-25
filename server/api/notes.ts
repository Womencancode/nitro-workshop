import { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'
import { storage } from '#storage'

interface Item {
    id: string
    title: string
    text: string
}
export default async (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method

    switch (method) {
        case 'GET': {
            const keys = await storage.getKeys('/notes')
            const items = await Promise.all(keys.map(key => storage.getItem(key)))
            return items
        }
        case 'POST': {
            const item = await useBody<Item>(req)
            storage.setItem(`/notes/${item.id}`, item)
            res.statusCode = 204
            return res.end()
        }
    }

    return []
}