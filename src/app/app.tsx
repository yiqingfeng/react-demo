import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import Headers from './header';

function App() {
    return (
        <Router>
            <Headers></Headers>
            <Switch>
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