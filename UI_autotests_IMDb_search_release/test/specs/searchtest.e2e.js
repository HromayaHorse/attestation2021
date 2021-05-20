const SearchPage = require('../pageobjects/search.page');
const SearchApi = require('../pageobjects/search-api');
const SearchResultPage = require('../pageobjects/search-result.page')


describe('Search function', () => {
    it('should find movie by title', async () => {
        const apisearch = await SearchApi.getMovie();
        console.log(apisearch.data.totalResults);     
        console.log   
        await SearchPage.open();
        // Находим фильм Rambo в категории title
        await SearchPage.search('Rambo');
        // Применяем фильтр Exact title matches
        await SearchResultPage.exactTitleMatches()
        // Проверяем на соответствие с выводом в api
        await expect(SearchResultPage.displayingResultCount).toHaveTextContaining(
        apiamount);  
});
});