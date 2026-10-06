import { getProjects } from "./projects.js";

// --------Create project card---------------------------------------------------
const createProjectCard = (project) => {
  return `
            <article class="project-card">

            <div class="project-card-header">

                <div class="project-card-status">
                    <h3>${project.name}</h3>
                    <span>${project.status}</span>
                </div>
                <p>${project.description}</p>
            </div>

            <div class="project-card-footer">

                <div class="project-progress-info">
                    <span>${project.totalTasks} Tasks</span>
                    <span class="project-progress-value">${project.progress}%</span>
                </div>

                <input
                    type="range"
                    class="project-progress"
                    min="0"
                    max="100"
                    value="${project.progress}"
                    disabled
                >

                <button class="view-details">
                    <span>View Details</span>
                    <i data-lucide="arrow-right"></i>
                </button>

            </div>

        </article>
    `;
};

// ---------------Render Projects----------------------------
export const renderProjects = () => {
    const ProjectsContainer = document.querySelector(".projects-cards");
    const projects = getProjects();
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        ProjectsContainer.innerHTML += projectCard;
        lucide.createIcons();
    });
    
};


