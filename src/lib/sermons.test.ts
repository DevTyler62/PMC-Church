import test from 'node:test';
import assert from 'node:assert/strict';
import { parseLatestVideo } from './sermons';
test('selects the newest entry in the channel feed', () =>
  assert.equal(
    parseLatestVideo(
      '<entry><yt:videoId>YCKdDcTBx50</yt:videoId></entry><entry><yt:videoId>abcdefghijk</yt:videoId></entry>',
    ),
    'YCKdDcTBx50',
  ));
test('missing or malformed feeds use the fallback', () => {
  assert.equal(parseLatestVideo('unavailable'), null);
  assert.equal(
    parseLatestVideo('<entry><yt:videoId>invalid</yt:videoId></entry>'),
    null,
  );
});
