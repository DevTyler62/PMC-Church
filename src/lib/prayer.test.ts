import test from 'node:test';
import assert from 'node:assert/strict';
import { validatePrayer } from './prayer';
const valid = {
  name: 'Guest',
  email: 'guest@example.com',
  prayer: 'Please pray for our family.',
  consent: 'on',
  website: '',
};
test('accepts a valid prayer request and trims text', () =>
  assert.equal(validatePrayer({ ...valid, name: ' Guest ' })?.name, 'Guest'));
test('rejects invalid emails, short messages, missing consent, and bots', () => {
  for (const patch of [
    { email: 'invalid' },
    { prayer: 'short' },
    { consent: '' },
    { website: 'spam' },
    { name: 55 },
    { prayer: 'a'.repeat(5001) },
  ])
    assert.equal(validatePrayer({ ...valid, ...patch }), null);
  assert.equal(validatePrayer(null), null);
});
