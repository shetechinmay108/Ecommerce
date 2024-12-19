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
