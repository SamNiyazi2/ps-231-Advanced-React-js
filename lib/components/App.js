
// 07/21/2020 12:42 am - SSN - [20200721-0002] - [002] - M03-P06 - Matching data to React components
// 07/21/2020 04:46 pm - SSN - [20200721-1305] - [003] - M03-P10 - Server-side rendering of React component
// 07/21/2020 06:44 am - SSN - [20200721-0637] - [001] - M03-P08 - Components responsibility
// 07/24/2020 01:00 am - SSN - [20200723-2346] - [003] - M06-P02 - Using the setState function

import React, { Component, Fragment } from 'react';
import ArticlesList from './ArticlesList';

import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';


class App extends Component {


    // 07/23/2020 12:53 am - SSN - [20200722-1634] - [001] - M05-P02 - React's context API

    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {


        return {
            store: this.props.store
        };
    }

    state = this.props.store.getState();


    // 07/24/2020 02:47 am - SSN - [20200724-0231] - [005] - M06-P03 - Subscribing to an external state

    onStoreChange = () => {
        this.setState(this.props.store.getState());
    }

    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();

    }

    componentWillUnmount() {

        this.props.store.unsubscribe(this.subscriptionId);
    }



    render() {

        let articles = this.state.articles;
        let searchFeedback = '';

        if (this.state.searchTerm) {
            const regex = RegExp(this.state.searchTerm, 'i');
            articles = pickBy(articles, (value) => {

                return value.title.match(regex)
                    ||
                    value.body.match(regex);
            });

            if (Object.keys(articles).length > 1) {

                searchFeedback = Object.keys(articles).length.toString() + ' entries found.';
            }
            else if (Object.keys(articles).length === 1) {
                searchFeedback = 'One entry found.';
            }
            else {
                searchFeedback = 'No entries were found.';
            }
        }


        return (
            <Fragment>

                <div className='topMenu'>State [{this.state.callSource}]</div>

                {/* // 07/24/2020 03:35 am - SSN - [20200724-0335] - [001] - M06-P04 - Passing state to child components */}
                <Timestamp />

                {/* // 07/24/2020 02:37 am - SSN - [20200724-0231] - [002] - M06-P03 - Subscribing to an external state */}

                {/* // 07/31/2020 05:35 am - SSN - [20200731-0528] - [001] - M06-P06 - A bit of refactoring */}

                {/* <SearchBar doSearch={this.props.store.setSearchTerm} /> */}
                <SearchBar />

                <div>{searchFeedback}</div>
                <ArticlesList
                    articles={articles}

                    // // 07/31/2020 05:49 am - SSN - [20200731-0528] - [004] - M06-P06 - A bit of refactoring
                    // store={this.props.store}

/>

            </Fragment>
        );
    }
}

export default App;
