// 1. DEFINE OBJECTS WITH THE SPECIFIED PROPERTIES
const project1 = {
    title: "Interactive Math Table Matrix",
    summary: "An interactive web application framework built to generate dynamic mathematical tables utilizing sessionStorage streams.",
    image: "https://via.placeholder.com/150", 
    repository: "https://github.com/CesarChris97/MyNewProject"
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

// 2. DEFINE ARRAY TO CONTAIN THE OBJECTS
const projectsArray = [project1, project2, project3];

// 3. STORE AND PARSE INFORMATION (sessionStorage workflow)
if (!sessionStorage.getItem("portfolioProjects")) {
    sessionStorage.setItem("portfolioProjects", JSON.stringify(projectsArray));
}

const retrievedData = sessionStorage.getItem("portfolioProjects");
const finalProjectsList = JSON.parse(retrievedData);

// 4. RENDER PROJECTS DYNAMICALLY
document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.querySelector("#projects-container");

    if (projectsContainer) {
        projectsContainer.innerHTML = ""; // Clear existing manual text structures

        finalProjectsList.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = project.title;
            projectCard.appendChild(projectTitle);

            const projectImage = document.createElement("img");
            projectImage.src = project.image;
            projectImage.alt = `${project.title} Preview`;
            projectCard.appendChild(projectImage);

            const projectSummary = document.createElement("p");
            projectSummary.textContent = project.summary;
            projectCard.appendChild(projectSummary);

            const projectLink = document.createElement("a");
            projectLink.href = project.repository;
            projectLink.target = "_blank";
            projectLink.textContent = "View Repository on GitHub →";
            projectCard.appendChild(projectLink);

            projectsContainer.appendChild(projectCard);
        });
    }
});
