
// 08/02/2020 12:22 am - SSN - [20200802-0018] - [001] - Jest - React testing libray

// https://jestjs.io/docs/en/tutorial-react#react-testing-library

import React, { Fragment } from 'react';

export default class CheckboxWithLabel extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isChecked: false,
            labelID: 'labelIDNotSet_20200802_0205'
        };

        // Bind manually because React class component don't auto-bind
        // https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
        this.onChange = this.onChange.bind(this);

    }


    onChange() {

        this.setState({ isChecked: !this.state.isChecked });
    }


    render() {

        return (



            <label id={this.state.labelID}   aria-label="For check box">
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}

                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                    aria-labelledby={this.state.labelID} 
                />

            </label>


        );

    }
}