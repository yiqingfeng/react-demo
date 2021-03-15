import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // jest-dom adds custom jest matchers for asserting on DOM nodes.
import App from '../App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
