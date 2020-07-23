
// 07/21/2020 04:28 am - SSN - [20200721-0002] - [004] - M03-P06 - Matching data to React components
// 07/21/2020 06:02 am - SSN - [20200721-0535] - [001] - M03-P07 - Styling React component
// 07/21/2020 06:49 am - SSN - [20200721-0637] - [004] - M03-P08 - Components responsibility
// 07/22/2020 01:06 pm - SSN - [20200722-1305] - [001] - M05-P01 - Type-checking with PropTypes

import React from 'react';
import PropTypes from 'prop-types';

// 07/23/2020 11:58 am - SSN - [20200723-1147] - [001] - M05-P05 - Higher order components
import storeProvider from './storeProvider';

const styles = {

    article: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title: {
        paddingTop: 32,
        fontWeight: 'bold',
    },
    date: {
        fontSize: '0.8em',
        color: '#888'
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10
    },
    body: {
        paddingLeft: 20
    }
};


const dateDisplay = (dateString) => new Date(dateString).toDateString();


// 07/23/2020 12:59 am - SSN - [20200722-1634] - [003] - M05-P02 - React's context API

// 07/23/2020 11:38 am - SSN - [20200723-0336] - [002] - M05-P04 - Presentational components and container components

const Article = (props) => {

    // 07/23/2020 02:32 pm - SSN - [20200723-1412] - [001] - M05-P06 - Mapping extra props
    // const { article, store } = props;
    const { article, author } = props;


    return (
        <div>
            <div style={styles.title} >{article.title}</div>
            <div style={styles.date} >
                {dateDisplay(article.date)}
            </div>
            <div style={styles.author} >Author: &nbsp;
<a href="{author.website}">{author.firstName} {author.lastName}</a>
            </div>
            <div style={styles.body} >{article.body}</div>
        </div>
    );
};


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })

};



// 07/23/2020 02:34 pm - SSN - [20200723-1412] - [002] - M05-P06 - Mapping extra props
function extraProps(store, originalProps) {
    return {
        author: store.lookupAuthor(originalProps.article.authorId)
    };
}


// 07/23/2020 12:01 pm - SSN - [20200723-1147] - [002] - M05-P05 - Higher order components


const ArticleContainer = storeProvider(extraProps)(Article);


export default ArticleContainer;
