

//  07/22/2020 09:53 pm - SSN - [20200722-2153] - [001] - Testing context

// https://reactjs.org/docs/context.html

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';


let options_1 = {
    theme: 'light-101',
    Others: 'OthersValue'
};

let options_2 = {
    theme: 'light-102',
    Others: 'OthersValue-2'
};

// const ThemeContext = React.createContext('light');
const ThemeContext = React.createContext(options_1);


export default class App extends Component {

    render() {


        return (

            <Fragment>
                <div>
                    <Button_Context_Text />
                </div>

                <ThemeContext.Provider value={options_1}  >
                    {/* <Toolbar theme="dark" /> */}
                    <Toolbar />
                </ThemeContext.Provider>

                <ThemeContext.Provider value={options_2} >
                    {/* <Toolbar theme="dark" /> */}
                    <Toolbar />
                </ThemeContext.Provider>

                <ThemeContext.Provider  >
                    {/* <Toolbar theme="dark" /> */}
                    <Toolbar />
                </ThemeContext.Provider>

            </Fragment>

        );

    }
}


class Button_Context_Text extends React.Component {

    clickHandler = () => {

        ReactDOM.render(<App2 />, document.getElementById('subOption'));
    }

    render() {

        return (
            <button onClick={this.clickHandler} >Context Demo 2</button>
        );

    }
}

function Toolbar(props) {
    return (
        // <ThemedButton theme={props.theme} />
        <ThemedButton />
    );
}

class ThemedButton extends React.Component {

    // contextType is a property name.
    static contextType = ThemeContext;


    render() {

        console.log(this.context);

        // return <button value={this.props.theme}>{this.props.theme}</button>
        return <button theme={this.context} >{this.context && this.context.theme ? this.context.theme : "Not theme"}</button>
    }
}


