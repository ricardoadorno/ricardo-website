AOS.init();

// * Add mail.js to the list of modules to load
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps

      emailjs.sendForm("service_pbvy79m", "template_9azbpwg", this).then(
        function () {
          document.getElementById("contact-form").innerHTML =
            "Message sent successfully!";
        },
        function (error) {
          console.log(error);
          document.getElementById("contact-form").innerHTML =
            "Oops... Something went wrong.";
        }
      );
    });
};

// * i18n
const langSelector = document.getElementById("lang-selector");
// first load
if (!localStorage.getItem("lang")) {
  detectLang();
}

function detectLang() {
  var lang = navigator.languages;
  console.log(lang);
  lang.map((element) => {
    if (element === "pt-BR" || element === "pt") {
      localStorage.setItem("lang", "pt");
      window.location.href = "index-pt.html";
    } else if (element === "en-US" || element === "en") {
      localStorage.setItem("lang", "en");
    }
  });
}

langSelector.addEventListener("change", changeLang);
// change index.html to index-pt.html with a input select
function changeLang() {
  if (langSelector.value === "pt") {
    window.location.href = "index-pt.html";
    localStorage.setItem("lang", "pt");
  } else if (langSelector.value === "en") {
    window.location.href = "index.html";
    localStorage.setItem("lang", "en");
  }
}

// * Handle theme schema
const body = document.querySelector("body");
const menuToggle = document.querySelector(".toggle--theme");

// detect user prefered color scheme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// check if user has set a preference
if (prefersDarkScheme.matches) {
  body.classList.add("dark--theme");
  menuToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
} else {
  body.classList.add("light--theme");
  menuToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

menuToggle.addEventListener("click", () => {
  body.className = body.classList.contains("dark--theme")
    ? "light--theme"
    : "dark--theme";

  if (body.classList.contains("dark--theme")) {
    menuToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});
