import React, {Component} from 'react';
import Comment from './Comment'

class PostDetails extends Component {

    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    async onClick() {
        if (this.state.comments.length === 0) {
            this.setState({
                comments: await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`)).json()
            })
        } else {
            this.setState({
                comments: []
            })
        }
    }

    render() {
        return (
            <ul>
                <li>{this.props.id}</li>
                <li>
                    <span onClick={() => this.onClick()}>{this.props.body}</span>
                    <ul>{this.state.comments.map(comment => <li><Comment name={comment.name}/></li>)}</ul>
                </li>
            </ul>
        );
    }
}

export default PostDetails;