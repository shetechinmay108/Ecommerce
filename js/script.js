const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function goToCandlePage() {
  window.location.href = "../html/candle/candle.html";
}
function goToPerfumePage() {
  window.location.href = "../html/perfume/perfume.html";
}
function goToFragence() {
  window.location.href = "../html/Air Fragrance/air_fragence.html";
}
function goToBundles() {
  window.location.href = "../html/Bundles.HTML";
}
function goToSubscr() {
  window.location.href = "../html/Subscribe.html";
}
function goToPay(){
  window.location.href="../html/payment.html"
}
document.querySelector(".marquee").addEventListener("mouseenter", () => {
  document.querySelector(".marquee").style.cursor = "pointer";
});

gsap.to(".marquee-part1", {
  transform: "translateX(-100%)",
  // delay:1,
  duration: 20,
  repeat: -1,
  ease: "none",
});


document.querySelector('#Close').addEventListener('click',()=>{
  gsap.to(".card-section",{
    right:'-45%',
    duration:1.5,
    ease:'slow'
  })
})
document.querySelector('.card').addEventListener('click',()=>{
  gsap.to('.card-section',{
    right:0,
    duration:1.5
  })
})
