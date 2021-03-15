import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Demo extends React.Component {
    render() {
        return (
            <div className="p-demo">
                <button onClick={this.handleClick.bind(this)}>
                    Activate Lasers
                </button>
                <Switch>
                    {/* <Route path={match.path}>
                        {match.path}
                    </Route> */}
                </Switch>
            </div>
        )
    }
    handleClick() {
        console.log(this.props);
        // console.log(useRouteMatch());
    }
}

export default Demo;
