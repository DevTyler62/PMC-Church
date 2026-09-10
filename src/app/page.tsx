import Image from 'next/image';
import DailyDevotional from '@/components/DailyDevotional';
import { getDailyDevotional } from '@/lib/devotional';
import welcomeHero from '../../assets/illustrations/welcome-table-hero-fall.png';
import quietGardenIllustration from '../../assets/illustrations/quiet-garden-fall.png';
import rootsIllustration from '../../assets/illustrations/deep-roots-fall.png';
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  PlayIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react/ssr';
import Navigation, { Brand } from '@/components/Navigation';
import Motion from '@/components/Motion';
import Values from '@/components/Values';
import PrayerForm from '@/components/PrayerForm';
import { church, navigation } from '@/lib/church';
import { latestVideo } from '@/lib/sermons';
export default async function Home() {
  const videoId = await latestVideo(church.channelId);
  const statement = 'A small church. A place for you. A faith we share.';
  const channelUrl = church.channelId
    ? `https://www.youtube.com/channel/${church.channelId}`
    : '';
  const uploads = church.channelId ? `UU${church.channelId.slice(2)}` : '';
  return (
    <Motion>
      <a href="#story" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main className="overflow-x-hidden w-full max-w-full">
        <section id="home" className="hero relative isolate">
          <Image
            src={welcomeHero}
            alt="An open chair at a rustic table in a sunlit autumn garden"
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover"
          />
          <div className="hero-wash" />
          <div className="hero-content">
            <p className="eyebrow">A WARM WELCOME. AN OPEN DOOR.</p>
            <h1 className="max-w-6xl">
              There’s a place
              <br />
              for <em>you</em> here.
            </h1>
            <p className="hero-description">
              A life of faith. A community of care.
              <strong className="hero-welcome">
                Welcome to Providence Mennonite Church.
              </strong>
            </p>
            <div className="hero-actions">
              <a href="#visit" className="button button-cream">
                Join us in person{' '}
                <ArrowUpRightIcon aria-hidden="true" size={17} />
              </a>
              <a href="#sermons" className="button button-glass">
                <PlayIcon aria-hidden="true" size={15} weight="fill" /> Watch a
                sermon
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>FAITH. FAMILY. COMMUNITY.</span>
            <a href="#story">
              Get to know us <ArrowDownIcon aria-hidden="true" size={16} />
            </a>
            <span>YOU ARE WELCOME HERE</span>
          </div>
        </section>
        <section id="story" className="section story-section">
          <div className="section-top">
            <span className="small-label">Life at Providence</span>
            <span className="small-label faded">
              Rooted in faith. Growing together.
            </span>
          </div>
          <div className="story-grid">
            <h2 className="story-statement">
              {statement.split(' ').map((word, i) => (
                <span key={i} className="reveal-word">
                  {word}{' '}
                </span>
              ))}
            </h2>
            <div className="story-copy">
              <p>
                Whether you’re looking for a church home, finding your way back
                to faith, or simply curious, we’re glad you found us.
              </p>
              <p>
                There is room to ask questions, build friendships, and take the
                next step together.
              </p>
              <details className="history-details">
                <summary>
                  Discover our story <span>+</span>
                </summary>
                <p>
                  Our church history is coming soon. We look forward to sharing
                  the people and moments that have shaped Providence.
                </p>
              </details>
            </div>
          </div>
          <div className="story-photo scroll-image">
            <Image
              src={quietGardenIllustration}
              alt="An illustrated bench beneath a tree with golden and maroon autumn leaves beside a pond and winding path, with a small pink flower beside the water on the right"
              fill
              sizes="(max-width: 768px) 100vw, 85vw"
              className="object-cover"
            />
            <div className="photo-caption">
              <span>
                Room to pause.
                <br />
                Space to grow.
              </span>
              <span>A moment of stillness.</span>
            </div>
          </div>
        </section>
        <section id="values" className="section values-section">
          <div className="values-heading">
            <div>
              <span className="small-label">What brings us together</span>
              <h2>
                Simple values.
                <br />
                <em>Deep roots.</em>{' '}
                <span className="inline-photo">
                  <Image
                    src={rootsIllustration}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </span>
              </h2>
            </div>
            <p>
              At the heart of our church are the things
              <br className="desktop-break" /> that bring us closer to God—and
              each other.
            </p>
          </div>
          <Values />
        </section>
        <div className="marquee" aria-label="Faith, family, community">
          <div aria-hidden="true">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>
                Faith <i /> Family <i /> Community <i />
              </span>
            ))}
          </div>
        </div>
        <section id="sermons" className="section sermon-section">
          <div className="sermon-heading">
            <div>
              <span className="small-label">A message for your week</span>
              <h2>
                Faith meets
                <br />
                <em>everyday life.</em>
              </h2>
            </div>
            <div>
              <p>
                From our church to wherever you are.
                <br />
                Make a little room for encouragement.
              </p>
              {channelUrl ? (
                <a
                  className="text-link"
                  href={`${channelUrl}?sub_confirmation=1`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Subscribe on YouTube{' '}
                  <ArrowUpRightIcon aria-hidden="true" size={17} />
                </a>
              ) : (
                <span className="small-label muted">
                  Our YouTube channel is coming soon
                </span>
              )}
            </div>
          </div>
          <div className="sermon-player scroll-image">
            {uploads ? (
              <iframe
                title="Latest sermons from Providence Mennonite Church"
                src={
                  videoId
                    ? `https://www.youtube-nocookie.com/embed/${videoId}`
                    : `https://www.youtube-nocookie.com/embed/videoseries?list=${uploads}`
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="sermon-placeholder">
                <YoutubeLogoIcon aria-hidden="true" size={44} weight="light" />
                <h3>
                  A little encouragement.
                  <br />
                  Wherever you call home.
                </h3>
                <p>Our latest sermons will be available here soon.</p>
              </div>
            )}
          </div>
          <div className="sermon-caption">
            <span>
              <span className="live-dot" /> Providence Mennonite Church
            </span>
            <span>Gather here. Stay connected.</span>
          </div>
        </section>
        <section id="visit" className="section visit-section">
          <div>
            <span className="small-label">Save a little room for Sunday</span>
            <h2>
              Come as you are.
              <br />
              <em>We’ll be glad you did.</em>
            </h2>
            <p>
              Your first visit starts with a simple hello.
              <br />
              We look forward to meeting you.
            </p>
            <a className="button button-dark" href="#contact">
              Let’s connect <ArrowUpRightIcon aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="visit-details">
            <div>
              <ClockIcon aria-hidden="true" size={23} weight="light" />
              <section>
                <h3>Gather with us</h3>
                <p>
                  {church.serviceTimes || 'Service times will be posted soon.'}
                </p>
              </section>
            </div>
            <div>
              <MapPinIcon aria-hidden="true" size={23} weight="light" />
              <section>
                <h3>Find your way here</h3>
                <p>
                  {church.address ||
                    'Our address and directions are coming soon.'}
                </p>
                {church.address && (
                  <a
                    className="text-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions{' '}
                    <ArrowUpRightIcon aria-hidden="true" size={16} />
                  </a>
                )}
              </section>
            </div>
            <div>
              <YoutubeLogoIcon aria-hidden="true" size={23} weight="light" />
              <section>
                <h3>Join from wherever you are</h3>
                <p>Stay connected through our sermons online.</p>
                <a className="text-link" href="#sermons">
                  Explore sermons{' '}
                  <ArrowUpRightIcon aria-hidden="true" size={16} />
                </a>
              </section>
            </div>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <div className="contact-intro">
            <span className="small-label">
              You don’t have to carry it alone
            </span>
            <h2>
              Let us pray
              <br />
              <em>with you.</em>
            </h2>
            <p>
              Across the street or across the world,
              <br />
              you’re welcome to reach out.
            </p>
            <div className="contact-links">
              <div>
                <PhoneIcon aria-hidden="true" size={18} />
                {church.phone ? (
                  <a href={`tel:${church.phone.replace(/[^+\d]/g, '')}`}>
                    {church.phone}
                  </a>
                ) : (
                  <span>Phone details coming soon</span>
                )}
              </div>
              <div>
                <EnvelopeIcon aria-hidden="true" size={18} />
                {church.email ? (
                  <a href={`mailto:${church.email}`}>{church.email}</a>
                ) : (
                  <span>Email details coming soon</span>
                )}
              </div>
            </div>
          </div>
          <PrayerForm accessKey={process.env.WEB3FORMS_ACCESS_KEY || ''} />
        </section>
        <DailyDevotional initial={getDailyDevotional()} />
        <section className="closing">
          <span className="small-label">There’s always room for one more.</span>
          <a href="#visit">
            See you <em>Sunday.</em>
            <ArrowUpRightIcon aria-hidden="true" weight="light" />
          </a>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <Brand />
          <nav aria-label="Footer navigation">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#home" className="back-top">
            Back to top <ArrowUpRightIcon aria-hidden="true" size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Providence Mennonite Church</span>
          <span>Faith lived together.</span>
        </div>
      </footer>
    </Motion>
  );
}
