/* ---------- PAGE 1 TYPING ---------- */
let openingText = "Today is 12/2/2026 💖\nIt’s very special for me";
let i = 0;
let typingEl = document.getElementById("typing");

function typeOpening() {
  if (i < openingText.length) {
    typingEl.innerHTML += openingText[i] === "\n" ? "<br>" : openingText[i];
    i++;
    setTimeout(typeOpening, 70);
  }
}
typeOpening();

/* ---------- PAGE NAVIGATION ---------- */
function goToPage(n) {
  document.querySelectorAll(".page").forEach(p =>
    p.classList.remove("active")
  );
  document.getElementById("page" + n).classList.add("active");

  if (n === 4) {
    startFinalMessage();
  }
}

/* ---------- NO OPTION ---------- */
function noOption() {
  alert("It’s okay… some days take time to realize ❤️");
}

/* ---------- PHOTO SLIDER (5 PHOTOS) ---------- */
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
  photoEl.style.opacity = 0;
  setTimeout(() => {
    photoEl.src = photos[photoIndex];
    countEl.innerText = `Photo ${photoIndex + 1} of ${photos.length}`;
    photoEl.style.opacity = 1;
  }, 300);
}

updatePhoto();

function nextPhoto() {
  photoIndex = (photoIndex + 1) % photos.length;
  updatePhoto();
}

function prevPhoto() {
  photoIndex = (photoIndex - 1 + photos.length) % photos.length;
  updatePhoto();
}

/* ---------- FINAL MESSAGE ---------- */
let finalText =
  "ನೀನು ನನ್ನ ಜೀವನಕ್ಕೆ ಬಂದದ್ದು\n" +
  "ಒಂದು ಅದೃಷ್ಟದ ಕ್ಷಣ...\n\n" +
  "ನಿನ್ನ ನಗು ನನ್ನ ಸಂತೋಷ,\n" +
  "ನಿನ್ನ ಖುಷಿ ನನ್ನ ಶಾಂತಿ ❤️\n\n" +
  "ಹುಟ್ಟುಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು Frd World 💕";



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
