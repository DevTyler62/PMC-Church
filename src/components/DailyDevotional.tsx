'use client';
import { useEffect, useState } from 'react';
import { BookOpenIcon, ArrowUpRightIcon } from '@phosphor-icons/react';
import { getDailyDevotional } from '@/lib/devotional';

export default function DailyDevotional({
  initial,
}: {
  initial: ReturnType<typeof getDailyDevotional>;
}) {
  const [devotional, setDevotional] = useState(initial);
  useEffect(() => {
    const refresh = () =>
      setDevotional((previous) => {
        const next = getDailyDevotional();
        return previous.dateKey === next.dateKey ? previous : next;
      });
    const first = window.setTimeout(refresh, 0);
    const timer = window.setInterval(refresh, 60000);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, []);
  return (
    <section
      id="devotional"
      className="devotional"
      aria-labelledby="devotional-title"
    >
      <BookOpenIcon aria-hidden="true" size={30} weight="light" />
      <h2 id="devotional-title">Daily Devotional</h2>
      <p className="small-label devotional-date">
        <time dateTime={devotional.dateKey}>
          {new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
          }).format(new Date(`${devotional.dateKey}T12:00:00Z`))}
        </time>
      </p>
      <blockquote>
        <p>{devotional.text}</p>
        <cite>
          {devotional.reference} <span>· World English Bible</span>
        </cite>
      </blockquote>
      <p className="devotional-reflection">
        Pause and reflect: how might you carry these words into your day?
      </p>
      <a
        className="text-link"
        href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(devotional.reference)}&version=WEB`}
        target="_blank"
        rel="noreferrer"
      >
        Read in context <ArrowUpRightIcon aria-hidden="true" size={16} />
      </a>
    </section>
  );
}
