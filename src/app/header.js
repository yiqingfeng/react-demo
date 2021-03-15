import React from 'react';
import { Link } from 'react-router-dom';

class Headers extends React.Component {
    // constructor(props) {
    //     console.log(props);
    //     super(props);
    // }
    render() {
        const menus = (this.props.urls || []).map((item) => {
            return (
                <li key={item.to}>
                    <Link to={item.to}>{item.name}</Link>
                </li>
            );
        });
        return (
            <header className="g-header">
                <nav>
                    <ul>{menus}</ul>
                </nav>
            </header>
        );
    }
}

export default Headers;
