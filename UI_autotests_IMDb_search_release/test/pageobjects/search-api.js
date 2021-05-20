const axios = require('axios')

class SearchApi {
async getMovie() {

    // Запрос к api omdbapi запрашивающий title Rambo
    const response = axios.get('http://www.omdbapi.com/?apikey=46d2adce&s=Rambo&page=1')

    return response
}



}

module.exports = new SearchApi();