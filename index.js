const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});

const cursor = document.getElementById("cursor");
const mouse1 = document.getElementById("mouse1");
const mouse2 = document.getElementById("mouse2");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.y + "px";
  cursor.style.left = e.x + "px";

  mouse1.style.top = e.y + "px";
  mouse1.style.left = e.x + "px";

  mouse2.style.top = e.y + "px";
  mouse2.style.left = e.x + "px";
});
