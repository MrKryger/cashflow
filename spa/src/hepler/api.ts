import axios from "axios";

const hostname = 'http://0.0.0.0:8000'
const headers = {
        'Content-Type': 'application/json',
    }

export default {
    get: async (method:string) => {
        const config = {
            mode: 'no-corse',
            headers,
        }
        const data = await axios.get(`${hostname}/${method}`, config)
        return data?.data?.data || null
    },

    post: async (method:string, body:any) => {
        const config = {
            mode: 'no-corse',
            headers,
            body
        }
        const data = await axios.post(`${hostname}/${method}`, config)
        return data?.data?.data || null
    }
}


