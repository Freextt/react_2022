import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.value = this.props.value;
    }

    render() {
        return (
            <div>
                <div>{this.value.userId}</div>
                <div>{this.value.id}</div>
                <div>{this.value.title}</div>
                <div>{this.value.body}</div>
            </div>
        );
    }
}

export default Post;