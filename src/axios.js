import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-mern-backend-project.herokuapp.com/',

})

export default instance