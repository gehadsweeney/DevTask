const loadTasks = async () => {
    const response = await fetch("../data/tasks.json");
    const Tasks = await response.json();
    return Tasks;
}
const tasks = await loadTasks();

// -------Get All Tasks-------------------------
export const getTasks = () => {
    return tasks;
}
// Get Project Tasks By ID------------------------
export const getProjectTasks = (projectID) => {
    const projectTasks = tasks.filter((task) => task.projectId === projectID);
    return projectTasks;
}
const devTasks = getProjectTasks(1);
console.log(devTasks);