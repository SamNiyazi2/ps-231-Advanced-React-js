
// 07/23/2020 12:03 pm - SSN - [20200723-1147] - [003] - M05-P05 - Higher order components

import React from 'react';
import PropTypes from 'prop-types';


// 07/23/2020 02:36 pm - SSN - [20200723-1412] - [003] - M05-P06 - Mapping extra props

// const storeProvider = (Componentx) => {
// 07/31/2020 05:39 am - SSN - [20200731-0528] - [003] - M06-P06 - A bit of refactoring
// const storeProvider = (extraProps) => (Componentx) => {
const storeProvider = (extraProps = () => ({})) => (Componentx) => {


    // 07/23/2020 01:56 pm - SSN - [20200723-1147] - [004] - M05-P05 - Higher order components

    //    return class extends React.Component {
    return class extends React.PureComponent {

        static displayName = `${Componentx.name}_HOC_Container`;

        static contextTypes = {
            store: PropTypes.object
        };



        // 08/01/2020 06:57 am - SSN - [20200731-2139] - [004] - M07-P04 - Making store-connected components subscribe to partial state
        usedState = () => {
            return extraProps(this.context.store, this.props);
        }


        // 08/01/2020 07:02 am - SSN - [20200731-2139] - [005] - M07-P04 - Making store-connected components subscribe to partial state
        // Wasn't initialized
        state = this.usedState();


        // 07/31/2020 05:19 am - SSN - [20200731-0322] - [001] - M06-P05 - Subscribing to state from child component

        onStoreChange = () => {
            if (this.subscriptionId) {

                // 08/01/2020 06:55 am - SSN - [20200731-2139] - [003] - M07-P04 - Making store-connected components subscribe to partial state
                // this.forceUpdate();
                this.setState(this.usedState());
            }
        }

        componentDidMount() {
            this.subscriptionId = this.context.store.subscribe(this.onStoreChange);

        }

        componentWillUnmount() {

            this.context.store.unsubscribe(this.subscriptionId);
            this.subscriptionId = null;
        }



        componentWillUpdate(nextProps, nextState) {

            console.log('storeProvider.js: componentWillUpdate');
            console.log(this.state);
            console.log(nextState);
        }


        render() {

            // 07/23/2020 02:38 pm - SSN - [20200723-1412] - [004] - M05-P06 - Mapping extra props

            // return <Componentx {...this.props} store={this.context.store} />;
            return <Componentx
                {...this.props}

                // 08/01/2020 06:57 am - SSN - [20200731-2139] - [004] - M07-P04 - Making store-connected components subscribe to partial state
                //        {...extraProps(this.context.store, this.props)}
                {...this.usedState()}

                store={this.context.store}
            />;
        }
    };


};

export default storeProvider;