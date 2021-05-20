const Page = require('./page');

class SearchPage extends Page {
    /**
     * Определение селекторов
     */
    get inputSearch () { return $('#suggestion-search') }
    get btnSearch () { return $('#suggestion-search-button') }
    get btnCategory () { return $('.ipc-icon--arrow-drop-down:nth-child(1) > path:nth-child(2)') }
    get btnChooseCategory () { return $('//span/ul/a[2]')}
    get searchPrewiew() { return $('//*[@id="nav-search-form"]/div[2]/div/div/div/ul')}

    /**
     Интерактив со страницей
     */
    async search (keyword) {
        await (await this.btnCategory).click();
        await (await this.btnChooseCategory).click();
        await (await this.inputSearch).setValue(keyword);
        await (await this.btnSearch).click();
    }

    /**
     * перезаписать определенные параметры, чтобы адаптировать его к объекту страницы
     */
    open () {
        return super.open('search');
    }
}

module.exports = new SearchPage();
