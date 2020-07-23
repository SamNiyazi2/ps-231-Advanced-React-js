
// 07/23/2020 12:03 pm - SSN - [20200723-1147] - [003] - M05-P05 - Higher order components

import React from 'react';
import PropTypes from 'prop-types';


const storeProvider = (Componentx) => {


    // 07/23/2020 01:56 pm - SSN - [20200723-1147] - [004] - M05-P05 - Higher order components

    return class extends React.Component {

        static displayName = `${Componentx.name}_HOC_Container`;

        static contextTypes = {
            store: PropTypes.object
        };

        render() {

            return <Componentx {...this.props} store={this.context.store} />;
        }
    };


};

export default storeProvider;