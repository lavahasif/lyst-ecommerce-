// only for touch device
// const slider = document.querySelector("body > section.detail > div > div.bac1");
// let isDown = false;
// let startX;
// let scrollLeft;
let starty = 0;
slider.addEventListener("touchstart", (e) => {
  isDown = true;
  slider.classList.add("active");
  var df = 0;
  for (let i = 0; i < e.changedTouches.length; i++) {
    df = e.changedTouches[i].pageX;
    startX = df - slider.offsetLeft;
    starty = e.changedTouches[i].pageY;
    // console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
    // console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
  }
  startX = df - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("touchcancel", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("touchend", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener(
  "touchmove",
  (e) => {
    // if (!isDown) return;
    // e.preventDefault();

    var myx = 0;
    //   console.log(e.changedTouches.length);
    for (let i = 0; i < e.changedTouches.length; i++) {
      myx = e.changedTouches[i].pageX;
      // console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
      // console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
    }
    var x = myx - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    //   console.log(` x ${x}`);
    //   console.log(` walk ${walk}`);
    //   console.log(` slider.scrollLeft ${scrollLeft}`);
    //   console.log(` slider.scrollLeft ${slider.scrollLeft}`);
  },
  { passive: false }
);
// slde2

slider2.addEventListener("touchstart", (e) => {
  isDown2 = true;
  slider2.classList.add("active");
  var df = 0;
  for (let i = 0; i < e.changedTouches.length; i++) {
    df = e.changedTouches[i].pageX;
    startX = df - slider2.offsetLeft;
    // console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
    // console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
  }
  startX = df - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;
});
slider2.addEventListener("touchcancel", () => {
  isDown2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("touchend", () => {
  isDown2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener(
  "touchmove",
  (e) => {
    // if (!isDown2) return;
    // e.preventDefault();

    var myx = 0;
    //   console.log(e.changedTouches.length);
    for (let i = 0; i < e.changedTouches.length; i++) {
      myx = e.changedTouches[i].pageX;
      // console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
      // console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
    }
    var x = myx - slider2.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider2.scrollLeft = scrollLeft2 - walk;
    //   console.log(` x ${x}`);
    //   console.log(` walk ${walk}`);
    //   console.log(` slider2.scrollLeft ${scrollLeft2}`);
    //   console.log(` slider2.scrollLeft ${slider2.scrollLeft}`);
  },
  { passive: false }
);
