import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.page';
import * as testData from '../data/user.json';

test.describe('OrangeHRM Authentication Scenarios', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // 1. Describe: Valid Login (Data Driven)
  test.describe('Success Login - DDT', () => {
    for (const data of testData.validUsers) {
      test(`Login as ${data.username}`, async ({ page }) => {
        await loginPage.login(data.username, data.password);
        await expect(page).toHaveURL(/.*dashboard/);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
      });
    }
  });

  // 2. Describe: Logout (Pake locator manda User yang lo set)
  test.describe('Logout Scenario', () => {
    test('User should be able to logout safely', async ({ page }) => {
      // Pastikan data login sesuai dengan user yang lo set di constructor (manda)
      await loginPage.login(testData.validUsers[0].username, testData.validUsers[0].password);
      
      await loginPage.logout();
      
      await expect(page).toHaveURL(/.*login/);
      await expect(loginPage.loginButton).toBeVisible();
    });
  });

  // 3. Describe: Invalid Login
  test.describe('Negative Login Scenarios', () => {
    for (const data of testData.invalidUsers) {
      test(`Failed login with ${data.username}`, async () => {
        await loginPage.login(data.username, data.password);
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toHaveText(data.message);
      });
    }
  });
});