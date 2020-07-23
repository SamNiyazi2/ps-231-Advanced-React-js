
// 07/21/2020 12:42 am - SSN - [20200721-0002] - [002] - M03-P06 - Matching data to React components
// 07/21/2020 04:46 pm - SSN - [20200721-1305] - [003] - M03-P10 - Server-side rendering of React component
// 07/21/2020 06:44 am - SSN - [20200721-0637] - [001] - M03-P08 - Components responsibility

import React, { Component, Fragment } from 'react';
import ArticlesList from './ArticlesList';

import PropTypes from 'prop-types';

class App extends Component {


    // 07/23/2020 12:53 am - SSN - [20200722-1634] - [001] - M05-P02 - React's context API

    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {

        console.log('lib/componpents/App.js - getChildContext');
        console.log('this.props:');
        console.log(this.props);

        return {
            store: this.props.store
        };
    }

    state = this.props.store.getState();



    render() {

        return (
            <Fragment>

                <div>State [{this.state.callSource}]</div>

                <ArticlesList
                    articles={this.state.articles}
                    store={this.props.store}
                />

            </Fragment>
        );
    }
}

export default App;
