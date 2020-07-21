
// 07/21/2020 04:28 am - SSN - [20200721-0002] - [004] - M03-P06 - Matching data to React components

import React from 'react';

const Article = (props) => {

    const { article, author } = props;

    return (
        <div>
            <div>{article.title}</div>
            <div>{article.date}</div>
            <div>Author: &nbsp;
<a href="{author.website}">{author.firstName} {author.lastName}</a>
            </div>
            <div>{article.body}</div>
        </div>
    );
};


export default Article;
