$(document).ready(() =>{
    $("#searchForm").on("submit", (e)=>{
        let searchText = $("#searchText").val();
        getMovies(searchText);
        e.preventDefault();
    });
});


function getMovies(searchText){
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4edc8f6c&s='+searchText)
        .then((response)=>{
            console.log(response);
        })
        .catch((err) => {
            console.log("tis is an error");
            console.log(err);
        });
}