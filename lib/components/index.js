

// 07/20/2020 04:20 pm - SSN - [20200720-1620] - [001] - M03 - Configuring a full-stack JavaScript Environment: Client side


import React from 'react';
import ReactDOM from 'react-dom';

// const App = () =>(
//     <h2>Hello React 3</h2>
// )







import { Component } from 'react'

// export default class App extends Component {
class App extends Component {

    state = {
        answer: 42
    };

    asyncFunc = () => {
        return Promise.resolve(1137);
    };


    async componentDidMount() {

        this.setState({
            answer: await this.asyncFunc()
        });

    }


    render() {
        return (

            <h2>Hello React  answer: [{this.state.answer}]  (v03)</h2>
        )
    }
}


export default App


ReactDOM.render(
    <App />, document.getElementById('root')
)