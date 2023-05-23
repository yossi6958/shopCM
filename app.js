let selectOption = document.querySelectorAll("select");
let option = selectOption.value;
let displaySlide = document.querySelector(".slideshow-all");

let imageObj = [
  {
    id: 1,
    images: [
      "./images/black-black.jpg",
      "./images/black-black-lies.jpg",
      "./images/black-gold.jpg",
    ],
    currrentIndex: 0,
    color: "black",
  },
  {
    id: 2,
    images: ["./images/white-gold-up.jpg", "./images/white-gold.jpg"],
    currrentIndex: 0,
    color: "white",
  },
  {
    id: 3,
    images: ["./images/brown-gold.jpg", "./images/brown-detail.jpg"],
    currrentIndex: 0,
    color: "brown",
  },
];

function filterByColorOption() {
  let colorCategory = document.querySelector("#color").value;
  let items = document.querySelectorAll(".slide-card");

  Array.from(items).forEach((element) => {
    element.style.display = colorCategory === "all" ||
      element.getAttribute("data-color") === colorCategory ? "block" : "none";
  });
}

function changeImageToRight(Id) {
  let select = imageObj.find((select) => select.id === Id);
  if (select) {
    let currentImage = document.querySelector(`#slideshow-image${Id}`);
    currentImage.style.opacity = 0;
    select.currrentIndex = (select.currrentIndex + 1) % select.images.length;
    let newImageSource = select.images[select.currrentIndex];
    currentImage.onload = function () {
      currentImage.src = newImageSource;
      currentImage.style.opacity = 1;
    };
    currentImage.src = newImageSource;
  }
}

function changeImageToLeft(Id) {
  let select = imageObj.find((select) => select.id === Id);
  if (select) {
    let currentImage = document.querySelector(`#slideshow-image${Id}`);
    currentImage.style.opacity = 0;
    select.currrentIndex =
      (select.currrentIndex - 1 + select.images.length) % select.images.length;
    let newImageSource = select.images[select.currrentIndex];
    currentImage.onload = function () {
      currentImage.src = newImageSource;
      currentImage.style.opacity = 1;
    };
    currentImage.src = newImageSource;
  }
}
