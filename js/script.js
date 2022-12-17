var id = setInterval(frame, 1000);
var img = document.getElementById("slider");
function frame() {
  //   debugger;
  var im = "https://cdna.lystit.com/cms/YIF_Banner_XL_Desktop_76bdba2aa5.jpg";

  var im2 = "https://cdna.lystit.com/cms/EN_XL_1be4462434.png";
  if (img.src == im2) img.src = im;
  else img.src = im2;
}

img.addEventListener("mouseover", (e) => {
  clearInterval(id);
});
img.addEventListener("mouseleave", (e) => {
  id = setInterval(frame, 2000);
});
var imgs = [
  "https://cdna.lystit.com/cms/0d04b456_fa24_42aa_9d35_c7008854e970_e4c36405b2.png",
  "https://cdna.lystit.com/cms/3c3d3937_f1dd_427c_ae5f_8a9cbb0788ee_45b3b02667.png",
  "https://cdna.lystit.com/cms/600x600_Affiliate_Prada_Holiday_BU_1_1_e41fdd0245.jpg",
];
// horizontal scroll slide1
const slider = document.querySelector("body > section.detail > div > div.bac1");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
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
