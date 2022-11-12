
// 07/20/2020 07:52 pm - SSN - [20200720-1949] - [002] - M03-P05 -  Testing JavaScript code with Jest

const { default: StateApi } = require('state-api');
import { data } from '../../data/testdata2.json';


const store = new StateApi(data);


describe('StateApi', () => {

    it('exposes articles as an object', () => {

        const articles = store.getState().articles;
        const articleId = data.articles[0].id;
        const articleTitle = data.articles[0].title;

        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(articleTitle);



    });



    it('exposes authros as an object', () => {

        const authors = store.getState().authors;
        const authorId = data.authors[0].id;
        const authroFirstname = data.authors[0].firstName;
        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toBe(authroFirstname);


    });



});

