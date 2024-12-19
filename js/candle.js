const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  
  function goToCandle1() {
    window.location.href = "../candle/candle1.html";
  }
  function goToCandle2() {
    window.location.href = "../candle/candle2.html";
  }
  function goToCandle3() {
    window.location.href = "../candle/candle3.html";
  }



  gsap.to(".marquee-part1",{
    transform:"translateX(-100%)",
    // delay:1,
    duration:20,
    repeat:-1,
    ease:"none"
  })


 
  document.querySelector(".marquee").addEventListener("mouseenter", () => {
    document.querySelector(".marquee").style.cursor = "pointer";
  });