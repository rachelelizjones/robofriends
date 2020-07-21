import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state =  { // This is what changes in an app. The app is the only thing that can change a state
            robots: [], // blank before we pull in the robots from an API
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // Updating state after we fetch users from API 
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))        
    }

    onSearchChange = (event) => { // Need to use this syntax to ensure the 'this' value is according to where it was created
    this.setState({searchfield: event.target.value}) // inorder to change state so searchfield isnt always blank, gets updated    
        
    }
    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }) // filteredRobots can now be used as props instead of {this.state.robots}
        if (!robots.length) { // if robots.length === 0
            return <h1 className="tc">Loading</h1>
        } else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
    
}}
;

export default App;