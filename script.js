"use strict";

const footerSvgContainer = document.querySelector(".footer-svg");
const allStars = document.querySelectorAll(".bi-star");
let selectedStars = 0;

window.addEventListener('resize', () => {
  setTimeout(()=>{ footerSvgContainer.style.display = "block"; }, 50)
footerSvgContainer.style.display = "none";
});

window.addEventListener('load', () => {
  const contentContainer = document.querySelector(".website-content");
  contentContainer.style.display = "none";
  setTimeout(() => {
    contentContainer.style.display = "block";
  }, 3000);
  setTimeout(() => {
    document.querySelector(".onload-animation-container").remove();
    document.querySelector(".hero-bg-temp").remove();
  }, 6000);
});


const resetAllStars = () => {
  for (let i = 0; i < allStars.length; i++) {
    allStars[i].classList.remove("bi-star-fill");
    allStars[i].classList.remove("bi-star");
    allStars[i].classList.add("bi-star");
  }
}

const setFilledStarts = x => {
  resetAllStars();
  for (let i = 0; i < x; i++) {
    allStars[i].classList.add("bi-star-fill");
    allStars[i].classList.remove("bi-star");
  }
}

for(let i = 0; i < allStars.length; i++) {
  allStars[i].addEventListener("click", () => {
    selectedStars = i + 1;
    setFilledStarts(selectedStars);
  });

  allStars[i].addEventListener("mouseover", () => {
    setFilledStarts(i + 1);
    for(let ii = 0; ii <= i; ii++) {
      allStars[ii].style.opacity = "0.7"
    }
  });

  allStars[i].addEventListener("mouseout", () => {
    setFilledStarts(selectedStars);
    for(let ii = 0; ii < allStars.length; ii++) {
      allStars[ii].style.opacity = "1"
    }
  });


}

