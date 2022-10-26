//#region slider
let slides = document.getElementById('slides').children

// console.log(slides);

let currentSlide = 1000;
let nextSlide = 0;


function slide() {
   next = slides[nextSlide]
   current = slides[currentSlide]

   const t1 = gsap.timeline({ paused: true, defaults: { Easings: Expo.EaseOut } })
   
   if (current) {
      t1.to(current.querySelector('.fade-in'), { opacity: 0, scale: 0.1, duration: 0.5 })
         .to(current.querySelector('button'), { opacity: 0, scale: 0.1, duration: 0.5 }, '+=0.1')
         .to(current, { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' })
   }
   t1.fromTo(next, { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'}, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1 }, '-=1')
      .to(next.querySelector('.fade-in'), { opacity: 1, scale: 1, duration: 0.5 }, '+=0.1')
      .to(next.querySelector('button'), { opacity: 1, scale: 1, duration: 0.5 }, '+=0.1')
      
   
   t1.play()
   // switch next and previous slides
   switchSlides()
}

function switchSlides() {
   max = slides.length-1
   if (nextSlide == max) {
      currentSlide = nextSlide
      nextSlide = 0
   }
   else {
      currentSlide = nextSlide
      nextSlide += 1
   }
}

slide()
setInterval(slide, 20000)
//#endregion


