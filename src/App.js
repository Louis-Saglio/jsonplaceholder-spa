import React, {Component} from 'react';
import User from "./User";


async function getUsers() {
    return (await fetch("https://jsonplaceholder.typicode.com/users")).json()
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            pageNum: 1
        };
        this.pages = [1, 2, 3];
        this.userByPage = 4
    }

    async componentDidMount() {
        this.setState({
            users: await getUsers()
        })
    }

    changePage(pageNum) {
        this.setState({pageNum})
    }

    render() {
        return (
            <div>
                {this.pages.map(pageNum => <button onClick={() => this.changePage(pageNum)}>{pageNum}</button>)}
                <ul>
                    {this.state.users.slice((this.state.pageNum - 1) * this.userByPage, (this.state.pageNum) * this.userByPage).map(user => <li><User name={user.name} id={user.id}/></li>)}
                </ul>
            </div>
        );
    }
}

export default App;
