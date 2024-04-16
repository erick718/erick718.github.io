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