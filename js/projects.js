
// ----------fetch projects data---------------
async function loadProjects() {
    const response = await fetch("../data/projects.json");
    const projects = await response.json();
    return projects;
    
}
const projects = await loadProjects();

// -------Get All Projects-------------------------
export const getProjects = () => {
    return projects;
}

// -------Get Project By ID-------------------------
export const getProject = (projectID) => {
    const project = projects.find((project) => project.id === projectID)
    return project;
}
const project = getProject(2);
console.log(project);

