
// 07/21/2020 04:22 am - SSN - [20200721-0002] - [003] - M03-P06 - Matching data to React components
// 07/21/2020 06:48 am - SSN - [20200721-0637] - [003] - M03-P08 - Components responsibility

import React from 'react';
import Article from './Article';

const ArticlesList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map(article =>
                <Article
                    key={article.id}
                    article={article}

                // 07/23/2020 01:04 am - SSN - [20200722-1634] - [004] - M05-P02 - React's context API

                // store={props.store}
                />

            )}
        </div>
    );
};

export default ArticlesList;
