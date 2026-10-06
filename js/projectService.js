import { getProject } from './projects.js';
import { getProjectTasks } from "./tasks.js";

const projectDetails = (projectID) => {
    const project = getProject(projectID);
    const projectTasks = getProjectTasks(projectID);
    return {
        project,
        projectTasks
    };
}
const details = projectDetails(2);
console.log(details);
