import {createBoardTemplate} from "./components/board.js";
import {createFilterTemplate} from "./components/filter.js";
import {createLoadmoreBtnTemplate} from "./components/loadmore-btn.js";
import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {generateFilters} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeEnd`);
render(siteMainElement, createFilterTemplate(filters), `beforeEnd`);
render(siteMainElement, createBoardTemplate(), `beforeEnd`);

const boardElement = siteMainElement.querySelector(`.board`);

const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(tasks[0]), `beforeEnd`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount)
  .forEach((task) => render(taskListElement, createTaskTemplate(task), `beforeend`));

render(boardElement, createLoadmoreBtnTemplate(), `beforeEnd`);

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
