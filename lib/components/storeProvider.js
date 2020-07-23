
// 07/23/2020 12:03 pm - SSN - [20200723-1147] - [003] - M05-P05 - Higher order components

import React from 'react';
import PropTypes from 'prop-types';


const storeProvider = (Componentx) => {


    const WithStore = (props, { store }) => {
 
       return <Componentx {...props} store={store} />;
    };

    WithStore.displayName = `${Componentx.name}Container_suffix`;

    WithStore.contextTypes = {
        store: PropTypes.object
    };

    return WithStore;

};

export default storeProvider;