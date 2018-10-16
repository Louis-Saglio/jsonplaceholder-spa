import React, {Component} from 'react';
import PostDetails from './PostDetails'

class Post extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        }
    }

    collapse() {
        this.setState((prevState) => {
            return {collapsed: !prevState.collapsed}
        })
    }

    render() {
        let details = null
        if (!this.state.collapsed) {
            details = <PostDetails id={this.props.id} body={this.props.body}/>
        }
        return (
            <div>
                <p onClick={() => this.collapse()}>{this.props.title}</p>
                {details}
            </div>
        );
    }
}

export default Post;
