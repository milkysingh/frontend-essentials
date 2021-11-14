const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");
const cardButtons = document.querySelectorAll(".card button");
const handleCardButtonClick = (e) => {
  const card = e.currentTarget.closest(".card");
  const img = card.querySelector("img").src;
  const { description } = card.dataset;
  const name = card.querySelector("h2").textContent;
  modalInner.innerHTML = `
  <img width="600" height="600" src="${img.replace(
    "200",
    "600"
  )}" alt="${name}" />
  <p>${description}</p>
`;
  modalOuter.classList.add("open");
};
const closeModal = () => {
  modalOuter.classList.remove("open");
};

cardButtons.forEach((button) => {
  button.addEventListener("click", handleCardButtonClick);
});

modalOuter.addEventListener("click", function (e) {
  //   console.log(modalInner, e.target);
  //   console.log(modalInner.contains(e.target)); //secondary method
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

console.log({ cardButtons });
