import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const routes = [
  '/',
  '/experience',
  '/education',
  '/projects',
  '/experience/cases/historico-de-contas',
  '/experience/cases/governanca-de-seguros',
  '/experience/cases/saldo-devedor',
];

test('every route opens directly in Portuguese and English', async ({ page }) => {
  for (const route of routes) {
    for (const prefix of ['', '/en']) {
      const response = await page.goto(`${prefix}${route === '/' ? '' : route}` || '/');
      expect(response?.status()).toBe(200);
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.locator('main h1')).not.toBeEmpty();
    }
  }
});

test('language and theme switches persist after refresh and navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Switch to English/ }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator('main h1')).toContainText('From complexity');
  await page.reload();
  await expect(page.locator('main h1')).toContainText('From complexity');
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('link', { name: 'Experience', exact: true }).first().click();
  await expect(page).toHaveURL(/\/en\/experience$/);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('event cards reveal descriptions and case studies have contextualized metrics', async ({
  page,
}) => {
  await page.goto('/experience');
  const moment = page.locator('.polaroid').nth(1);
  await moment.click();
  await expect(moment).toHaveAttribute('aria-expanded', 'true');
  await expect(moment).toContainText('Palestrante convidada');
  await page.getByRole('link', { name: 'Explorar case' }).first().click();
  await expect(page).toHaveURL(/historico-de-contas$/);
  await expect(page.getByText('75%', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Estimado').first()).toBeVisible();
  await expect(page.getByText(/Nenhum dado de cliente/)).toBeVisible();
});

test('external project and certificate links point to verified destinations', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.getByRole('link', { name: /Acessar repositório/ }).first()).toHaveAttribute(
    'href',
    'https://github.com/sabrinayokoyama1/cognitive-ai-v2',
  );
  await expect(page.getByRole('link', { name: /Acessar repositório/ }).nth(1)).toHaveAttribute(
    'href',
    'https://github.com/sabrinayokoyama1/project_advanced_sql',
  );
  await page.goto('/education');
  await expect(page.locator('.course-card')).toHaveCount(10);
  for (const card of await page.locator('.course-card').all())
    await expect(card).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/sabrina-yokoyama/details/certifications/',
    );
});

test('profile and event photos load from the supplied files', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.portrait-frame img')).toBeVisible();
  expect(
    await page.locator('.portrait-frame img').evaluate((img: HTMLImageElement) => img.naturalWidth),
  ).toBeGreaterThan(0);
  await page.goto('/experience');
  await expect(page.locator('.polaroid-image img')).toHaveCount(4);
  for (const img of await page.locator('.polaroid-image img').all()) {
    expect(await img.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(
      0,
    );
  }
});

test('mobile menu is operable by touch and closes after navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute(
    'aria-expanded',
    'true',
  );
  await page
    .getByRole('navigation', { name: 'Navegação móvel' })
    .getByRole('link', { name: /Formação/ })
    .click();
  await expect(page).toHaveURL(/\/education$/);
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
});

test('visual QA captures each main page in both themes and viewport sizes', async ({ page }) => {
  mkdirSync('test-results/visual', { recursive: true });
  const routes = ['/', '/experience', '/education', '/projects'];
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ['dark', 'light']) {
      for (const route of routes) {
        await page.goto(route);
        await page.evaluate((selected) => {
          localStorage.setItem('sy-theme', selected);
          window.dispatchEvent(new Event('sy-theme-change'));
        }, theme);
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
        await page.waitForTimeout(450);
        await page.screenshot({
          path: `test-results/visual/${route === '/' ? 'home' : route.slice(1)}-${width}-${theme}.png`,
          fullPage: true,
        });
      }
    }
  }
});

for (const width of [360, 390, 768, 1024, 1440, 1920]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/experience', '/education', '/projects']) {
      await page.goto(route);
      await expect(page.locator('main h1')).toBeVisible();
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth, `${route} at ${width}px`).toBeLessThanOrEqual(width + 1);
    }
  });
}
