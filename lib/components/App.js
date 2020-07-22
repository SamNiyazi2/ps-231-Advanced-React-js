
// 07/21/2020 12:42 am - SSN - [20200721-0002] - [002] - M03-P06 - Matching data to React components

import React, { Component, Fragment } from 'react';

import DataApi from '../state-api';

import ArticlesList from './ArticlesList';


// 07/21/2020 04:46 pm - SSN - [20200721-1305] - [003] - M03-P10 - Server-side rendering of React component


class App extends Component {

    constructor(props) {
        super(props);
  
        let localData = props.datadata;
 
        const api = new DataApi(localData);

        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors(),
            isLoaded: true,
            callSource: props.callSource
        };

 

    }


 

    // 07/21/2020 06:44 am - SSN - [20200721-0637] - [001] - M03-P08 - Components responsibility

    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId]
    }


    render() {


        // 07/21/2020 06:46 am - SSN - [20200721-0637] - [002] - M03-P08 - Components responsibility
 
        return (
            <Fragment>

                <div>State [{this.state.callSource}]</div>
                {this.state.isLoaded ?

                    <ArticlesList
                        articles={this.state.articles}
                        articleActions={this.articleActions}
                    /> : <div>Loading data...</div>
                }

            </Fragment>
        );
    }
}

export default App;
