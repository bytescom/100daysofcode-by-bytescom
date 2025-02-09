
// This part of js id for modal part
// const openModalBtn = document.querySelector(".modal-click-btn");
// const modalBackground = document.querySelector(".modal-bg");
// const closeIcon = document.querySelector(".close");
// const okBtn = document.querySelector(".ok");

// openModalBtn.addEventListener("click", () => {
//   modalBackground.style.display = "block";
// });

// closeIcon.addEventListener("click", () => {
//   modalBackground.style.display = "none";
// });

// okBtn.addEventListener("click", () => {
//   modalBackground.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   console.log(event.target);
//   if (event.target === modalBackground) {
//     modalBackground.style.display = "none";
//   }
// });


// This part of js id for modal part
const tabContainer = document.querySelector(".tabs-container");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".content");

tabContainer.addEventListener("click", (event) => {
  console.log(event.target.dataset);
  const currentId = event.target.dataset.id;

  if (currentId) {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    event.target.classList.add("active");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
