const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  gsap.to(".marquee-part1",{
    transform:"translateX(-100%)",
    // delay:1,
    duration:20,
    repeat:-1,
    ease:"none"
  })
  // function goToSubscribe() {
  //   window.location.href = "../Subscribe.html";
  // }
  document.querySelector(".marquee").addEventListener("mouseenter", () => {
    document.querySelector(".marquee").style.cursor = "pointer";
  });


  document.addEventListener('DOMContentLoaded', () => {
    const totalProducts = document.getElementById('total-products');
    totalProducts.textContent = localStorage.getItem('totalProducts') || 0;
});

document.addEventListener('DOMContentLoaded', () => {
  const totalProducts = document.getElementById('total-products');
  totalProducts.textContent = localStorage.getItem('totalProducts') || 0;
});

document.querySelector('.product').addEventListener('click',()=>{
  gsap.to(".card-section",{
    right:'0%',
    duration:1.5,
    ease:'slow'
  })
})
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