import verses from '../../assets/content/devotional-verses.json';

export function getDailyDevotional(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const part = (type: string) => parts.find((p) => p.type === type)!.value;
  const dateKey = `${part('year')}-${part('month')}-${part('day')}`;
  const day = Math.floor(Date.parse(`${dateKey}T00:00:00Z`) / 86400000);
  return {
    ...verses[((day % verses.length) + verses.length) % verses.length],
    dateKey,
  };
}
