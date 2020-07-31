
// 07/23/2020 12:03 pm - SSN - [20200723-1147] - [003] - M05-P05 - Higher order components

import React from 'react';
import PropTypes from 'prop-types';


// 07/23/2020 02:36 pm - SSN - [20200723-1412] - [003] - M05-P06 - Mapping extra props

// const storeProvider = (Componentx) => {
const storeProvider = (extraProps) => (Componentx) => {


    // 07/23/2020 01:56 pm - SSN - [20200723-1147] - [004] - M05-P05 - Higher order components

    //    return class extends React.Component {
    return class extends React.PureComponent {

        static displayName = `${Componentx.name}_HOC_Container`;

        static contextTypes = {
            store: PropTypes.object
        };


        // 07/31/2020 05:19 am - SSN - [20200731-0322] - [001] - M06-P05 - Subscribing to state from child component

        onStoreChange = () => {
            this.forceUpdate();
        }

        componentDidMount() {
            this.subscriptionId = this.context.store.subscribe(this.onStoreChange);

        }

        componentWillUnmount() {

            this.context.store.unsubscribe(this.subscriptionId);
        }



        render() {

            // 07/23/2020 02:38 pm - SSN - [20200723-1412] - [004] - M05-P06 - Mapping extra props

            // return <Componentx {...this.props} store={this.context.store} />;
            return <Componentx
                {...this.props}
                {...extraProps(this.context.store, this.props)}
                store={this.context.store}
            />;
        }
    };


};

export default storeProvider;