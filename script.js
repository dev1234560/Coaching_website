const testimonials = [
    {
        image: "./reviewers/sultana.png",
        text: "Jupiter classes is a very nice coaching centre very friendly teacher’s .My daughter started going there before she was hating Science but in one week I have seen improvement .Mr Arif is a very good teacher just like a friend.",
        name: "Sultana Mahboob",
        rating: 5
    },
    {
        image: "./reviewers/asim.png",
        text: "Very friendly teachers and cheerful atmosphere perfect for studying and they try and make every lesson very simple and easy for students to understand.... Thanks Arif sir u literally made me fall in love with studies....",
        name: "Md Asim",
        position: "CEO, TechStart Inc.",
        rating: 5
    },
    {
        image: "./reviewers/s.png",
        text: "Best coaching class in kidderpore I was very weak in science then I joined Jupiter classes my base is became very strong and I am scoring good marks",
        name: "8A 19 Md Shahnawaz Khan",
        position: "Project Manager",
        rating: 5
    },
    {
        image: "./reviewers/ayesha.png",
        text: "For better improvement this class is best and the teachers over here are highly educated and well experienced...My child is performing well in studies after joining this institution. Thankyou Arif Sir🙏🏻🙏🏻",
        name: "Ayesha Begum",
        position: "Operations Manager",
        rating: 5
    },
    {
        image: "./reviewers/ali.png",
        text: "Very good coaching center. Arif sir is a very good teacher",
        name: "Sk shamsheer Ali",
        position: "Design Director",
        rating: 5
    },
    {
        image: "./reviewers/gaurav.png",
        text: "Exceptional coaching centre. Kunal sir is very knowledgeable and is passionate about teaching.",
        name: "Gourav Roy",
        position: "Financial Analyst",
        rating: 5
    }
];

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    // Create stars string based on rating
    let stars = '';
    for (let i = 0; i < testimonial.rating; i++) {
        stars += '★';
    }
    
    card.innerHTML = `
        <div class="testimonial-header">
            <img class="testimonial-image" src="${testimonial.image}" alt="${testimonial.name}">
            <div class="testimonial-identity">
                <h4 class="testimonial-name">${testimonial.name}</h4>
                
            </div>
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-rating">${stars}</div>
    `;
    
    return card;
}

// Initialize the carousel
function initCarousel() {
    const track = document.getElementById('testimonialsTrack');
    track.innerHTML = ''; // Clear previous content
    
    // Determine cards per view based on screen width
    let cardsPerView = 2; // Default for desktop
    if (window.innerWidth <= 768) {
        cardsPerView = 1; // For tablets and mobile
    }
    
    // Clone testimonials for infinite scrolling
    const allTestimonials = [...testimonials, ...testimonials, ...testimonials];
    
    // Add cards to the track
    allTestimonials.forEach(testimonial => {
        track.appendChild(createTestimonialCard(testimonial));
    });
    
    // Calculate card width based on current viewport
    const cardWidth = track.children[0].offsetWidth + 20; // Card width + margin
    
    // Set initial position
    const initialOffset = cardsPerView * 2; // Start with 2 sets of cards already scrolled
    track.style.transform = `translateX(-${initialOffset * cardWidth}px)`;
    
    // Infinite scroll animation
    let position = initialOffset;
    const totalCards = allTestimonials.length;
    
    // Clear any existing interval
    if (window.scrollInterval) {
        clearInterval(window.scrollInterval);
    }
    
    // Set new interval
    window.scrollInterval = setInterval(() => {
        position++;
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${position * cardWidth}px)`;
        
        // Reset position when reaching end
        if (position >= totalCards - cardsPerView) {
            setTimeout(() => {
                track.style.transition = 'none';
                position = initialOffset;
                track.style.transform = `translateX(-${position * cardWidth}px)`;
            }, 500);
        }
    }, 3000); // Scroll every 3 seconds
}

// Handle responsive behavior
window.addEventListener('resize', () => {
    // Debounce the resize event
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        initCarousel();
    }, 250);
});

// Initialize once DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
    // Scroll to top function
    function initScrollToTop() {
        const scrollToTopButton = document.getElementById('scrollToTop');
        
        // Function to toggle button visibility
        function toggleScrollToTopButton() {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('active');
            } else {
                scrollToTopButton.classList.remove('active');
            }
        }
        
        // Add event listener for scroll
        window.addEventListener('scroll', toggleScrollToTopButton);
        
        // Initial call to check button visibility
        toggleScrollToTopButton();
        
        // Add click event to button
        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }



    document.addEventListener('DOMContentLoaded', () => {
        initCarousel();
        initScrollToTop();
    });
