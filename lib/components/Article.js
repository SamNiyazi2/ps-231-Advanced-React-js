
// 07/21/2020 04:28 am - SSN - [20200721-0002] - [004] - M03-P06 - Matching data to React components
// 07/21/2020 06:02 am - SSN - [20200721-0535] - [001] - M03-P07 - Styling React component
// 07/21/2020 06:49 am - SSN - [20200721-0637] - [004] - M03-P08 - Components responsibility

import React from 'react';


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


const Article = (props) => {

    const { article, store } = props;
    const author = store.lookupAuthor(article.authorId);



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


export default Article;
