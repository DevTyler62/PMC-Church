'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
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
  const menu = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const reset = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', reset);
    return () => desktop.removeEventListener('change', reset);
  }, []);

  useLayoutEffect(() => {
    const panel = menu.current;
    if (!panel) return;
    const links = panel.querySelectorAll('a');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeline = gsap.timeline();
    if (reduced) {
      gsap.set(panel, { autoAlpha: open ? 1 : 0, clipPath: open ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' });
      gsap.set(links, { opacity: open ? 1 : 0, y: open ? 0 : -12 });
    } else if (open) {
      timeline.set(panel, { visibility: 'visible', opacity: 1 })
        .to(panel, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.46, ease: 'power3.inOut' })
        .to(links, { opacity: 1, y: 0, duration: 0.42, stagger: 0.055, ease: 'power3.out' }, 0.15);
    } else {
      timeline.to(links, { opacity: 0, y: -12, duration: 0.16, stagger: { each: 0.025, from: 'end' }, ease: 'power2.in' })
        .to(panel, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.3, ease: 'power3.inOut' }, 0.08)
        .set(panel, { visibility: 'hidden' });
    }
    return () => { timeline.kill(); };
  }, [open]);

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
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <XIcon aria-hidden="true" size={24} />
          ) : (
            <ListIcon aria-hidden="true" size={24} />
          )}
        </button>
      </div>
        <nav
          ref={menu}
          inert={!open}
          aria-hidden={!open}
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
          }}
        >
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} onClick={() => setOpen(false)} key={id}>
              {label}
              <ArrowUpRightIcon aria-hidden="true" size={18} />
            </a>
          ))}
        </nav>
    </header>
  );
}
