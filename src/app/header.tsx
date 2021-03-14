/**
 * @description 公共头部
 */
import { Link } from 'react-router-dom'

function Headers() {
    const links = [
        {
            name: 'Home',
            to: '/',
        },
        {
            name: 'Import',
            to: '/import',
        },
        {
            name: 'Test',
            to: '/test',
        },
    ].map((item) => (
        <li key={item.to}>
            <Link to={item.to}>{item.name}</Link>
        </li>
    ))
    return (
        <header className="g-header">
            <nav>
                <ul>{links}</ul>
            </nav>
        </header>
    )
}

export default Headers
