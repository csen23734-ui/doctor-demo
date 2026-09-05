// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-active");
    });
}


// ================= DOCTOR LOGIN =================

const doctorLoginForm = document.getElementById("doctorLoginForm");

if (doctorLoginForm) {

    doctorLoginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        if (username === "doctor" && password === "demo123") {

            window.location.href = "doctor-panel.html";

        } else {

            alert("Invalid username or password.");

        }
    });
}
