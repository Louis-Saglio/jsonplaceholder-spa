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
            pageNum: 0
        };
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
        const pages = Array.from(Array(~~(this.state.users.length/this.userByPage) + 1).keys());
        const firstUserIndex = (this.state.pageNum) * this.userByPage;
        const secondUserIndex = (this.state.pageNum + 1) * this.userByPage;
        return (
            <div>
                {pages.map(pageNum => <button key={pageNum} onClick={() => this.changePage(pageNum)}>{pageNum+1}</button>)}
                <ul>
                    {this.state.users.slice(firstUserIndex, secondUserIndex).map(user => <li key={user.id}><User name={user.name} id={user.id}/></li>)}
                </ul>
            </div>
        );
    }
}

export default App;
