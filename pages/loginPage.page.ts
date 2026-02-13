import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly logoutLink: Locator;
  // Ini yang lo minta: readonly property buat icon user
  readonly userDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.logoutLink = page.getByRole('menuitem', { name: 'Logout' });
    
    // Inisialisasi locator spesifik ke 'manda User' di sini
    this.userDropdown = page.getByRole('listitem')
      .filter({ hasText: 'manda User' })
      .locator('i');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded'
    });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    // Karena udah di-set di constructor, tinggal panggil pake this
    await this.userDropdown.click();
    await this.logoutLink.click();
  }
}