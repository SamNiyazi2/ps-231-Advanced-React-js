

// 08/01/2020 09:23 pm - SSN - [20200801-2022] - [001] - M08-P02 - Continuous integration and test coverage



beforeAll(() => console.log('Articke.test - 1 - beforeAll'));
afterAll(() => console.log('Articke.test - 1 - afterAll'));
beforeEach(() => console.log('Articke.test - 1 - beforeEach'));
afterEach(() => console.log('Articke.test - 1 - afterEach'));



describe('Article', () => {


    beforeAll(() => console.log('Articke.test - 2 - beforeAll'));
    afterAll(() => console.log('Articke.test - 2 - afterAll'));
    beforeEach(() => console.log('Articke.test - 2 - beforeEach'));
    afterEach(() => console.log('Articke.test - 2 - afterEach'));


    test('should run this test 1 of 2', () => {




        expect(true).toBe(true);

    });

    test('should run this test 2 of 2', () => {




        expect(true).toBe(true);

    });


});
