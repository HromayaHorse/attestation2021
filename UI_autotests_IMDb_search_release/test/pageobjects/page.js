
// Объект главной страницы, содержащий все методы, селекторы и функциональные возможности это общее для всех объектов страницы

module.exports = class Page {

    open (path) {
        return browser.url(`https://www.imdb.com/${path}`)
    }
}
