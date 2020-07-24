
// 07/23/2020 11:56 pm - SSN - [20200723-2346] - [001] - M06-P02 - Using the setState function

import React, { Component } from 'react';

import debounce from 'lodash.debounce';

export default class SearchBar extends Component {

    state = {
        searchTerm: ''
    };

    doSearch = debounce(() => {

        this.props.doSearch(this.state.searchTerm);

    }, 1000);


    handleSearch = (event) => {

        this.setState({ searchTerm: event.target.value }, () => {

            this.doSearch();
        });


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
