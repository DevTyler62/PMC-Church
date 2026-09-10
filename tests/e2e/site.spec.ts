import { test, expect } from '@playwright/test';
test('desktop page, channel, values, and prayer form', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'There’s a place',
  );
  for (const value of ['Family', 'Community', 'Faith'])
    await expect(
      page.getByRole('button', { name: value, exact: true }),
    ).toBeVisible();
  await expect(
    page.getByTitle('Latest sermons from Providence Mennonite Church'),
  ).toHaveAttribute('src', /youtube-nocookie.com\/embed\//);
  await expect(
    page.getByRole('link', { name: 'Subscribe on YouTube' }),
  ).toHaveAttribute('href', /UC8kTltMjdVcUNSOn1cVo9TA/);
  await expect(
    page.getByRole('button', { name: 'Send prayer request' }),
  ).toBeEnabled();
  await page.screenshot({ path: 'test-results/desktop.png', fullPage: true });
  expect(errors).toEqual([]);
});
test('mobile navigation, anchors, reduced motion, and width', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Our values' })
    .click();
  await expect(page).toHaveURL(/#values$/);
  await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.getByRole('button', { name: 'Faith', exact: true }).click();
  await expect(
    page.getByRole('button', { name: 'Faith', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Tab');
  await page.screenshot({ path: 'test-results/mobile.png', fullPage: true });
});

test('prayer form shows failures without clearing input and resets after success', async ({
  page,
}) => {
  await page.goto('/');
  let succeeds = false;
  await page.route('https://api.web3forms.com/submit', (route) =>
    route.fulfill({
      status: succeeds ? 200 : 502,
      contentType: 'application/json',
      body: JSON.stringify(
        succeeds
          ? { success: true }
          : {
              message:
                'We could not send your request. Please try again later.',
            },
      ),
    }),
  );
  await page
    .getByLabel('Email address', { exact: true })
    .fill('guest@example.com');
  await page
    .getByLabel('How can we pray for you?')
    .fill('This is an automated test, intercepted locally.');
  await page.getByRole('checkbox').check();
  await page
    .getByRole('button', { name: 'Send prayer request', exact: true })
    .click();
  await expect(page.getByRole('status')).toContainText('could not send');
  await expect(page.getByLabel('Email address', { exact: true })).toHaveValue(
    'guest@example.com',
  );
  succeeds = true;
  await page
    .getByRole('button', { name: 'Send prayer request', exact: true })
    .click();
  await expect(page.getByRole('status')).toContainText('has been sent');
  await expect(page.getByLabel('Email address', { exact: true })).toHaveValue(
    '',
  );
});
