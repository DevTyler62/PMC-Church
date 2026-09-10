'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRightIcon, ListIcon, XIcon } from '@phosphor-icons/react';
import { navigation } from '@/lib/church';
export function Brand({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Providence Mennonite Church home"
      className={horizontal ? 'brand brand-horizontal' : 'brand'}
    >
      {horizontal ? (
        <>
          <span className="brand-symbol" aria-hidden="true">
            <Image
              src="/images/providence-logo-maroon-gold.png"
              alt=""
              width={1254}
              height={1254}
              sizes="150px"
              priority
            />
          </span>
          <span className="brand-wordmark" aria-hidden="true">
            <Image
              src="/images/providence-logo-maroon-gold.png"
              alt=""
              width={1254}
              height={1254}
              sizes="280px"
              priority
            />
          </span>
        </>
      ) : (
        <Image
          src="/images/providence-logo-maroon-gold.png"
          alt="Providence Mennonite Church"
          width={1254}
          height={1254}
          sizes="200px"
          priority
          className="brand-logo"
        />
      )}
    </a>
  );
}
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Brand horizontal />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#visit" className="nav-visit">
          Come as you are <ArrowUpRightIcon aria-hidden="true" size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon aria-hidden="true" size={24} />
          ) : (
            <ListIcon aria-hidden="true" size={24} />
          )}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} onClick={() => setOpen(false)} key={id}>
              {label}
              <ArrowUpRightIcon aria-hidden="true" size={18} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
