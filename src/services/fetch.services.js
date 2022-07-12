const baseUrl = "https://jsonplaceholder.typicode.com/";
export const fetchServices = {
    getTodos:() => fetch(baseUrl + 'todos').then(value => value.json()),
    getAlbums:() => fetch(baseUrl + 'albums').then(value => value.json()),
    getComments:() => fetch(baseUrl + 'comments').then(value => value.json()),
    getPosts:(id) => fetch(`${baseUrl}comments/${id}/posts`).then(value => value.json())
}