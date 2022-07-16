const baseUrl = 'https://jsonplaceholder.typicode.com/';
export class ApiServices {
    getComments(){
        return fetch(baseUrl +'comments').then(value => value.json());
    }
    getPosts(){
        return fetch(baseUrl + 'posts').then(value => value.json());
    }
}