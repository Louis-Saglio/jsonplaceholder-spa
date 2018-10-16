import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <span>{this.props.name}</span>
        );
    }
}

export default Comment;