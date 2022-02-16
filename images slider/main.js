var slideIndex = 1

function moveSlide(n) {
    ShowSlide(slideIndex += n)
}

function currentSlide(n) {
    ShowSlide(slideIndex = n)
}

function ShowSlide(n) {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(var i = 0; i < dots.length; i++){
        dots[i].classList.remove("active")
    }
    dots[slideIndex - 1].classList.add("active")
    slides[slideIndex - 1].style.display = "block"
}

ShowSlide(slideIndex)