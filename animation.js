const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button ")

//fade out on load

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function(){
  let delay = 0.25
  //go through tags and use getBoundingClientRect to see if it is in the window
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if(tagTop < window.innerHeight && tagBottom > 0){
      tag.style.animation = `fadein 1s ${delay}s both`
      delay += 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }

  })
}

//run on page load
fadeIn()

//run on scroll
document.addEventListener('scroll', function(){
  fadeIn()
})

//run on browser resize

window.addEventListener('resize', function(){
  fadeIn()
})
