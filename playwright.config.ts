import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  reporter: 'list',
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 4175',
    url: 'http://127.0.0.1:4175',
    reuseExistingServer: false,
    timeout: 60000,
  },
  use: {
    baseURL: 'http://127.0.0.1:4175',
    browserName: 'chromium',
    launchOptions: { executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] },
  },
});
