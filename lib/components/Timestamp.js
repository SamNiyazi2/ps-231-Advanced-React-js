
// 07/24/2020 03:35 am - SSN - [20200724-0335] - [001] - M06-P04 - Passing state to child components


import React, { Component } from 'react';

export default class Timestamp extends Component {

    render() {
        return (
            <div>
                Date: {this.props.timestamp.toLocaleTimeString()}
            </div>
        );
    }
}
