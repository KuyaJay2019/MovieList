const MOVIE_LIST = {
    getListMovie : (function () {
        return $.ajax({
            type : 'get',
            url : 'https://pelec4.herokuapp.com/movies'
        })
    })
}