/* PAGE 1 TYPING */

let openingText = "Today is very special ❤️";
let i = 0;
let typingEl = document.getElementById("typing");

function typeOpening() {
  if (i < openingText.length) {
    typingEl.innerHTML += openingText[i];
    i++;
    setTimeout(typeOpening, 70);
  }
}

typeOpening();

/* PAGE NAVIGATION */

function goToPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");

  if (n === 4) {
    startFinalMessage();
  }
}

function noOption() {
  alert("Some days take time to realize ❤️");
}

/* PHOTO SLIDER */

let photos = [
  "images/img1.jpeg",
  "images/img2.jpeg",
  "images/img3.jpeg",
  "images/img4.jpeg",
  "images/img5.jpeg"
];

let photoIndex = 0;
let photoEl = document.getElementById("photo");
let countEl = document.getElementById("photoCount");

function updatePhoto() {
  photoEl.src = photos[photoIndex];
  countEl.innerText = `Photo ${photoIndex + 1} of ${photos.length}`;
}

function nextPhoto() {
  photoIndex = (photoIndex + 1) % photos.length;
  updatePhoto();
}

function prevPhoto() {
  photoIndex = (photoIndex - 1 + photos.length) % photos.length;
  updatePhoto();
}

updatePhoto();

/* FINAL MESSAGE */

let finalText =
  "You are not special only today.\n" +
  "You are special every single day.\n\n" +
  "Happy Birthday, Frd world ❤️";

let j = 0;

function startFinalMessage() {
  let el = document.getElementById("finalMessage");
  el.innerHTML = "";
  j = 0;

  function typeFinal() {
    if (j < finalText.length) {
      el.innerHTML += finalText[j] === "\n" ? "<br>" : finalText[j];
      j++;
      setTimeout(typeFinal, 60);
    }
  }

  typeFinal();
}

