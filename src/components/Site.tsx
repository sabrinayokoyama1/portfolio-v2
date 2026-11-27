'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  BrainCircuit,
  DatabaseZap,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  Workflow,
  X,
  MessageCircle,
  ExternalLink,
  LockKeyhole,
  UserRound,
  ArrowRight,
  ArrowUp,
} from 'lucide-react';
import {
  cases,
  courses,
  degree,
  experience,
  links,
  moments,
  projects,
  skills,
  tr,
  type Locale,
} from '@/content/data';
import { ui } from '@/content/ui';

type View = 'home' | 'experience' | 'education' | 'projects' | 'case' | 'not-found';
const paths = ['/', '/experience', '/education', '/projects'];
const skillIcons = {
  analytics: BarChart3,
  bi: Workflow,
  engineering: DatabaseZap,
  ai: BrainCircuit,
};
const subscribeTheme = (callback: () => void) => {
  window.addEventListener('storage', callback);
  window.addEventListener('sy-theme-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('sy-theme-change', callback);
  };
};
const getTheme = () => (window.localStorage.getItem('sy-theme') === 'light' ? 'light' : 'dark');
const getServerTheme = () => 'dark';

function localPath(path: string, locale: Locale) {
  return locale === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path;
}

function improvementMetricClass(value: string) {
  const percentage = value.trim().match(/^(\d+(?:[.,]\d+)?)%$/);
  if (!percentage) return undefined;
  const amount = Number(percentage[1].replace(',', '.'));
  return amount > 50 ? 'metric-high' : amount < 50 ? 'metric-low' : undefined;
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="icon-link"
      href={href}
      aria-label={label}
      title={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Site({
  locale,
  view,
  slug,
}: {
  locale: Locale;
  view: View;
  slug?: string;
}) {
  const t = ui[locale];
  const router = useRouter();
  const pathname = usePathname();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMoment, setOpenMoment] = useState<number | null>(null);
  const [showBackTop, setShowBackTop] = useState(false);
  const reducedMotion = useReducedMotion();
  const activeIndex =
    view === 'case'
      ? 1
      : paths.findIndex((_, i) => ['home', 'experience', 'education', 'projects'][i] === view);

  useEffect(() => {
    if (pathname === '/' && window.localStorage.getItem('sy-language') === 'en')
      router.replace('/en');
  }, [pathname, router]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [theme, locale]);
  useEffect(() => {
    window.localStorage.setItem('sy-language', locale);
  }, [locale]);
  useEffect(() => {
    const updateBackTop = () => setShowBackTop(window.scrollY > 400);
    updateBackTop();
    window.addEventListener('scroll', updateBackTop, { passive: true });
    return () => window.removeEventListener('scroll', updateBackTop);
  }, []);

  function changeTheme() {
    window.localStorage.setItem('sy-theme', theme === 'dark' ? 'light' : 'dark');
    window.dispatchEvent(new Event('sy-theme-change'));
  }

  function changeLanguage() {
    setMenuOpen(false);
    const next = locale === 'pt' ? 'en' : 'pt';
    window.localStorage.setItem('sy-language', next);
    router.push(
      next === 'en'
        ? `/en${pathname === '/' ? '' : pathname}`
        : pathname.replace(/^\/en(?=\/|$)/, '') || '/',
    );
  }
  const enter = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.5 },
      };
  const homeHref = localPath('/', locale);
  const selectedCase = cases.find((item) => item.slug === slug);
  const nextPage = {
    home: { href: localPath('/experience', locale), label: t.nextExperience },
    experience: { href: localPath('/education', locale), label: t.nextEducation },
    education: { href: localPath('/projects', locale), label: t.nextProjects },
    projects: { href: homeHref, label: t.nextHome },
    case: { href: localPath('/education', locale), label: t.nextEducation },
    'not-found': { href: homeHref, label: t.nextHome },
  }[view];

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div id="top" />
      <header className="site-header">
        <div className="header-inner container">
          <Link href={homeHref} className="brand">
            <Image
              src="/favicon.png"
              alt=""
              width={64}
              height={64}
              className="brand-mark"
              aria-hidden="true"
            />
            <span className="brand-copy">
              <strong>Sabrina Yokoyama</strong>
              <small>{t.tagline}</small>
            </span>
          </Link>
          <nav
            className={menuOpen ? 'nav open' : 'nav'}
            aria-label={locale === 'pt' ? 'Navegação principal' : 'Main navigation'}
          >
            {paths.map((path, i) => (
              <Link
                key={path}
                href={localPath(path, locale)}
                className={activeIndex === i ? 'nav-link active' : 'nav-link'}
                aria-current={activeIndex === i ? 'page' : undefined}
              >
                {t.nav[i]}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-link lang-button"
              onClick={changeLanguage}
              aria-label={`${locale === 'pt' ? 'EN' : 'PT'}: ${t.language}`}
              title={t.language}
            >
              <Globe2 size={17} />
              <span>{locale === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <button
              className="icon-link"
              onClick={changeTheme}
              aria-label={t.theme}
              title={t.theme}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <span className="actions-divider" />
            <Link
              href={`${homeHref}#contact`}
              className="icon-link"
              aria-label={t.contactTitle}
              title={t.contactTitle}
            >
              <UserRound size={18} aria-hidden="true" />
            </Link>
            <button
              className="icon-link menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="site-nav-mobile"
              aria-label={menuOpen ? t.closeMenu : t.menu}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <div id="site-nav-mobile" className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
          <nav aria-label={locale === 'pt' ? 'Navegação móvel' : 'Mobile navigation'}>
            {paths.map((path, i) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={path}
                href={localPath(path, locale)}
                className={activeIndex === i ? 'mobile-nav-link active' : 'mobile-nav-link'}
              >
                {t.nav[i]}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main
        id="main"
        className={view === 'home' ? 'home-page' : undefined}
        key={`${locale}-${view}-${slug || ''}`}
      >
        {view === 'home' && (
          <>
            <section className="hero container">
              <div className="hero-content">
                <h1>Sabrina Yokoyama</h1>
                <p className="hero-role">{t.role}</p>
                <p className="hero-description">{t.heroDescription}</p>
                <div className="button-row">
                  <Link href={localPath('/experience', locale)} className="button primary">
                    {t.heroExperience}
                  </Link>
                  <Link href={localPath('/projects', locale)} className="button secondary">
                    {t.heroProjects}
                  </Link>
                </div>
              </div>
              <motion.div className="hero-visual" {...enter}>
                <div className="portrait-stack">
                  <div className="portrait-frame">
                    <Image
                      src="/images/profile.png"
                      alt={
                        locale === 'pt'
                          ? 'Retrato de Sabrina Yokoyama'
                          : 'Portrait of Sabrina Yokoyama'
                      }
                      width={330}
                      height={330}
                      priority
                      sizes="(max-width: 850px) 300px, 330px"
                    />
                  </div>
                  <div className="hero-contact-icons">
                    <IconLink href={links.email} label={t.email}>
                      <Mail size={20} />
                    </IconLink>
                    <IconLink href={links.linkedin} label={t.linkedin}>
                      <Linkedin size={20} />
                    </IconLink>
                    <IconLink href={links.github} label={t.github}>
                      <Github size={20} />
                    </IconLink>
                    <IconLink href={links.whatsapp} label={t.whatsapp}>
                      <MessageCircle size={20} />
                    </IconLink>
                  </div>
                </div>
              </motion.div>
            </section>
            <section className="section container" id="capabilities">
              <div className="section-heading">
                <div>
                  <h2>{t.capabilities}</h2>
                </div>
                <p>{t.capabilitiesIntro}</p>
              </div>
              <div className="skills-grid">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill.icon];
                  return (
                    <motion.div key={skill.title}>
                      <Link href={localPath(skill.href, locale)} className="skill-card glass">
                        <div className="skill-top">
                          <span className="skill-icon">
                            <Icon size={23} strokeWidth={1.7} />
                          </span>
                        </div>
                        <h3>{skill.title}</h3>
                        <p>{tr(skill.description, locale)}</p>
                        <TagList tags={skill.tags} />
                        <span className="text-link">{t.explore}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </section>
            <CaseStudies locale={locale} showIntro={false} />
          </>
        )}
        {view === 'experience' && (
          <>
            <PageIntro title={t.experienceTitle} intro={t.experienceIntro} />
            <section className="section container">
              <SectionHead title={t.momentsTitle} intro={t.momentsIntro} />
              <div className="moments-grid">
                {moments.map((moment, i) => (
                  <button
                    className={openMoment === i ? 'polaroid open' : 'polaroid'}
                    key={moment.title}
                    onClick={() => setOpenMoment(openMoment === i ? null : i)}
                    aria-expanded={openMoment === i}
                    aria-label={`${openMoment === i ? t.hide : t.reveal}: ${moment.title}`}
                  >
                    <div className="polaroid-image">
                      <Image
                        src={moment.image}
                        alt={tr(moment.alt, locale)}
                        fill
                        sizes="(max-width: 600px) 45vw, (max-width: 1100px) 45vw, 22vw"
                      />
                    </div>
                    <div className="polaroid-body">
                      <strong>{moment.title}</strong>
                      <span>{openMoment === i ? tr(moment.description, locale) : t.reveal}</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
            <section className="section container">
              <SectionHead title={t.trajectory} intro={t.trajectoryIntro} />
              <div className="timeline">
                {experience.map((item, i) => (
                  <article className="timeline-entry" key={i}>
                    <div className="timeline-period">{tr(item.period, locale)}</div>
                    <div className="timeline-content glass">
                      <span className="timeline-company">{item.company}</span>
                      <h3>{tr(item.role, locale)}</h3>
                      <p>{tr(item.description, locale)}</p>
                      <ul>
                        {item.bullets[locale].map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <TagList tags={item.tags} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <CaseStudies locale={locale} />
          </>
        )}
        {view === 'case' && selectedCase && (
          <>
            <div className="container case-detail">
              <Link href={localPath('/experience', locale)} className="back-link">
                ‹ {t.caseBack}
              </Link>
              <p className="section-kicker">{t.caseEyebrow}</p>
              <h1>{tr(selectedCase.title, locale)}</h1>
              <p className="detail-area">{tr(selectedCase.area, locale)}</p>
              <div className="detail-hero glass">
                <div>
                  <span
                    className={`metric-display ${improvementMetricClass(selectedCase.metric) || ''}`.trim()}
                  >
                    {selectedCase.metric}
                  </span>
                  <p>
                    {tr(selectedCase.metricLabel, locale)}
                    {selectedCase.estimated && <small> · {t.estimated}</small>}
                  </p>
                </div>
                <BarChart3 size={72} strokeWidth={0.8} />
              </div>
              <div className="detail-columns">
                <section>
                  <h2>{t.challenge}</h2>
                  <p>{tr(selectedCase.problem, locale)}</p>
                </section>
                <section>
                  <h2>{t.approach}</h2>
                  <p>{tr(selectedCase.solution, locale)}</p>
                </section>
              </div>
              <section className="detail-tech">
                <h2>{t.confirmedTech}</h2>
                {selectedCase.technologies.length ? (
                  <TagList tags={selectedCase.technologies} />
                ) : (
                  <p>{t.techNotSpecified}</p>
                )}
              </section>
              <section className="detail-impact">
                <h2>{t.impacts}</h2>
                <div className="impact-grid">
                  {selectedCase.impacts.map((impact, i) => (
                    <div className="impact-card glass" key={i}>
                      <strong className={improvementMetricClass(impact.value)}>
                        {impact.value}
                      </strong>
                      <span>{tr(impact.label, locale)}</span>
                      {impact.estimated && (
                        <small>
                          {i === 2 && selectedCase.slug === 'governanca-de-seguros'
                            ? t.projection
                            : t.estimated}
                        </small>
                      )}
                    </div>
                  ))}
                </div>
              </section>
              <div className="strategic-impact">
                {selectedCase.strategic && (
                  <>
                    <h2>{t.strategicImpacts}</h2>
                    <ul>
                      {selectedCase.strategic.map((item, i) => (
                        <li key={i}>{tr(item, locale)}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="confidentiality">
                <LockKeyhole size={18} />
                <p>
                  <strong>{t.confidentiality}. </strong>
                  {t.confidentialityText}
                </p>
              </div>
            </div>
          </>
        )}
        {view === 'education' && (
          <>
            <PageIntro title={t.educationTitle} intro={t.educationIntro} />
            <section className="section container">
              <SectionHead title={t.academic} />
              <div className="degree-card glass">
                <div className="degree-icon">
                  <GraduationCap size={34} strokeWidth={1.4} />
                </div>
                <div>
                  <span className="status-pill">{t.inProgress}</span>
                  <h3>{tr(degree.title, locale)}</h3>
                  <p className="degree-subtitle">{tr(degree.subtitle, locale)}</p>
                  <p>{tr(degree.description, locale)}</p>
                  <TagList tags={degree.tags} />
                </div>
              </div>
            </section>
            <section className="section container">
              <SectionHead title={t.courses} intro={t.coursesIntro} />
              <div className="courses-grid">
                {courses.map((course) => (
                  <a
                    className="course-card glass"
                    key={course.title}
                    href={links.certificates}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${course.title}: ${t.viewCertificates}`}
                  >
                    <div className="course-top">
                      <span>{course.issuer}</span>
                      <ExternalLink size={17} />
                    </div>
                    <h3>{course.title}</h3>
                    <TagList tags={course.tags} />
                  </a>
                ))}
              </div>
            </section>
          </>
        )}
        {view === 'projects' && (
          <>
            <PageIntro title={t.projectsTitle} intro={t.projectsIntro} />
            <section className="section container">
              <div className="projects-grid">
                {projects.map((project, i) => (
                  <article className="project-card glass" key={project.title}>
                    <div className="project-header">
                      <span className="project-symbol">
                        {i === 0 ? (
                          <BrainCircuit size={28} strokeWidth={1.5} />
                        ) : (
                          <BarChart3 size={28} strokeWidth={1.5} />
                        )}
                      </span>
                    </div>
                    <p className="project-area">{tr(project.area, locale)}</p>
                    <h2>{project.title}</h2>
                    {project.motto && <p className="project-motto">{project.motto}</p>}
                    <p>{tr(project.description, locale)}</p>
                    <TagList tags={project.tags} />
                    {project.note && (
                      <p className="project-note">
                        <strong>{t.projectNote}:</strong> {tr(project.note, locale)}
                      </p>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button secondary"
                    >
                      {t.repository}
                      <Github size={17} />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
        {view === 'not-found' && (
          <div className="container not-found">
            <p className="section-kicker">404</p>
            <h1>{t.notFoundTitle}</h1>
            <p>{t.notFoundText}</p>
            <Link className="button primary" href={homeHref}>
              {t.homeLink}
            </Link>
          </div>
        )}
        <nav className="next-page container" aria-label={t.nextSection}>
          <Link className="button primary next-page-link" href={nextPage.href}>
            {nextPage.label}
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </nav>
      </main>
      <section className="contact-band" id="contact">
        <div className="container contact-inner">
          <h2>{t.contactTitle}</h2>
          <div className="contact-actions">
            <a className="button primary" href={links.email}>
              <Mail size={18} aria-hidden="true" />
              {t.contactEmail}
            </a>
            <a
              className="button secondary"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} aria-hidden="true" />
              {t.contactLinkedin}
            </a>
            <a
              className="button secondary"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              {t.contactGithub}
            </a>
            <a
              className="button secondary"
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {t.contactWhatsapp}
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-main">
          <div>
            <Link href={homeHref} className="footer-brand">
              Sabrina Yokoyama
            </Link>
            <p>{t.footerRole}</p>
          </div>
          <div className="footer-social">
            <IconLink href={links.github} label={t.github}>
              <Github size={19} />
            </IconLink>
            <IconLink href={links.linkedin} label={t.linkedin}>
              <Linkedin size={19} />
            </IconLink>
            <IconLink href={links.email} label={t.email}>
              <Mail size={19} />
            </IconLink>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Sabrina Yokoyama. {t.rights}
          </span>
        </div>
      </footer>
      <a
        href="#top"
        className={showBackTop ? 'floating-back-top visible' : 'floating-back-top'}
        aria-label={t.backTop}
        title={t.backTop}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </a>
    </>
  );
}

function CaseStudies({ locale, showIntro = true }: { locale: Locale; showIntro?: boolean }) {
  const t = ui[locale];
  return (
    <section className="section container cases-section">
      <SectionHead title={t.casesTitle} intro={showIntro ? t.casesIntro : undefined} />
      <div className="cases-grid">
        {cases.map((item) => (
          <article className="case-card glass" key={item.slug}>
            <div className="case-topline">
              <span>{tr(item.area, locale)}</span>
              <BarChart3 size={20} />
            </div>
            <div className="case-metric">
              <strong className={improvementMetricClass(item.metric)}>{item.metric}</strong>
              <span>
                {tr(item.metricLabel, locale)}
                {item.estimated && <small> · {t.estimated}</small>}
              </span>
            </div>
            <h3>{tr(item.title, locale)}</h3>
            <p>{tr(item.summary, locale)}</p>
            <TagList tags={item.keywords} />
            <Link className="text-link" href={localPath(`/experience/cases/${item.slug}`, locale)}>
              {t.exploreCase}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function PageIntro({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="page-intro container">
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}
function SectionHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
      </div>
      {intro && <p>{intro}</p>}
    </div>
  );
}
