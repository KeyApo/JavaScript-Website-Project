/* Homepage JavaScript */


// Dark Mode Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    const darkModeEnabled = document.body.classList.toggle("dark-mode");

    themeToggle.textContent = darkModeEnabled
        ? "Light mode"
        : "Dark mode";
});

// Use a fallback when the browser does not support prompt().
let viewerName = "there";
try {
    const enteredName = window.prompt("What is your name?");
    if (enteredName && enteredName.trim()) {
        viewerName = enteredName.trim();
    }
} catch (error) {
    console.warn("The name prompt is unavailable; using the default greeting.", error);
}

document.getElementById("name").innerText = "Hello, " + viewerName + "!";

// Function to display skills and technologies //
function displaySkills() {
    const skills = [
        "JavaScript",
        "HTML",
        "CSS",
        "C#",
        "Basic SQL",
        "Visual Studio Code",
        "GitHub",
        "Graphic Design",
        "Video Editing",
        "Live2D Animation and Rigging",
        "Character Design",
        "Creative Writing",
        "Basic Game Development",
        "RPG Maker MV Proficency"
    ];

    const skillsList = document.getElementById("skills");
    skillsList.innerHTML = ""; // Clear existing content

    for (let i = 0; i < skills.length; i++) {
        const li = document.createElement("li");
        li.textContent = skills[i];
        skillsList.appendChild(li);
    }

};

displaySkills();

// Function to update project sections based on the number of professional projects
function updateProjectSections() {
    const professionalProjects = document.querySelectorAll("#professional-projects .description");
    const universityResources = document.getElementById("university-resources");
    const personalProjects = document.getElementById("personal-projects");

    personalProjects.hidden = false;

    if (professionalProjects.length >= 3) {
        universityResources.hidden = false;
    } else {
        universityResources.hidden = true;
    }
}

updateProjectSections();

// Function to submit contact form data
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    window.alert("Thank you for sending me a message!");
});
