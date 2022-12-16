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
