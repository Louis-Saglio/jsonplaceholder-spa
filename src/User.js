import React, {Component} from 'react';
import Post from './Post'

class User extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    async onClick() {
        if (this.state.posts.length === 0) {
            this.setState({
                posts: await (await fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}/posts`)).json()
        })
        } else {
            this.setState({posts: []})
        }
    }

    render() {
        return (
            <div>
                <p onClick={() => this.onClick()}>{this.props.name}</p>
                <ul>
                    {this.state.posts.map(post => <li><Post title={post.title} id={post.id} body={post.body}/></li>)}
                </ul>
            </div>
        );
    }
}

export default User;
