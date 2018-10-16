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
        return (
            <div>
                {Array.from(Array(~~(this.state.users.length/this.userByPage) + 1).keys()).map(pageNum => <button key={pageNum} onClick={() => this.changePage(pageNum)}>{pageNum+1}</button>)}
                <ul>
                    {this.state.users.slice((this.state.pageNum) * this.userByPage, (this.state.pageNum + 1) * this.userByPage).map(user => <li key={user.id}><User name={user.name} id={user.id}/></li>)}
                </ul>
            </div>
        );
    }
}

export default App;
