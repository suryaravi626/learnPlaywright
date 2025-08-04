import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"

const employeedetails = {

    firstname : "Raju",
    lastname : "G"
}

test('test',{tag: "@smoke"}, async ({ page }) => {
 
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.locator('//input[@name="username"]').fill(process.env.RAJU_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole("link", { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employeedetails.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

});

//Datadriven testing 

//cy.visit("url")

//await page.goto("Url")