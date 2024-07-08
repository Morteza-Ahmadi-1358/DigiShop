import server from '@/config/Config.json'

export const GET = (url) => {
    return fetch(`${server.SERVER_ADDRESS}${url}`)
}