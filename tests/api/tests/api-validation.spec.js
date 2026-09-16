import { test, expect } from '@playwright/test';

test.describe('FR-05 API Schema & Contract Tests', () => {
  test('Validate Response Schema & Data Types', async ({ request }) => {
    const response = await request.get('https://test.com/api/response/98765');
    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body).toHaveProperty('account_id');
    expect(body).toHaveProperty('account_email');
    expect(body).toHaveProperty('start_date');
    expect(body).toHaveProperty('end_date');
    
    expect(typeof body.completed).toBe('boolean');
    expect(body.locale).toMatch(/^[a-z]{2}-[A-Z]{2}$/);
    expect(body.suggestion_list).not.toContain('non-matching');
  });

  test('Negative Case: Missing required properties', async ({ request }) => {
    const response = await request.post('https://test.com/api/response', { data: {} });
    expect(response.status()).toBe(400);
  });

  test('Negative Case: Invalid locale payload', async ({ request }) => {
    const response = await request.post('https://test.com/api/response', {
      data: { locale: 'INVALID_LOCALE' }
    });
    expect(response.status()).toBe(400);
  });
});
