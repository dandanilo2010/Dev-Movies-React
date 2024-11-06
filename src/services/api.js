import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'f7fea45daf498a55197ac9281223a061',
        language: 'pt-BR',
        page: 1
    }
})





export default api