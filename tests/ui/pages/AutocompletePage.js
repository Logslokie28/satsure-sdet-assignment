export class AutocompletePage {
  constructor(page) {
    this.page = page;
    this.inputField = page.locator('#input-field');
    this.suggestions = page.locator('.suggestions li');
    this.nextButton = page.locator('#next-button');
    this.errorMessage = page.locator('.error-message');
    this.successContainer = page.locator('.success-container');
  }

  async goto() {
    await this.page.goto('https://test.com/autocomplete-form');
  }

  async typeInput(text) {
    await this.inputField.fill(text);
  }

  async selectSuggestion(text) {
    await this.page.locator(`.suggestions li:has-text("${text}")`).click();
  }

  async submit() {
    await this.nextButton.click();
  }
}
