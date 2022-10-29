//#region slider
let slides = document.getElementById('slides').children

let currentSlide = 1000;
let nextSlide = 0;

function slide() {
   next = slides[nextSlide]
   current = slides[currentSlide]

   const t1 = gsap.timeline({ paused: true, defaults: { Easings: Expo.EaseOut } })
   
   if (current) {
      t1.to(current.querySelector('.fade-in'), { opacity: 0, scale: 0.1, duration: 0.3 })
         .to(current.querySelector('button'), { opacity: 0, scale: 0.1, duration: 0.4 }, '+=0.1')
         .to(current, { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' })
   }
   t1.fromTo(next, { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'}, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1 }, '-=1.5')
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
setInterval(slide, 10000)
//#endregion

//#region intersection observer
gsap.set(".slide-in-top", { y: 200, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' });
gsap.set(".slide-in-right", { x: -400, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' });
gsap.set(".slide-in-left", { x: 400, clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)' });
gsap.set('.fade-in', { opacity: 0, scale: 0.9 })
gsap.set('.pop-in', { opacity: 0.5, scale: 0.2 })

ScrollTrigger.batch('.trigger', {
   onEnter: (batch) => {
      slideElements = batch[0].querySelectorAll('.slide-in-top')
      slideRightElements = batch[0].querySelectorAll('.slide-in-right')
      slideLeftElements = batch[0].querySelectorAll('.slide-in-left')
      fadeElements = batch[0].querySelectorAll('.fade-in')
      popElements = batch[0].querySelectorAll('.pop-in')

      gsap.to(slideElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0, stagger: 0.2, duration: 1 })
      gsap.to(slideRightElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', x: 0, stagger: 0.2, duration: 1 })
      gsap.to(slideLeftElements, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', x: 0, stagger: 0.2, duration: 1 })
      gsap.to(fadeElements, { opacity: 1, scale: 1, stagger: 0.2, duration: 0.5 })
      gsap.to(popElements, { opacity: 1, scale: 1, stagger: 0.2, duration: 0.5 })
   },
   start: '300px bottom',
   // markers: true
})
// t2.play()
//#endregion

//#region mobile nav
const hamburger = document.querySelector('#hamburger')
const closeMenu = document.querySelector('#close-menu')
const smMenu = document.querySelector('#nav-sm')

nav_is_visible = false

hamburger.addEventListener('click', () => {
   toggleNav()
})
closeMenu.addEventListener('click', () => {
   toggleNav()
})

// default state on load
gsap.set(smMenu, { clipPath: 'circle(0)', transition: 'clip-path .5s ease-out', duration: 1 })

const NavTL = gsap.timeline({ defaults: { Easings: Expo.EaseOut } })

function toggleNav() {
   if (nav_is_visible) {
      NavTL.to(smMenu, { clipPath: 'circle(0)', duration: .5 })
      NavTL.play()
   } else {
      NavTL.fromTo(smMenu, { clipPath: 'circle(0%)' }, { clipPath: 'circle(100%)', duration: .5 })
      NavTL.play()
   }
   nav_is_visible = !nav_is_visible
}
//#endregion

