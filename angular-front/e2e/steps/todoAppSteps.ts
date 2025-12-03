import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';
import { test } from '@playwright/test';
import { CustomWorld } from '../support/world';

let browser: Browser;
let page: Page;

Given('el usuario está en la página de inicio', async function (this: CustomWorld)  {
    browser = await chromium.launch({
        headless: false,  // Run in non-headless mode to see what's happening
        timeout: 30000
      });
      page = await browser.newPage();
      await page.goto('http://localhost:4200/');
});

Then('El usuario debe ver {string}', async (message: string) => {
  const welcomeText = await page.getByTestId('home-title').textContent();
  expect(welcomeText).toBe(message);
  browser.close();
});

When('El usuario ingresa {string} en el campo de nombre', async (name: string) => {
  await page.getByTestId('home-username-input').fill(name);
});

When('presiona el botón enviar', async () => {
  await page.getByTestId('home-submit-button').click();
});

Then('el usuario debe estar en la página de To Do', async () => {
  expect(page.url()).toContain('/todo-app');
});

Then('El título debe ser  {string}', async (title: string) => {
  const titleText = await page.getByTestId('todo-title').textContent();
  expect(titleText).toBe(title);
});


Given('el usuario está en la página de pendientes', async () => {
  browser = await chromium.launch({
    headless: false,  // Run in non-headless mode to see what's happening
    timeout: 30000
  });
  page = await browser.newPage();
  await page.goto('http://localhost:4200/todo-app');
});

When('ingresa {string} como el título de una tarea', async (taskTitle: string) => {
  await page.getByTestId('task-title-input').fill(taskTitle);
});

When('da click en el botón agregar tarea', async () => {
  await page.getByTestId('add-task-button').click();
});

Then('la tarea debe aparecer en la lista', async () => {
  const taskText = await page.getByTestId('task-item').locator('strong').textContent();
  expect(taskText).toBe('Buy groceries');
});


Given('la tarea {string} está en la lista de pendientes', async (taskTitle: string) => {
  await page.getByTestId('task-title-input').fill(taskTitle);
  await page.getByTestId('add-task-button').click();
});

When('el usuario la marca como completada', async () => {
  await page.getByTestId('task-complete-checkbox').click();
});

Then('la tarea debe estar {string}', async (state: string) => {
  const stateText = await page.getByTestId('task-state').textContent();
  expect(stateText).toBe(state);
});

Then('debe mostrar un mensaje de error que diga {string}', async (errorMessage: string) => {
  const errorText = await page.getByTestId('task-error').textContent();
  expect(errorText).toBe(errorMessage);
})

When('el usuario de click en el botón de agregar tarea sin ingresar un título', async () => {
  await page.getByTestId('add-task-button').click();
})


Given('el usuario tiene {int} tareas pendientes', async (taskCount: number) => {
  for (let i = 1; i <= taskCount; i++) {
    await page.getByTestId('task-title-input').fill(`Task ${i}`);
    await page.getByTestId('add-task-button').click();
  }
});

Then('El contador de tareas pendientes debe ser {string}', async (count: string) => {
  const pendingCountText = await page.getByTestId('pending-tasks-count').textContent();
  expect(pendingCountText).toBe(count);
});





