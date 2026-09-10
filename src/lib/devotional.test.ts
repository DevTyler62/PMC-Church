import test from 'node:test';
import assert from 'node:assert/strict';
import { getDailyDevotional } from './devotional';

test('same Eastern calendar day has the same verse', () => {
  assert.deepEqual(
    getDailyDevotional(new Date('2026-09-07T04:00:00Z')),
    getDailyDevotional(new Date('2026-09-08T03:59:59Z')),
  );
});
test('changes at Eastern midnight, rather than UTC midnight', () => {
  const before = getDailyDevotional(new Date('2026-09-08T03:59:59Z'));
  const after = getDailyDevotional(new Date('2026-09-08T04:00:00Z'));
  assert.equal(before.dateKey, '2026-09-07');
  assert.equal(after.dateKey, '2026-09-08');
  assert.notEqual(before.reference, after.reference);
});
test('daylight saving transitions do not skip a daily selection', () => {
  assert.equal(
    getDailyDevotional(new Date('2026-11-01T05:30:00Z')).reference,
    getDailyDevotional(new Date('2026-11-01T06:30:00Z')).reference,
  );
  assert.equal(
    getDailyDevotional(new Date('2026-03-08T06:30:00Z')).reference,
    getDailyDevotional(new Date('2026-03-08T07:30:00Z')).reference,
  );
});
test('each day in the 48-day rotation is distinct', () => {
  const refs = Array.from(
    { length: 48 },
    (_, i) =>
      getDailyDevotional(new Date(Date.UTC(2026, 8, 7 + i, 12))).reference,
  );
  assert.equal(new Set(refs).size, 48);
});
