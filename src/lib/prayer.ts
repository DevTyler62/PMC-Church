export function validatePrayer(
  data: unknown,
): { name: string; email: string; prayer: string } | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;
  if (
    typeof d.email !== 'string' ||
    typeof d.prayer !== 'string' ||
    (d.name !== undefined && typeof d.name !== 'string')
  )
    return null;
  const email = d.email.trim(),
    prayer = d.prayer.trim(),
    name = ((d.name as string) || '').trim();
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    prayer.length < 10 ||
    prayer.length > 5000 ||
    name.length > 100 ||
    d.consent !== 'on' ||
    d.website
  )
    return null;
  return { name, email, prayer };
}
