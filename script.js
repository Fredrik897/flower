/* =========================================
   MESSAGES
========================================= */

const messages = [
  "Hello 🌱",

  "How are you? 🌷",

  "Do your best ✨",

  "Don't give up 💗",

  "Trust the process 🌸",
];

/* =========================================
   ELEMENTS
========================================= */

const button = document.getElementById("boostButton");

const messageText = document.getElementById("messageText");

const petals = document.querySelectorAll(".petal");

const center = document.querySelector(".center");

const flowerHead = document.querySelector(".flower-head");

const scene = document.querySelector(".scene");

/* =========================================
   STATE
========================================= */

let clickCount = 0;

/* =========================================
   CLICK
========================================= */

button.addEventListener("click", function () {
  /* ===============================
           STOP AFTER FLOWER IS COMPLETE
        =============================== */

  if (clickCount >= 5) {
    return;
  }

  /* ===============================
           BUTTON ANIMATION
        =============================== */

  button.classList.remove("button-click");

  void button.offsetWidth;

  button.classList.add("button-click");

  /* ===============================
           SPARKLE
        =============================== */

  scene.classList.remove("sparkle");

  void scene.offsetWidth;

  scene.classList.add("sparkle");

  /* ===============================
           MESSAGE
        =============================== */

  messageText.classList.remove("message-animate");

  void messageText.offsetWidth;

  messageText.textContent = messages[clickCount];

  messageText.classList.add("message-animate");

  /* ===============================
           FLOWER PETAL
        =============================== */

  petals[clickCount].classList.add("show");

  /* ===============================
           NEXT STEP
        =============================== */

  clickCount++;

  /* ===============================
           FINAL BLOOM
        =============================== */

  if (clickCount === 5) {
    setTimeout(function () {
      /* Flower center */

      center.classList.add("show");

      /* Gentle flower movement */

      flowerHead.classList.add("bloomed");
    }, 500);

    /* Change button */

    setTimeout(function () {
      button.textContent = "The flower is blooming 🌸";

      button.classList.add("finished");
    }, 700);

    /* Remove button after a while */

    setTimeout(function () {
      button.style.opacity = "0";

      button.style.transform = "translateY(10px)";

      button.style.pointerEvents = "none";
    }, 2500);
  }
});
