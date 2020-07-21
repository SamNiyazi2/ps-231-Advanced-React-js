
// 07/21/2020 12:42 am - SSN - [20200721-0002] - [002] - M03-P06 - Matching data to React components

import React, { Component } from 'react';

import DataApi from '../DataApi';
import ArticlesList from './ArticlesList';


class App extends Component {

    constructor() {
        super();

        this.state = {
            isLoaded: false
        };

    }

    async componentDidMount() {


        let data = await this.getdata();

        const api = new DataApi(data);

        this.setState({
            articles: api.getArticles(),
            authors: api.getAuthors(),
            isLoaded: true
        });

        console.log(this.state);
    }


    async getdata() {

        const response = await fetch('./testdata2.json');
        let data = await response.json();

        return data.data;
    }


    render() {

        console.log("Render Render Render Render Render Render ");
        console.log(this.state);


        return (

            this.state.isLoaded ?
                <ArticlesList
                    articles={this.state.articles}
                    authors={this.state.authors}
                /> : <div>Loading data...</div>
        );
    }
}

export default App;
