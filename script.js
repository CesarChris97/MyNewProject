// ==========================================
// 1. OBJECTS & ARRAY DEFINITIONS
// ==========================================

// Defining three project objects with the required properties
const project1 = {
    title: "Interactive Math Table Matrix",
    summary: "An interactive web application framework built to generate dynamic mathematical tables utilizing sessionStorage streams.",
    image: "https://via.placeholder.com/150", // Replace with your actual project icon/image URL
    repository: "https://github.com/CesarChris97/MyNewProject" // Replace with specific repo link if different
};

const project2 = {
    title: "Networking Infrastructure Lab",
    summary: "A practical evaluation of routing protocols, hardware configuration, and wireless security principles mapping to the OSI model.",
    image: "https://via.placeholder.com/150",
    repository: "https://github.com/CesarChris97/MyNewProject"
};

const project3 = {
    title: "Behavioral Influence & Conditioning Analysis",
    summary: "A research project focusing on psychological behaviors, social influence, and clinical case studies regarding human cognitive processes.",
    image: "https://via.placeholder.com/150",
    repository: "https://github.com/CesarChris97/MyNewProject"
};

// Defining an array to contain the newly created objects
const projectsArray = [project1, project2, project3];

// ==========================================
// 2. STORE AND PARSE INFORMATION
// ==========================================

// On page load, check if the data exists in session storage
if (!sessionStorage.getItem("portfolioProjects")) {
    // a. If no data exists, convert array to string and store it
    console.log("No session data found. Initializing storage...");
    sessionStorage.setItem("portfolioProjects", JSON.stringify(projectsArray));
}

// b. Retrieve and parse it using JSON.parse()
const retrievedData = sessionStorage.getItem("portfolioProjects");
const finalProjectsList = JSON.parse(retrievedData);

// ==========================================
// 3. RENDER PROJECTS DYNAMICALLY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Select the project section of your portfolio page using a DOM selector
    // Make sure you have a matching container element in your HTML (e.g., <div id="projects-container"></div>)
    const projectsContainer = document.querySelector("#projects-container");

    if (projectsContainer) {
        // Clear out any placeholder content if necessary
        projectsContainer.innerHTML = "";

        // 2. Loop through the array and dynamically create DOM elements
        finalProjectsList.forEach(project => {
            // Create a wrapper card for each project
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";
            projectCard.style.border = "1px solid #ccc";
            projectCard.style.padding = "15px";
            projectCard.style.margin = "15px 0";
            projectCard.style.borderRadius = "5px";

            // Create and append Title
            const projectTitle = document.createElement("h3");
            projectTitle.textContent = project.title;
            projectCard.appendChild(projectTitle);

            // Create and append Image
            const projectImage = document.createElement("img");
            projectImage.src = project.image;
            projectImage.alt = `${project.title} Preview`;
            projectImage.style.maxWidth = "150px";
            projectImage.style.display = "block";
            projectImage.style.margin = "10px 0";
            projectCard.appendChild(projectImage);

            // Create and append Summary
            const projectSummary = document.createElement("p");
            projectSummary.textContent = project.summary;
            projectCard.appendChild(projectSummary);

            // Create and append Link to Repository
            const projectLink = document.createElement("a");
            projectLink.href = project.repository;
            projectLink.target = "_blank";
            projectLink.textContent = "View Repository on GitHub";
            projectLink.style.color = "#0056b3";
            projectLink.style.textDecoration = "underline";
            projectCard.appendChild(projectLink);

            // Append the complete card to the container section
            projectsContainer.appendChild(projectCard);
        });
    } else {
        console.warn("Target project section (#projects-container) was not found in the DOM.");
    }
});
