import { test, expect } from '@playwright/test';
import { AutocompletePage } from '../pages/AutocompletePage';

test.describe('Autocomplete Form UI Tests', () => {
  let autocompletePage;

  test.beforeEach(async ({ page }) => {
    autocompletePage = new AutocompletePage(page);
    await autocompletePage.goto();
  });

  test('Keyboard Interaction & Navigation', async ({ page }) => {
    await autocompletePage.inputField.focus();
    await page.keyboard.type('agile');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(autocompletePage.successContainer).toBeVisible();
  });

  test('Suggestion Filtering and Selection', async () => {
    await autocompletePage.typeInput('agile method');
    await expect(autocompletePage.suggestions).toHaveCount(3);
    await autocompletePage.selectSuggestion('agile methodology');
    await expect(autocompletePage.inputField).toHaveValue('agile methodology');
  });

  test('Form Submission Verification', async () => {
    await autocompletePage.typeInput('agile methodology');
    await autocompletePage.selectSuggestion('agile methodology');
    await autocompletePage.submit();
    await expect(autocompletePage.successContainer).toBeVisible();
  });
});
