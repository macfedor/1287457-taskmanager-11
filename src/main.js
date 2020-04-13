import {createBoardTemplate} from "./components/board.js";
import {createFilterTemplate} from "./components/filter.js";
import {createLoadmoreBtnTemplate} from "./components/loadmore-btn.js";
import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";

const TASKS_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeEnd`);
render(siteMainElement, createFilterTemplate(), `beforeEnd`);
render(siteMainElement, createBoardTemplate(), `beforeEnd`);

const boardElement = siteMainElement.querySelector(`.board`);

const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeEnd`);

for (let i = 1; i <= TASKS_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeEnd`);
}

render(boardElement, createLoadmoreBtnTemplate(), `beforeEnd`);
