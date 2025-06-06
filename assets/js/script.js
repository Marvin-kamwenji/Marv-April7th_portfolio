// Color variables setup
let lightMode = "white";
let darkMode = "#050C17";
let darkMode2 = "#181E28";
let darkModeText = "white";
let alternateColor = "#f8bc17";
let btnColor = "#994FF5";
let btnColorDark = "#8131e3";
let grayBorder = "#b4b8c687";
let lightModeText = "#050C17";

// DOM Variable Initialization
let themeSwitch = document.querySelector(".theme-switch");
let switchIconMoon = document.querySelector(".fa-moon");
let switchIconSun = document.querySelector(".fa-sun");

switchIconSun.style.display = "none";
switchIconMoon.style.display = "block";


themeSwitch.addEventListener("click", () => {
    let mode = switchIconSun.style.display == "none" ? "day" : "night";
    if (mode == "day") {
        switchIconMoon.style.display = "none";
        switchIconSun.style.display = "block";
        themeSwitch.style.backgroundColor = grayBorder;
        activateNightLight();
    } else {
        switchIconSun.style.display = "none";
        switchIconMoon.style.display = "block";
        themeSwitch.style.backgroundColor = "#0EA5E9";
        activateDayLight();
    }
});

// Night Light Theme implementation
function activateNightLight () {
    document.querySelector(".hero-content").style.backgroundColor = darkMode;
    document.querySelector(".hero").style.backgroundColor = darkMode;
    document.querySelector(".resume-container").style.backgroundColor = darkMode;
    document.querySelector("#resume").style.backgroundColor = darkMode;
    document.querySelector("#projects").style.backgroundColor = darkMode;
    document.querySelector("#services").style.background = "linear-gradient(to bottom, rgba(65, 56, 56, 0.81),rgba(101, 77, 10, 0.64), rgba(65, 56, 56, 0.81))";
    document.querySelector("#contact").style.backgroundColor = darkMode2;
    document.querySelector(".footer-eclipse").style.backgroundColor = "#592e8d";
    document.querySelector("footer").style.backgroundColor = darkMode2;
    document.querySelector("#about").style.backgroundColor = darkMode2;
    document.querySelector(".skill-list").style.backgroundColor = darkMode2;
    document.querySelector("#skills-title").style.color = alternateColor;
    document.querySelector("#cert-title").style.color = alternateColor;
    document.querySelector("h2").style.color = darkModeText;
    document.querySelectorAll(".view-link").forEach(link => {
        link.style.color = darkModeText;
      });
    document.querySelectorAll(".personal-summary h4").forEach(link => {
        link.style.color = darkModeText;
      });
    document.querySelector(".title").style.color = lightModeText;
    document.querySelectorAll(".project-button-container button").forEach(link => {
        link.style.color = darkModeText;
      });
    document.querySelector(".contact-form").style.backgroundColor = darkMode;
    document.querySelectorAll(".contact-form input").forEach(link => {
        link.style.backgroundColor = "#c4c2c2";
      });
    document.querySelector("#contact-form-textarea").style.backgroundColor = "#c4c2c2";
}

// Day Light Theme implementation
function activateDayLight () {
    document.querySelector(".hero-content").style.backgroundColor = lightMode;
    document.querySelector(".hero").style.backgroundColor = lightMode;
    document.querySelector(".resume-container").style.backgroundColor = lightMode;
    document.querySelector("#resume").style.backgroundColor = lightMode;
    document.querySelector("#projects").style.backgroundColor = lightMode;
    document.querySelector("#services").style.background = "linear-gradient(90deg, #f8bc17a3, rgba(196, 193, 193, 0.811))";
    document.querySelector("#contact").style.backgroundColor = darkMode;
    document.querySelector(".footer-eclipse").style.backgroundColor = btnColor;
    document.querySelector("footer").style.backgroundColor = darkMode;
    document.querySelector("#about").style.backgroundColor = darkMode;
    document.querySelector(".skill-list").style.backgroundColor = "#F4F4F6";
    document.querySelector("#skills-title").style.color = lightModeText;
    document.querySelector("#cert-title").style.color = lightModeText;
    document.querySelector("h2").style.color = lightModeText;
    document.querySelectorAll(".view-link").forEach(link => {
        link.style.color = lightModeText;
      });
    document.querySelectorAll(".personal-summary h4").forEach(link => {
        link.style.color = lightModeText;
      });
    document.querySelector(".title").style.color = darkModeText;
    document.querySelectorAll(".project-button-container button").forEach(link => {
        link.style.color = lightModeText;
      });
    document.querySelector(".contact-form").style.backgroundColor = lightMode;
    

    document.querySelector(".contact-form").style.backgroundColor = lightMode;
    document.querySelectorAll(".contact-form input").forEach(link => {
        link.style.backgroundColor = "transparent";
      });
    document.querySelector("#contact-form-textarea").style.backgroundColor = "transparent";
}

// Contact Me Toggle features implementation

const sayHelloBtn = document.querySelector(".contact-content > button");
const contactForm = document.querySelector(".contact-form");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".close-button");

sayHelloBtn.addEventListener("click", () => {
        contactForm.style.display = "block";
        overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    contactForm.style.display = "none"
})

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    contactForm.style.display = "none"
})

// Logo click link implementation
document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = "index.html";
  });

// added click function support for lets chat nav button
const letsChatNavBtn = document.querySelector("#contact-nav-btn");
letsChatNavBtn.addEventListener("click", () => {
    window.location.href = "#contact";
})

//handling projects click events
const link = document.createElement("a");
link.style.display = "none";
link.target = "_blank";

document.querySelector("#project-web-design").addEventListener("click", () => {
    link.href = "https://emma-obelenge.github.io/emma-obelenge_portfolio/";
    link.click();
});

document.querySelector("#project-ecommerce").addEventListener("click", () => {
    link.href = "./coming-soon.html";
    link.click();
});

document.querySelector("#project-graphics-design").addEventListener("click", () => {
    link.href = "./coming-soon.html";
    link.click();
});

document.querySelector("#project-it-support").addEventListener("click", () => {
    link.href = "./coming-soon.html";
    link.click();
});

document.querySelector("#project-calculator").addEventListener("click", () => {
    link.href = "https://emma-obelenge.github.io/odin_calculator_project/";
    link.click();
});

document.querySelector("#project-coding").addEventListener("click", () => {
    link.href = "https://github.com/emma-obelenge?tab=repositories";
    link.click();
});