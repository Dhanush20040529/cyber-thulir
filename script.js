const phrases = [
  "Welcome to Cyber Arena",
  "Hack. Learn. Repeat.",
  "Master Cybersecurity Challenges",
  "Capture the Flag. Rule the Board."
];

const typewriter = document.getElementById("typewriter");
const cursor = document.querySelector(".cursor");

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let sound = new Audio("sounds/key.mp3"); // Optional: Add your own .mp3

function glitch() {
  typewriter.classList.add("glitch");
  typewriter.setAttribute("data-text", typewriter.textContent);
  setTimeout(() => typewriter.classList.remove("glitch"), 200);
}

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];
  const visibleText = currentPhrase.substring(0, currentCharIndex);
  typewriter.textContent = visibleText;

  if (!isDeleting && currentCharIndex < currentPhrase.length) {
    currentCharIndex++;
    if (sound) sound.play(); // play keystroke sound
    setTimeout(typeEffect, 80);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(typeEffect, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      glitch(); // trigger glitch on phrase change
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 800);
});
