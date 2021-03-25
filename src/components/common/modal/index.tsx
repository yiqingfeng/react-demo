import React from 'react'
import ReactDOM from 'react-dom'
import * as dom from '@utils/dom'

interface Modal extends React.Component {
    el: Element;
    $container: Element;
}


// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
    constructor(props: any) {
        super(props)
        // Create a div that we'll render the modal into. Because each
        // Modal component has its own element, we can render multiple
        // modal components into the modal container.
        this.el = document.createElement('div')
        // 设置 modal 根DOM
        this.$container = dom.getIdDom('g-modal-root')
    }

    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        this.$container.appendChild(this.el)
    }

    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        this.$container.removeChild(this.el)
    }

    render() {
        // Use a portal to render the children into the element
        return ReactDOM.createPortal(
            // Any valid React child: JSX, strings, arrays, etc.
            this.props.children,
            // A DOM element
            this.el
        )
    }
}

export default Modal
