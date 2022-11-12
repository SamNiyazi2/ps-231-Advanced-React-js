
// 07/24/2020 03:35 am - SSN - [20200724-0335] - [001] - M06-P04 - Passing state to child components


import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {


    formatDateTime = (input) =>( !input.toLocaleTimeString ? '' : input.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));


    // 07/31/2020 06:33 am - SSN - [20200731-0556] - [006] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate
    shouldComponentUpdate(nextProps, nextState) {

        const currentTimeDisplay = this.formatDateTime(this.props.timestamp);
        const nextTimeDisplay = this.formatDateTime(nextProps.timestamp);

        return currentTimeDisplay !== nextTimeDisplay;

    }


    // 07/31/2020 06:18 am - SSN - [20200731-0556] - [004] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate
    componentWillUpdate(nextProps, nextState) {
        console.log('ssn-20200731-0619-a - Updating TimeStamp');
    }


    render() {
        return (
            <div>
                {/* // 07/31/2020 06:15 am - SSN - [20200731-0556] - [003] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate
                Date: {this.props.timestamp.toLocaleTimeString()} */}
                Date: { this.formatDateTime(this.props.timestamp)}
                {/* Date: {this.props.timestamp}*/}
            </div>
        );
    }
}

function extraProps(store, originalProps) {
    return {
        // 07/31/2020 06:27 am - SSN - [20200731-0556] - [005] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate
        timestamp: store.getState(extraProps).timestamp
        //timestamp: store.getState(extraProps).timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
}

export default storeProvider(extraProps)(Timestamp);
