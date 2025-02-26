const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const placeId = 'YOUR_PLACE_ID'; // Replace with your place ID

function fetchReviews() {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const reviews = data.result.reviews || [];
        displayReviews(reviews);
    })
    .catch(error => console.error('Error fetching reviews:', error));
}

function displayReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = ''; // Clear existing reviews

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h4>${review.author_name}</h4>
            <p>${review.text}</p>
            <p><strong>Rating:</strong> ${review.rating}</p>
            <p><small>${review.relative_time_description}</small></p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Fetch reviews when the script is loaded
fetchReviews();


 // Get the button
 const scrollButton = document.getElementById("scrollToTop");
 const heroSection = document.getElementById("hero"); // Make sure your hero section has this ID

 // Show button when user scrolls down 100px
 window.onscroll = function() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         scrollButton.style.display = "flex";
     } else {
         scrollButton.style.display = "none";
     }
 };

 // Scroll to hero section when button is clicked
 scrollButton.addEventListener("click", function() {
     heroSection.scrollIntoView({
         behavior: "smooth"
     });
 });