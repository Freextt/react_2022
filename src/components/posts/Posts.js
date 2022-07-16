import React, {Component} from 'react';
import {ApiServices} from "../../services/api.services";
import Post from "../post/Post";
class Posts extends Component {
    state = {posts: []};
    constructor(props,context) {
        super(props,context);
        this.ApiServices = new ApiServices();
        this.ApiServices.getPosts().then(value => this.setState({posts:value}));
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => <Post key={value.id} value={value}/>)
                }
            </div>
        );
    }
}

export default Posts;