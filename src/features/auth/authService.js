import axios from 'axios'
const API_URL = 'https://odd-jade-bream-wrap.cyclic.cloud/api/users'

//crear un usuario
const registrar = async (userData) => {
    const response = await axios.post(API_URL, userData)
    return response.data
}

//hacer login
const login = async (userData) => {
    const response = await axios.post(API_URL + '/login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//hacer logout
const logout = () => {
    localStorage.removeItem('user')
}

//exportamos
const authService = {
    registrar,
    login,
    logout
}

export default authService

