/* =========================================
   MESSAGES
========================================= */

const messages = [
  "Hello 🌱",

  "How are you? 🌷",

  "Do your best ✨",

  "Keep going 🌻",

  "Don't give up 💗",
];

/* =========================================
   ELEMENTS
========================================= */

const button = document.getElementById("boostButton");

const messageText = document.getElementById("messageText");

const messageBox = document.getElementById("messageBox");

const petals = document.querySelectorAll(".petal");

const center = document.querySelector(".center");

const flowerHead = document.querySelector(".flower-head");

const flower = document.querySelector(".flower");

const scene = document.querySelector(".scene");

/* =========================================
   STATE
========================================= */

let clickCount = 0;

/* =========================================
   BUTTON CLICK
========================================= */

button.addEventListener("click", function () {
  /* ===============================
           STOP AFTER FINAL
        =============================== */

  if (clickCount >= 5) {
    return;
  }

  /* ===============================
           BUTTON PULSE
        =============================== */

  button.classList.remove("button-click");

  void button.offsetWidth;

  button.classList.add("button-click");

  /* ===============================
           SPARKLES
        =============================== */

  scene.classList.remove("sparkle");

  void scene.offsetWidth;

  scene.classList.add("sparkle");

  /* ===============================
           RESET MESSAGE ANIMATION
        =============================== */

  messageText.classList.remove("message-animate");

  messageText.classList.remove("final-message");

  messageBox.classList.remove("message-pop");

  void messageText.offsetWidth;

  /* ===============================
           CHANGE MESSAGE
        =============================== */

  messageText.textContent = messages[clickCount];

  messageText.classList.add("message-animate");

  /* ===============================
           MESSAGE BOX POP
        =============================== */

  void messageBox.offsetWidth;

  messageBox.classList.add("message-pop");

  /* ===============================
           BLOOM ONE PETAL
        =============================== */

  petals[clickCount].classList.add("show");

  /* ===============================
           UPDATE CLICK COUNT
        =============================== */

  clickCount++;

  /* =================================
           FINAL MOMENT
           DON'T GIVE UP 💗
        ================================= */

  if (clickCount === 5) {
    /* ---------------------------
               Make final message bigger
            --------------------------- */

    setTimeout(function () {
      messageText.classList.remove("message-animate");

      void messageText.offsetWidth;

      messageText.classList.add("final-message");
    }, 850);

    /* ---------------------------
               Flower center appears
            --------------------------- */

    setTimeout(function () {
      center.classList.add("show");
    }, 700);

    /* ---------------------------
               Flower glow
            --------------------------- */

    setTimeout(function () {
      flower.classList.add("glowing");
    }, 900);

    /* ---------------------------
               Gentle flower movement
            --------------------------- */

    setTimeout(function () {
      flowerHead.classList.add("bloomed");
    }, 1200);

    /* ---------------------------
               Change button
            --------------------------- */

    setTimeout(function () {
      button.querySelector(".button-icon").textContent = "🌸";

      button.querySelector(".button-text").textContent = "You got this";

      button.classList.add("finished");
    }, 900);

    /* ---------------------------
               Hide button
            --------------------------- */

    setTimeout(function () {
      button.style.opacity = "0";

      button.style.transform = "translateY(12px)";

      button.style.pointerEvents = "none";
    }, 3000);
  }
});
