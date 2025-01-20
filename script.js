const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelector("#elem1")
// var b = a.getAttribute("data-img")
// console.log(b)

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-img")
        fixed.style.backgroundImage = `url(${image})`    // `url(${}) -> isko`"Tamplate litrals"kehte h 
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });