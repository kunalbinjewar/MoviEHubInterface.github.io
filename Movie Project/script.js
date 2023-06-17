// function toggleMenu() {
//     var menuContent = document.getElementById("menu-content");
//     menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
//   }
  

//   // Get the search input element and download buttons
// const searchInput = document.querySelector('.search-bar input');
// const downloadButtons = document.querySelectorAll('.download-button');

// // Function to handle search
// function handleSearch() {
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm !== '') {
//     const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=d61e569c7b38339eac087e5219c451a3'${searchTerm}`;

//     // Perform the API request using the apiUrl

//     // Example API request using Fetch API
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         // Handle the API response data
//         console.log(data); // Replace with your code to display the search results
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
// }

// // Attach event listener to search button
// document.querySelector('.search-bar button').addEventListener('click', handleSearch);

// // Attach event listener to search input for handling Enter key press
// searchInput.addEventListener('keydown', event => {
//   if (event.key === 'Enter') {
//     handleSearch();
//   }
// });

// // Function to handle download button click
// function handleDownload(event) {
//   event.preventDefault();
//   const movieTitle = event.target.previousElementSibling.innerText;

//   // Perform the download logic for the movie title
//   console.log(`Downloading: ${movieTitle}`); // Replace with your code to handle the download
// }

// // Attach event listener to each download button
// downloadButtons.forEach(button => {
//   button.addEventListener('click', handleDownload);
// });

// // JavaScript code
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the search button element
//     var searchButton = document.querySelector('.search-bar button[type="submit"]');
  
//     // Add click event listener to the search button
//     searchButton.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent form submission
  
//       // Get the search input value
//       var searchInput = document.querySelector('.search-bar input[type="text"]').value;
      
//       // Call the API and perform the search based on the input value
//       performSearch(searchInput);
//     });
  
//     // Get all the buttons
//     var buttons = document.querySelectorAll('button, .menu-content a, .dropdown-content a');
  
//     // Add hover effect to all buttons
//     buttons.forEach(function(button) {
//       button.addEventListener('mouseover', function() {
//         button.classList.add('hover-effect');
//       });
  
//       button.addEventListener('mouseout', function() {
//         button.classList.remove('hover-effect');
//       });
//     });
  
//     // Function to perform the movie search using the API
//     function performSearch(query) {
//       // Add your API logic here using the provided API key
//       // Make a request to the TMDB API with the search query
//       // Process the response and update the content on the page
//     }
//   });

//   // Get the necessary elements
// const aboutUsLink = document.getElementById('aboutus-link');
// const aboutUsContent = document.getElementById('about-us');

// // Add a click event listener to the link
// aboutUsLink.addEventListener('click', () => {
//   // Toggle the hidden class on the content
//   aboutUsContent.classList.toggle('hidden');
// });
function toggleMenu() {
    var menuContent = document.getElementById("menu-content");
    menuContent.classList.toggle("show");
  }

  function showLoginForm() {
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = "block";
  }