import { getTasks } from "./tasks.js";
import { getProject } from "./projects.js";

const createTaskCard = (project, task) => {
  return `
        <article class="task-card">

            <div class="task-card-header">
                <span class="project-name">${project.name}</span>
                <span class="task-number">tsk-${task.id}</span>
            </div>

            <h4 class="task-name">${task.title}</h4>

            <p class="task-description">
                ${task.description}
            </p>

            <div class="task-card-footer">
                <span class="task-priority">${task.priority}</span>
                <span class="task-date">
                    Due: ${task.dueDate}
                </span>
            </div>

        </article>
    `;
};

export const renderTasks = () => {
    const containerTasks = document.querySelector(".tasks-place-content");
    

  const tasks = getTasks();

  tasks.forEach((task) => {
    const project = getProject(task.projectId);

    containerTasks.insertAdjacentHTML(
      "beforeend",
      createTaskCard(project, task),
    );
  });
};
