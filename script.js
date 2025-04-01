const checkbox = document.getElementById("task1");
const text = document.getElementById("task1-text");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // Confetti blast!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    console.log("Checked! 🎉");
  }
});
