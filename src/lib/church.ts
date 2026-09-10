export const church = {
  name: 'Providence Mennonite Church',
  phone: process.env.NEXT_PUBLIC_CHURCH_PHONE || '610-489-8179',
  email: process.env.NEXT_PUBLIC_CHURCH_EMAIL || 'pmcchurch.pa@gmail.com',
  address:
    process.env.NEXT_PUBLIC_CHURCH_ADDRESS ||
    '109 South Mennonite Rd, Collegeville, PA 19426',
  serviceTimes:
    process.env.NEXT_PUBLIC_SERVICE_TIMES || 'Church Service: 10:15 a.m.',
  channelId: /^UC[\w-]{22}$/.test(process.env.YOUTUBE_CHANNEL_ID || '')
    ? process.env.YOUTUBE_CHANNEL_ID!
    : 'UC8kTltMjdVcUNSOn1cVo9TA',
};
export const navigation = [
  ['Our story', 'story'],
  ['Our values', 'values'],
  ['Sermons', 'sermons'],
  ['Visit us', 'visit'],
  ['Contact', 'contact'],
  ['Daily Devotional', 'devotional'],
] as const;
