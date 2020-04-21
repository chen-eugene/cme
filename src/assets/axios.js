import axios from 'axios'
// import toast from '../components/niu-toast/index'

const instance = axios.create({
    baseURL: '/',
})
instance.interceptors.response.use((response) => {
    if (response.data.code === 200) {
        return response.data
    } else {
        return response
    }
}, (error) => {
    // toast('网络异常，请稍后再试！')
    return Promise.reject(error)
});

export default instance
