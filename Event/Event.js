// const grandparent = document.querySelector(".grandparent");

// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent");
//   },
//   { capture: true }
// );

// parent.addEventListener("click", (e) => {
//   console.log("parent");
// });
// child.addEventListener("click", (e) => {
//   console.log("child");
// });
// document.addEventListener("click", (e) => {
//   console.log("document1");
// });
const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    console.log("coding is sweet");
  });
});
const newDiv = document.createElement("div");
newDiv.style.width = "20px";
