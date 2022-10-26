let slides = document.getElementById('slides')

console.log(slides.children[1].nextElementSibling);


function slide() {
   const t1 = gsap.timeline({ paused: false, defaults: { Easings: Expo.EaseOut }, stagger: 6 })

   t1.to(".slide", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', zIndex: 2 })
   .from(".text h2", { opacity: 0, duration: 2 })
   
   t1.play()
}

slide()