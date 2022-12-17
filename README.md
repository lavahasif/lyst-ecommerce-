# og

https://www.lyst.com/

![image](https://user-images.githubusercontent.com/22430922/208054099-940703c7-d69b-4476-9a1a-afc743ecdd2e.png)

https://lavahasif.github.io/lyst-ecommerce-/

# lyst-ecommerce-

![image](https://user-images.githubusercontent.com/22430922/208053920-507b2b9d-cc58-425d-8ef9-b0fe28192684.png)

# Refrence

sliding
https://codepen.io/thenutz/pen/VwYeYEE

## position

https://www.w3schools.com/css/css_positioning.asp

### Normal Horizontal scorlling

```js
// slde2
const slider2 = document.querySelector(
  "body > section.detail > div > div.bac2"
);
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener("mousedown", (e) => {
  isDown2 = true;
  slider2.classList.add("active");
  startX2 = e.pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;
});
slider2.addEventListener("mouseleave", () => {
  isDown2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("mouseup", () => {
  isDown2 = false;
  slider2.classList.remove("active");
});
slider2.addEventListener("mousemove", (e) => {
  if (!isDown2) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const walk = (x - startX2) * 3; //scroll-fast
  slider2.scrollLeft = scrollLeft2 - walk;
  console.log(walk);
});
```

### mobile touch scorlling

```js
slider.addEventListener("touchstart", (e) => {
  isDown = true;
  slider.classList.add("active");
  var df = 0;
  for (let i = 0; i < e.changedTouches.length; i++) {
    df = e.changedTouches[i].pageX;
    startX = df - slider.offsetLeft;
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
slider.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();

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
});
```
