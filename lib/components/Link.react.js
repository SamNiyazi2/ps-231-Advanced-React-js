
// 08/01/2020 10:01 pm - SSN - [20200801-2201] - [001] - Jest - Documenation training

// https://jestjs.io/docs/en/tutorial-react

import React from 'react';

const STATUS = {

    HOVERED: 'hovered',
    NORMAL: 'normal'
};



export default class Link extends React.Component {

    constructor(props) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {

            class: STATUS.NORMAL
        };

    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL });
    }


    render() {
        return (

            <a className={this.state.class}
                href={this.props.page || '#'} 
                target="_blank"
                rel='noreferrer' 
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}
