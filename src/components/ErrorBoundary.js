// Wrap the cardlist in an errorboundary so if it fails, the boundary catches it rather than showing big ugly error page
import React, { Component } from 'react'
import { render } from 'react-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    } 
    
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    } // if this ever gets triggered, the h1 tag will be rendered

    render() {
        if (this.state.hasError) {
            return <h1 className="tc">Ooops. We fudged up</h1>
        }
        return this.props.children
    }

}
export default ErrorBoundary