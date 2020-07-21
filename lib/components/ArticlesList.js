
// 07/21/2020 04:22 am - SSN - [20200721-0002] - [003] - M03-P06 - Matching data to React components

import React from 'react';
import Article from './Article';

const ArticlesList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map(article =>
                <Article
                    key={article.id}
                    article={article}
                    author={props.authors[article.authorId]}
                />

            )}
        </div>
    );
};

export default ArticlesList;
