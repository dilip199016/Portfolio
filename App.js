// Fetch Movies from API
const apiKey = 'f531333d637d0c44abc85b3e74db2186';
const baseUrl = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/original';
const movieList = document.querySelector('.movie-list');

async function fetchMovies() {
    try {
        const response = await fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        const data = await response.json();
        const movies = data.results;
        
        // Display movies in cards
        movies.forEach((movie) => {
            const card = createMovieCard(movie);
            movieList.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function createMovieCard(movie) {
    // Create and style a movie card element
    const card = document.createElement('li');
    card.classList.add('movie-card');

    // Populate card with movie data (image, title, vote count, vote average)
    // Add favorite button and event listener for adding/removing from favorites

    return card;
}

// Sorting Movies
const sortByDateButton = document.getElementById('sort-by-date');
const sortByRatingButton = document.getElementById('sort-by-rating');

sortByDateButton.addEventListener('click', () => {
    // Implement sorting by date logic
    // Toggle sorting direction
});

sortByRatingButton.addEventListener('click', () => {
    // Implement sorting by rating logic
    // Toggle sorting direction
});

// Search Functionality
const searchButton = document.getElementById('search-button');
const movieSearchInput = document.getElementById('movie-search');

searchButton.addEventListener('click', () => {
    // Implement search logic
});

// Add/Remove from Favorites
const favoritesTab = document.getElementById('favorites-tab');

favoritesTab.addEventListener('click', () => {
    // Implement displaying favorite movies
    // Add logic for adding/removing from favorites
});

// Pagination
const previousButton = document.getElementById('previous');
const nextPageButton = document.getElementById('next');
const currentPageElement = document.getElementById('current-page');
let currentPage = 1;

previousButton.addEventListener('click', () => {
    // Implement previous page logic
});

nextPageButton.addEventListener('click', () => {
    // Implement next page logic
});

// Initialize the app by fetching movies
fetchMovies();
