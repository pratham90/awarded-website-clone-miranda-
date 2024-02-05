const scroll = new LocomotiveScroll({
    el: document.querySelector('.main '),
    smooth: true
});
function load(){
var tl= gsap.timeline()
tl.to(".page1",{
    y:"100vh",
    scale:0.4,
    duration:0
   
})

tl.to(".page1",{
    y:"-65vh",
    duration:2,
    
})
tl.to(".page1",{
    rotate:360,
    y:"0vh",
    scale:1,
    duration:2
})
}
load()
