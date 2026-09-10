'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Motion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-content > *', {
          y: 25,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          ease: 'power2.out',
        });
        gsap.fromTo(
          '.reveal-word',
          { opacity: 0.22 },
          {
            opacity: 1,
            stagger: 0.12,
            scrollTrigger: {
              trigger: '.story-statement',
              start: 'top 85%',
              end: 'bottom 45%',
              scrub: true,
            },
          },
        );
        gsap.utils.toArray<HTMLElement>('.scroll-image').forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.8 },
            {
              scale: 1,
              scrollTrigger: {
                trigger: el,
                start: 'top 95%',
                end: 'top 30%',
                scrub: 1,
              },
            },
          );
          gsap.to(el, {
            opacity: 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'bottom 20%',
              end: 'bottom top',
              scrub: 1,
            },
          });
        });
      });
      return () => media.revert();
    },
    { scope: root },
  );
  return <div ref={root}>{children}</div>;
}
