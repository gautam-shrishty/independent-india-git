var slideIndex = 1;
showSlides(slideIndex)
var sleepInt = 1000;
var inst = setInterval(change, sleepInt);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function change() {
    showSlides(slideIndex)
    slideIndex++
    var slides = document.getElementsByClassName("mySlides");
    slideIndex = slideIndex % slides.length;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var img = "url(slide-" + n.toString() + ".jpg)";
    console.log(img)
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].className += " active";
}