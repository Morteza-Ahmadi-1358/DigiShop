import server from '@/config/Config.json'
import axios from 'axios'

export const GET = (url) => {
    return axios.get(`${server.SERVER_ADDRESS}${url}`)
}

export const POST = (url, body) => {
    return axios.post(`${server.SERVER_ADDRESS}${url}`,
        body,
        {
            headers: {'ContentType': 'application/json'}
        }
    )
}