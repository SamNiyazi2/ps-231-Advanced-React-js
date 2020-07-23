
// 07/21/2020 04:28 am - SSN - [20200721-0002] - [004] - M03-P06 - Matching data to React components
// 07/21/2020 06:02 am - SSN - [20200721-0535] - [001] - M03-P07 - Styling React component
// 07/21/2020 06:49 am - SSN - [20200721-0637] - [004] - M03-P08 - Components responsibility
// 07/22/2020 01:06 pm - SSN - [20200722-1305] - [001] - M05-P01 - Type-checking with PropTypes

import React from 'react';
import PropTypes from 'prop-types';

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

const Article = (props, context) => {


    // const { article, store } = props;
    // const author = store.lookupAuthor(article.authorId);
    const { article  } = props;
    const author = context.store.lookupAuthor(article.authorId);



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

// 07/23/2020 12:57 am - SSN - [20200722-1634] - [002] - M05-P02 - React's context API
Article.contextTypes = {
    store: PropTypes.object
};


export default Article;
