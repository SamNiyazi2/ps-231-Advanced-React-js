

// 07/20/2020 07:49 pm - SSN - [20200720-1949] - [001] - M03-P05 -  Testing JavaScript code with Jest


class DataAPi {

    constructor(_rawData) {

        this.rawData = _rawData;
    }


    mapIntoObject(arr) {

        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }



    getArticles() {

        return this.mapIntoObject(this.rawData.articles);
    }


    getAuthors() {
        return this.mapIntoObject(this.rawData.authors);

    }


}

export default DataAPi;

