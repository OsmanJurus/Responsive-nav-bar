// Now it's the time to work js

let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

/**short hand way! */
const common = (x, y, z) => {
  /**in the first call: X: for open , Y: for close
   * in the second call: vise-verse
   */
  x.addEventListener("click", () => {
    x.classList.toggle("hide");
    y.classList.toggle("hide");

    if (z === "slide-in") {
      menu.classList.toggle("slide");
    } else if (z === "slide-out") {
      menu.classList.toggle("slide");
    }
  });
};


common(open, close, "slide-in");
common(close, open, "slide-out");

/** logn hand way!*/
/*
open.addEventListener("click", () => {
  menu.classList.remove("slide");
  open.classList.toggle("hide");
  close.classList.toggle("hide");
});

close.addEventListener("click", () => {
  open.classList.toggle("hide");
  close.classList.toggle("hide");
  menu.classList.add("slide");
});
*/
