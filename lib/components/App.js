
// 07/21/2020 12:42 am - SSN - [20200721-0002] - [002] - M03-P06 - Matching data to React components

import React, { Component } from 'react';

import DataApi from '../DataApi';


class App extends Component {

    constructor() {
        super();




    }

    async componentDidMount() {


        let data = await this.getdata();

        const api = new DataApi(data);

        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };



    }


    async getdata() {

        const response = await fetch('./testdata2.json');
        let data = await response.json();
 
        return data.data;
    }


    render() {
        return (
            <div>
                The data
            </div>
        );
    }
}

export default App;
