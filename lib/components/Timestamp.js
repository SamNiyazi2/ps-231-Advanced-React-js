
// 07/24/2020 03:35 am - SSN - [20200724-0335] - [001] - M06-P04 - Passing state to child components


import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {

    render() {
        return (
            <div>
                Date: {this.props.timestamp.toLocaleTimeString()}
            </div>
        );
    }
}

function extraProps(store, originalProps) {
    return {
        timestamp: store.getState(extraProps).timestamp
    };
}

export default storeProvider(extraProps)(Timestamp);
