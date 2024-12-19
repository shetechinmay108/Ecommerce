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
  function goToSubscribe() {
    window.location.href = "../html/Subscribe.html";
  }
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
  console.log("hii")
  gsap.to('.card-section',{
    right:0,
    duration:1.5
  })
})
  function goToDiscoverPage(){
    window.location.href="../perfume/Discovery Set.html"
  }
  function goToKirraOil(){
    window.location.href="../perfume/Kirra Curl Oil Parfum.html"
  }
  function goToMIkau(){
    window.location.href="../perfume/Mikado Bark Parfum.html"
  }

  function goToSienna(){
    window.location.href="../perfume/Sienna Brume Parfum.html"
  }
  function goToGuilty(){
    window.location.href="../perfume/Guilty Story Parfum.html"
  }
  function goToPertrichor(){
    window.location.href="../perfume/Petrichor Plains Parfum.html"
  }
  function goToMunlark(){
    window,location.href="../perfume/Munlark Ash Parfum.html"
  }
  function goToKirra(){
    window.location.href="../perfume/Kirra Curl Parfum.html"
  }