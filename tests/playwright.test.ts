import { test, expect } from '@playwright/test';

test.describe('Playwright UI Tests', () => {

    test('Check Playwright page title', async ({ page }) => {
        // Act
        await page.goto('https://playwright.dev/');

        // Assert
        await expect(page).toHaveTitle(/Playwright/);
        test.info().annotations.push({ type: 'info', description: '✅ Title validation successful (PW).' });
    });

    test('Verify search functionality', async ({ page }) => {
        // Arrange
        await page.goto('https://playwright.dev/');

        // Act
        await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('locator');
        await page.getByRole('link', { name: 'Locators', exact: true }).click();

        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'test-results/search.png' });

        // Assert
        await expect(page).toHaveURL(/locator/);
        test.info().annotations.push({ type: 'info', description: '✅ Search functionality works.' });
    });

    test('Navigation test for API page', async ({ page }) => {
        // Arrange
        await page.goto('https://playwright.dev/');

        // Act
        await page.getByRole('link', { name: 'API' }).click();
        await page.waitForLoadState('networkidle');
        await page.screenshot({ path: 'test-results/api-page.png' });

        // Assert
        await expect(page).toHaveURL(/api/);
        test.info().annotations.push({ type: 'info', description: '✅ Navigation to API page successful.' });
    });

});
