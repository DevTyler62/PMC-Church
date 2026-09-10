'use client';
import { useState } from 'react';
import {
  BookOpenIcon,
  UsersIcon,
  HouseIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react';
const items = [
  { title: 'Faith', icon: BookOpenIcon },
  { title: 'Family', icon: HouseIcon },
  { title: 'Community', icon: UsersIcon },
];
export default function Values() {
  const [active, setActive] = useState(0);
  return (
    <div className="values-grid grid grid-flow-dense md:grid-cols-3">
      {items.map((item, index) => (
        <article
          className={`value-panel ${active === index ? 'active' : ''}`}
          key={item.title}
          onMouseEnter={() => setActive(index)}
        >
          <button
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <item.icon aria-hidden="true" size={34} weight="light" />
            <span>{item.title}</span>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="value-arrow"
              size={22}
            />
          </button>
          <p>
            We may only be a small church but we are always willing to be there
            for one another. If someone new comes in we welcome then as if they
            have been there for years.
          </p>
        </article>
      ))}
    </div>
  );
}
