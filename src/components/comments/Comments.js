import React, {Component} from 'react';
import {ApiServices} from "../../services/api.services";
import Comment from "../comment/Comment";

class Comments extends Component {
    state ={comments: []};
    constructor(props,context) {
        super(props,context);
        this.ApiServices = new ApiServices();
        this.ApiServices.getComments().then(value => this.setState({comments:value}));
    }
    render() {
        return (
            <div>
                {
                    this.state.comments.map(value => <Comment key={value.id} value={value}/>)
                }
            </div>
        );
    }
}

export default Comments;