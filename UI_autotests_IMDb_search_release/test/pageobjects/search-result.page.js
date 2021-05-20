const Page = require('./page');

class SearchResultPage extends Page {
    /**
     * Определение селекторов
     */
    get btnExactTitleMatches () { return $('#main > div > div.findSection > div > a') }
    get displayingResultCount () { return $('#main > div > h1') }


    /**
     Интерактив со страницей
     */
    async exactTitleMatches (keyword) {
        await (await this.btnExactTitleMatches).click();
    }

    /**
     * перезаписать определенные параметры, чтобы адаптировать его к объекту страницы
     */
    open () {
        return super.open('exactTitleMatches');
    }
}

module.exports = new SearchResultPage();
