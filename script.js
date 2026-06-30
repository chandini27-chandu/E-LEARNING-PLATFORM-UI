// Welcome Message
window.addEventListener("load", () => {
    alert("🎓 Welcome to EduMaster E-Learning Platform!");
});

// Explore Courses Button
const heroButton = document.querySelector(".hero-text button");

heroButton.addEventListener("click", () => {
    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
});

// Enroll Buttons
const enrollButtons = document.querySelectorAll(".course-card button");

enrollButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Congratulations!\nYou have successfully enrolled in this course.");
    });
});

// Search Button
const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

searchBtn.addEventListener("click", () => {

    if (searchInput.value.trim() === "") {
        alert("Please enter a course name.");
    } else {
        alert("Searching for: " + searchInput.value);
    }

});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("📩 Thank you! Your message has been submitted successfully.");

    form.reset();

});