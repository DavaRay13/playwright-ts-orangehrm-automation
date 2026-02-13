import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

