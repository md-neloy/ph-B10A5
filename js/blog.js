document.getElementById("home").addEventListener("click", () => {
  location.href = "/ph-B10A5/index.html";
});
// sticky navbar
const header = document.getElementsByTagName("header")[0];
const menubar = document.getElementById("menubar");
window.addEventListener("scroll", (e) => {
  let value = window.scrollY;
  if (value < 40) {
    menubar.classList.add("bg-[rgba(249,247,243)]");
  } else {
    console.log("hi");
    menubar.classList.remove("bg-[rgba(249,247,243)]");
    header.classList.add("bg-[rgba(255,255,255,0.7)]");
    menubar.classList.add("bg-[rgba(249,247,243,0.7)]");
  }
});
