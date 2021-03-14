import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import './app.scss'
import Headers from './header'

import Test from '../pages/test'
import Import from '../pages/import'

function App() {
    return (
        <Router>
            <Headers></Headers>
            <Switch>
                <Route path="/test">
                    <Test></Test>
                </Route>
                <Route path="/import">
                    <Import />
                </Route>
                <Route path="/">
                    <div className="App">
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
                </Route>
            </Switch>
        </Router>
    )
}

export default App
