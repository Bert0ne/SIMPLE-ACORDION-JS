"use strict";
let acc = [...document.querySelectorAll(".accordion")]; //putting node list of acc to an array to able manipulate and receive index
let pans = [...document.querySelectorAll(".panel")];
let i;

for (const [i, w] of acc.entries()) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    //! first way of change panel view
    /* Toggle between hiding and showing the active panel */
    // let panel = this.nextElementSibling;
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }

    //! Second way of change panel view
    const pan = acc.indexOf(w);

    if (pans[pan].style.maxHeight) {
      pans[pan].style.maxHeight = null;
    } else {
      pans[pan].style.maxHeight = "40px";
    }
  });
}

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
