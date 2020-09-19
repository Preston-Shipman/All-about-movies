$(document).ready(initializeApp);

function initializeApp(){
    var getMovies = new MovieResult();
    getMovies.addEventHandler();
    $(".searchButton").click(function() {
        if (!$(".searchInput").val()) {
            $('.toast').toast('show')
        }
        else if ($(".searchInput").val()) {
            $('.toast').toast('hide')
        }
    })
}
