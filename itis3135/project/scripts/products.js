// List
document.addEventListener("DOMContentLoaded", function() {
    fetch('components/project.json')
        .then(response => response.json())
        .then(data => {
            // Display additional products using the fetched JSON data
            const produce = document.getElementById('products');
            data.produceImages.forEach(image => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-images');
                productDiv.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">
                    <p>${image.alt}</p>
                `;
                produce.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

// Slideshow
document.addEventListener("DOMContentLoaded", function() {
    fetch('components/project.json')
        .then(response => response.json())
        .then(data => {
            const slideShow = document.getElementById('product-slideshow');
            data.produceImages.forEach(image => {
                const slideDiv = document.createElement('div');
                slideDiv.classList.add('mySlides');
                slideDiv.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">

                `;
                
                const caption = document.createElement('div');
                caption.classList.add('caption-container');
                caption.innerHTML = `
                    <p>${image.alt}</p>
                `;
                
                slideDiv.appendChild(caption)
                slideShow.appendChild(slideDiv);
            });
            slideShow.innerHTML += `
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>
            `;

            $(document).ready(function() {
                let slideIndex = 1;
                showSlides(slideIndex);
                
                $(".prev").click(function() {
                    plusSlides(-1);
                });
                
                $(".next").click(function() {
                    plusSlides(1);
                });
                
                function plusSlides(n) {
                    showSlides(slideIndex += n);
                }
                
                function currentSlide(n) {
                    showSlides(slideIndex = n);
                }
                
                function showSlides(n) {
                    let i;
                    let slides = $(".mySlides");
                    if (n > slides.length) { slideIndex = 1 }
                    if (n < 1) { slideIndex = slides.length }
                    slides.hide();
                    slides.eq(slideIndex - 1).show();
                }
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

// Toggle Button
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const productsDiv = document.getElementById("products");
    const slideshowDiv = document.getElementById("product-slideshow");

    toggleButton.addEventListener("click", function() {
        if (productsDiv.style.display === "none") {
            productsDiv.style.display = "flex";
            slideshowDiv.style.display = "none";
            toggleButton.textContent = "View Slideshow";
        } else {
            productsDiv.style.display = "none";
            slideshowDiv.style.display = "block";
            toggleButton.textContent = "View List";
        }
    });
});