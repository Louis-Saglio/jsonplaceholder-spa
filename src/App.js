import React, {Component} from 'react';
import User from "./User";


async function getUsers() {
    return (await fetch("https://jsonplaceholder.typicode.com/users")).json()
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        this.setState({
            users: await getUsers()
        })
    }

    render() {
        return (
            <ul className="App">
                {this.state.users.map(user => <li><User name={user.name} id={user.id}/></li>)}
            </ul>
        );
    }
}

export default App;
