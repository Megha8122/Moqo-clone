// gsap.registerPlugin(ScrollTrigger);


// // --- SETUP START ---
// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.defaults({ scroller: "#main" });
// // --- SETUP END ---
// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();



var tl = gsap.timeline();

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        console.log(a)
        }
        else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        console.log(a)
        }
    },150)
}
time()

tl.to("page1 h1",{
    scale:1.5,
    
})
tl.to('#loader',{
    top:"-100vh",
    delay:0.5,
    duration:1,
    onStart:time()
})

tl.to("#page1 h1",{
    transform: "translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})