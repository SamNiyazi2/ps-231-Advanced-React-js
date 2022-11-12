
// 07/21/2020 04:22 am - SSN - [20200721-0002] - [003] - M03-P06 - Matching data to React components
// 07/21/2020 06:48 am - SSN - [20200721-0637] - [003] - M03-P08 - Components responsibility

import React from 'react';
import Article from './Article';

// 07/31/2020 09:13 pm - SSN - [20200731-0751] - [003] - M07-P03 - Perf addons: Avoiding wasteful renderers with PureComponent
// Functions always rerender, unless using HOC.  Replacing with class (PureComponent) for performance.

const ArticlesList_originalFunc = (props) => {
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



class ArticlesList extends React.PureComponent {

    componentWillUpdate(nextProps, nextState) {
        console.log('ssn-20200731-2117 - Updating ArticlesList');
    }

    render() {
        return (
            <div>
                {Object.values(this.props.articles).map(article =>
                    <Article
                        key={article.id}
                        article={article}

                    />

                )}
            </div>
        )
    }
}




export default ArticlesList;
