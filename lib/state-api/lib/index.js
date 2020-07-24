

// 07/20/2020 07:49 pm - SSN - [20200720-1949] - [001] - M03-P05 -  Testing JavaScript code with Jest


class StateApi {

    constructor(_rawData, callSource) {

        this.data = {
            articles: this.mapIntoObject(_rawData.articles),
            authors: this.mapIntoObject(_rawData.authors),
            searchTerm: '',
            callSource: callSource
        };
    }


    mapIntoObject = (arr) => {

        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }


    lookupAuthor = (authorId) => {

        return this.data.authors[authorId];
    }


    getState = () => {

        return this.data;
    }

}

export default StateApi;

