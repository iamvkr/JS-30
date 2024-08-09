// https://www.omdbapi.com/
// Day 25: Project 2 - Movie Search App
// Tasks/Activities:
// Activity 1: Setting Up the Project
// Task 1: Initialize a new project directory and set up the basic HTML structure for the movie search app.
// Task 2: Add a basic CSS file to style the movie search app, including a container for displaying movie search results.
/** DONE */

// const API_KEY = "";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Activity 2: Fetching Movie Data
// Task 3: Use the fetch API to get movie data from a public movie API (e.g., OMDB API or The Movie Database API). Log the response data to the console.
const fetchMovie = async () => {
    if (!searchInput.value.trim()) {
        alert("Please enter a search term");
        return false;
    }
    if (localStorage.getItem(searchInput.value.trim())) {
        return JSON.parse(localStorage.getItem(searchInput.value.trim()));
    }
    try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchInput.value)}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Response:", data); // API response

        if (data.Response === "True" && data.Search && data.Search.length > 0) {
            localStorage.setItem(searchInput.value.trim(), JSON.stringify(data.Search))
            return data.Search;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
}
// Task 4: Parse the movie data and display the movie title, poster, and release year on the web page.

// Activity 3: Adding Search Functionality
// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.
// Task 6: Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console.

const movieListView = document.querySelector("#movieListView");
/** on search btn clicked: */
searchBtn.addEventListener("click", async () => {
    const movieData = await fetchMovie();
    updateMovieData(movieData)
})
/** update movie list on the page */
function updateMovieData(movieData) {
    if (!movieData) {
        movieListView.innerHTML = `<div class="text-center min-h-[80vh]">Failed To Fetch Data</div>`
        return false;
    }
    movieListView.innerHTML = "";
    let s = "";
    movieData.forEach(movie => {
        s += populateMovieCard(movie)
    });
    movieListView.innerHTML = s;
    // bind events to all add detail btns:
    const detailsBtn = document.querySelectorAll(".detailsBtn");
    detailsBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            fetchMovieById(e.target.id)
        })
    })

}
function populateMovieCard(movie) {
    return `<div class="bg-white rounded shadow p-6">
                <img src="${movie.Poster}" alt="Movie Poster" class="w-full h-48 object-cover rounded-t">
                <h2 class="text-lg font-bold mt-2">${movie.Title}</h2>
                <p class="text-gray-700">${movie.Year} | ${movie.Type}</p>
                <button class="detailsBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                id="${movie.imdbID}">Details</button>
            </div>`
}

const fetchMovieById = async (imdbID) => {
    if (!imdbID.trim()) {
        alert("invalid imdbid");
        return false;
    }
    try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Response:", data); // API response
        // populate modal data here:
        let { Title, Year, imdbRating, Genre, Director, Actors, Plot, Awards, Runtime,Poster } = data;
        if (Poster == "N/A") {
            Poster = "https://via.placeholder.com/300x450.png?text=No+Poster";
        }
        const modal_movie_poster = document.getElementById("modal_movie_poster")
        const modal_movie_title = document.getElementById("modal_movie_title")
        const modal_movie_details = document.getElementById("modal_movie_details")

        modal_movie_poster.src = Poster;
        modal_movie_title.innerText = Title;
        modal_movie_details.innerHTML = `
        <p><span class="font-bold">Year</span>: ${Year}</p>
        <p><span class="font-bold">imdbRating</span>: ${imdbRating}</p>
        <p><span class="font-bold">Genre</span>: ${Genre}</p>
        <p><span class="font-bold">Director</span>: ${Director}</p>
        <p><span class="font-bold">Actors</span>: ${Actors}</p>
        <p><span class="font-bold">Plot</span>: ${Plot}</p>
        <p><span class="font-bold">Awards</span>: ${Awards}</p>
        <p><span class="font-bold">Runtime</span>: ${Runtime}</p>
        `
        // show modal:
        const modal = document.querySelector(".modal");
        modal.classList.remove("hidden")

    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
}


// Activity 4: Displaying Detailed Movie Information
// Task 7: Modify the search results to include a "More Info" button for each movie. When clicked, fetch and display additional details about the movie, such as the plot, director, and actors.
// Task 8: Create a modal or a new section on the page to display the detailed movie information.
const modal = document.querySelector(".modal");
const close_modal_btn = document.getElementById("close_modal_btn")
close_modal_btn.addEventListener("click", () => {
    modal.classList.add("hidden")
})

// Activity 5: Enhancing the UI

// Task 9: Add CSS styles to improve the layout and design of the search results and detailed movie information.
// Task 10: Add CSS animations or transitions to make the movie search app more interactive and visually appealing.
