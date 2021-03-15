import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Headers from './header';
import NoFound from './nofound';
import Demo from '@/pages/demo';
import logo from '@/assets/images/logo.svg';
import './app.scss';

function Home(props) {
    return (
        <div className="app">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function Users(props) {
    console.log('Users=>', props);
    return <h2>Users</h2>;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                {
                    name: 'Home',
                    to: '/home',
                },
                {
                    name: 'Demo',
                    to: '/demo',
                },
                {
                    name: 'Users',
                    to: '/users',
                },
                {
                    name: '404',
                    to: '/nofound',
                },
            ],
        };
    }
    render() {
        return (
            <Router>
                <Headers urls={this.state.routes}></Headers>
                {/* Switch 通过遍历子 Route，并配置第一个 url */}
                <Switch>
                    <Route path="/users">
                        <Users></Users>
                    </Route>
                    <Route path="/demo">
                        <Demo></Demo>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Router path="/">
                        <NoFound></NoFound>
                    </Router>
                </Switch>
            </Router>
        );
    }
}

export default App;
