// ===== AOS Animation Init =====
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ===== Typing Effect =====
const typingElement = document.querySelector(".typing");
const texts = [
  "AWS Certified Cloud Practitioner",
  "Cybersecurity (CISCO Certified)",
  "Java Developer",
  "Cloud Computing Enthusiast",
  "AI & Machine Learning"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();
