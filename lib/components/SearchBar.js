
// 07/23/2020 11:56 pm - SSN - [20200723-2346] - [001] - M06-P02 - Using the setState function

import React, { Component } from 'react';

import debounce from 'lodash.debounce';

import storeProvider from './storeProvider';

// 07/31/2020 06:10 am - SSN - [20200731-0556] - [002] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate

// class SearchBar extends Component {
class SearchBar extends React.PureComponent {

    state = {
        searchTerm: ''
    };

    doSearch = debounce(() => {

        // 07/31/2020 05:36 am - SSN - [20200731-0528] - [002] - M06-P06 - A bit of refactoring

        //this.props.doSearch(this.state.searchTerm);
        this.props.store.setSearchTerm(this.state.searchTerm);

    }, 1000);


    handleSearch = (event) => {

        this.setState({ searchTerm: event.target.value }, () => {

            this.doSearch();
        });


    }


    // 07/31/2020 06:05 am - SSN - [20200731-0556] - [001] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate
    // Will change to PureCompoents since it does the same thing.  Check for change before return true (compoent should update).
    // shouldComponentUpdate(nextProps, nextState) {

    //     return true;
    // }

    // 07/31/2020 06:05 am - SSN - [20200731-0556] - [001] - M07-P01 - Understanding shouldComponentUpdate and componentWillUpdate
    componentWillUpdate(nextProps, nextState) {
        console.log('ssn-20200731-0607 - Updating searchbar');
    }


    render() {

        return (

            // ref={(input) => this.searchInput = input}

            <input
                type="search"
                placeholder="Enter search term"
                onChange={this.handleSearch}
                value={this.state.searchTerm}
            ></input>

        );
    }
}

export default storeProvider()(SearchBar);
