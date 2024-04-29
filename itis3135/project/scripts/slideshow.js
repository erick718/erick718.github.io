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
                slideShow.appendChild(slideDiv);
            });
            slideShow.innerHTML += `
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>
                <div class="caption-container">
                    <p id="caption"></p>
                </div>
            `;

            const row = document.createElement('div');
            row.classList.add('row')
            slideShow.appendChild(row);
            data.produceImages.forEach(image => {
                const col = document.createElement('div');
                col.classList.add('column');
                col.innerHTML = `
                    <img class="demo cursor" src="${image.src}" alt="${image.alt}">
                `;
                slideShow.appendChild(col);
            });


        })
        .catch(error => console.error('Error fetching JSON:', error));
});


$(document).ready(function() {
    let slideIndex = 1;
    showSlides(slideIndex);
  
    $(".prev").click(function() {
      plusSlides(-1);
    });
  
    $(".next").click(function() {
      plusSlides(1);
    });
  
    $(".demo").click(function() {
      currentSlide($(this).parent().index() + 1);
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
      let dots = $(".demo");
      let captionText = $("#caption");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      slides.hide();
      slides.eq(slideIndex - 1).show();
      dots.removeClass("active");
      dots.eq(slideIndex - 1).addClass("active");
      captionText.text(dots.eq(slideIndex - 1).attr("alt"));
    }
  });