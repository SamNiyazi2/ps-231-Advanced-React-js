

// 07/20/2020 07:49 pm - SSN - [20200720-1949] - [001] - M03-P05 -  Testing JavaScript code with Jest


class StateApi {

    constructor(_rawData, callSource) {

        this.data = {
            articles: this.mapIntoObject(_rawData.articles),
            authors: this.mapIntoObject(_rawData.authors),
            searchTerm: '',
            timestamp: new Date(),
            callSource: callSource
        };

        // 07/24/2020 02:40 am - SSN - [20200724-0231] - [003] - M06-P03 - Subscribing to an external state

        this.subscriptions = {};
        this.lastSubscriptionId = 0;


        // 08/01/2020 09:23 am - SSN - [20200801-0920] - [001] - M07-P05 - Immutable data structure
        setTimeout(() => {


            const fakeArticle = {
                ..._rawData.articles[0],
                id: 'fakeArticleId',
                title: 'Some title for fake article'
            };


            // this.data.articles[fakeArticle.id] = fakeArticle;
            this.data = {
                ...this.data,
                articles: {
                    ...this.data.articles,
                    [fakeArticle.id]: fakeArticle
                }
            };

            this.notifySubscribers();

            console.log("state-api index.js - added fake article");

        }, 5000);



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





    // 07/24/2020 02:42 am - SSN - [20200724-0231] - [004] - M06-P03 - Subscribing to an external state
    //#region Subscribing

    subscribe = (callback) => {

        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = callback;
        return this.lastSubscriptionId;

    }


    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    }


    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((callback) => callback());
    }


    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        };

        this.notifySubscribers();
    }


    setSearchTerm = (searchTerm) => {
        this.mergeWithState({
            searchTerm,
        });
    }

    //#endregion


    startClock = () => {

        let lastTimestamp = new Date();

        setInterval(() => {

            let currentTime = new Date();

            if (currentTime.getSeconds() % 60 < 3 && currentTime - lastTimestamp > 12000) {
                lastTimestamp = currentTime;
                this.mergeWithState({
                    timestamp: new Date()
                });

            }

        }, 1000);

    }
}

export default StateApi;

