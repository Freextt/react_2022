import axios from "axios";

let  axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
const getUsers = () => axiosInstance('users').then(value => value);
const getUserPosts = (id) => axiosInstance('users/' + id + '/posts');
export {getUserPosts,getUsers};