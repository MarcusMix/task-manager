import axios from 'axios'

const api = axios.create({
    baseURL: "https://fsc-taskmanager-api.up.railway.app",
})

export default api