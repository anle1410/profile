import { motion } from 'framer-motion';
import {
  ArrowUp,
  Briefcase,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  Smartphone,
  Sparkles,
  SunMedium,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { SectionHeader } from './components/SectionHeader';
import { certificates } from './data/certificates';
import { learningJourney } from './data/education';
import { navItems, profile, socialLinks } from './data/profile';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? '');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0];
  const cvAvailable = false;

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.7],
        rootMargin: '0px 0px -12% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Vui lòng điền đầy đủ tên, email và nội dung.',
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:anle64437@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus({
      type: 'success',
      message: 'Message is ready to send via email.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 light:bg-slate-50 light:text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/70 light:border-slate-200 light:bg-white/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 font-mono text-sm font-bold text-slate-950 shadow-glow">
              AN
            </div>
            <span className="text-lg font-semibold tracking-[0.18em] text-slate-50 light:text-slate-900">
              LÊ PHÚ AN
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/70 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-300 light:bg-white light:text-slate-700"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Let’s talk
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 light:border-slate-300 light:bg-white light:text-slate-700"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 light:border-slate-300 light:bg-white light:text-slate-700"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950/95 md:hidden light:border-slate-200 light:bg-white/95">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-cyan-300 light:text-slate-700 light:hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                <Code2 size={14} /> Developer Portfolio
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-50 md:text-6xl light:text-slate-900">
                LÊ PHÚ AN
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300 light:text-slate-600">
                <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 light:border-slate-200 light:bg-white/80">
                  FULL-STACK DEVELOPER
                </span>
              </div>

              <p className="mt-5 text-base text-slate-300 md:text-xl light:text-slate-600">
                {profile.tagline}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-600">
                {profile.shortIntro}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110"
                >
                  Xem dự án
                  <ChevronRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    if (cvAvailable) {
                      window.open('/cv.pdf', '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    cvAvailable
                      ? 'border-cyan-400/40 bg-cyan-400/5 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200'
                      : 'cursor-not-allowed border-slate-700 bg-slate-900/60 text-slate-500'
                  }`}
                  aria-disabled={!cvAvailable}
                  title={cvAvailable ? 'Download CV (PDF)' : 'CV PDF will be added once the official file is ready'}
                >
                  {cvAvailable ? 'Download CV (PDF)' : 'CV PDF coming soon'}
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-300 light:bg-white light:text-slate-800"
                >
                  Liên hệ với tôi
                  <Mail size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.label === 'GitHub' ? Code2 : link.label === 'LinkedIn' ? Briefcase : Mail;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={link.ariaLabel}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 light:border-slate-200 light:bg-white/80 light:text-slate-700"
                    >
                      <Icon size={16} />
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 light:border-emerald-500/20 light:bg-emerald-500/5 light:text-emerald-700">
                <Sparkles size={16} />
                Open to Internship / Fresher Opportunities
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-slate-700 bg-slate-900/70 p-5 shadow-glow light:border-slate-200 light:bg-white/90">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.16),transparent_35%)]" />
                <div className="relative rounded-[22px] border border-slate-700/70 bg-slate-950/80 p-6 light:border-slate-200 light:bg-slate-50">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {[1, 2, 3].map((dot) => (
                        <span key={dot} className="h-3 w-3 rounded-full bg-slate-600" />
                      ))}
                    </div>
                    <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                      Live profile
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 light:border-slate-200 light:bg-white">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-xl font-bold text-slate-950">
                        AN
                      </div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">
                        Developer
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-50 light:text-slate-900">
                        {profile.name}
                      </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 light:border-slate-200 light:bg-white">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">
                        Focus
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300 light:text-slate-600">
                        <li className="flex items-center gap-2"><Code2 size={14} className="text-cyan-400" /> Web</li>
                        <li className="flex items-center gap-2"><Smartphone size={14} className="text-cyan-400" /> Mobile</li>
                        <li className="flex items-center gap-2"><Cpu size={14} className="text-cyan-400" /> AI</li>
                        <li className="flex items-center gap-2"><Database size={14} className="text-cyan-400" /> Data</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900/70 p-4 light:border-slate-200 light:bg-slate-50">
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">
                      <span>Current stack</span>
                      <span>Core-skill</span>
                    </div>
                    <div className="space-y-4">
                      {['Frontend', 'Backend', 'QA & Testing', 'AI + Data'].map((label, index) => (
                        <div key={label}>
                          <div className="mb-2 flex justify-between text-sm text-slate-300 light:text-slate-600">
                            <span>{label}</span>
                            <span>{[80, 70, 70, 60][index]}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800 light:bg-slate-200">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${[80, 70, 70, 60][index]}%` }}
                              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About"
            title="Beyond Code. Building Better Solutions."
            description="Tôi đang rèn luyện khả năng phát triển phần mềm hiện đại, tập trung vào tư duy logic, kỹ năng học hỏi nhanh và chất lượng sản phẩm."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-glow light:border-slate-200 light:bg-white/90">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-300 light:text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 light:border-slate-200 light:bg-white/90">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-cyan-400" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Education</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50 light:text-slate-900">{profile.education}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-cyan-400" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Major</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50 light:text-slate-900">{profile.major}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 light:border-slate-200 light:bg-slate-50">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">Career target</p>
                <p className="mt-2 text-base text-slate-300 light:text-slate-700">{profile.status}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Skills"
            title="Technology, quality mindset, and continuous learning."
            description="Các kỹ năng được tổ chức theo nhóm, phản ánh các lĩnh vực tôi đang phát triển và ứng dụng trong dự án."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/65 p-5 light:border-slate-200 light:bg-white/90"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-50 light:text-slate-900">{group.title}</h3>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs font-semibold text-cyan-300">
                    {group.level}%
                  </span>
                </div>

                <p className="mb-4 text-sm leading-6 text-slate-400 light:text-slate-600">{group.description}</p>

                <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-slate-800 light:bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1.5 text-xs text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Featured work and learning-driven experiments."
            description="Các dự án được xây dựng như những bước đi thực tế trong quá trình học tập và thử nghiệm kỹ năng từ UI/UX, AI đến trải nghiệm người dùng."
          />

          <div className="mt-12 grid gap-7 lg:grid-cols-2 xl:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/65 shadow-glow light:border-slate-200 light:bg-white/90"
              >
                <div className="overflow-hidden border-b border-slate-800 light:border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300 light:border-slate-200 light:text-slate-600">
                      {project.status === 'coming-soon' ? 'Coming Soon' : 'Available'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-50 light:text-slate-900">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-700">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950/60 p-4 light:border-slate-200 light:bg-slate-50">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">My role</p>
                    <p className="mt-2 text-sm text-slate-200 light:text-slate-700">{project.role}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                      View details
                      <ChevronRight size={16} />
                    </button>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500 light:border-slate-200 light:bg-white light:text-slate-800"
                      >
                        GitHub <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-500 light:border-slate-200 light:bg-white light:text-slate-500">
                        GitHub coming soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {selectedProject && (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/65 p-6 light:border-slate-200 light:bg-white/90"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Selected project</p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-50 light:text-slate-900">{selectedProject.title}</h3>
                </div>
                <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {selectedProject.status === 'coming-soon' ? 'Project in progress' : 'Available'}
                </span>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/65 p-5 light:border-slate-200 light:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Overview</p>
                  <p className="mt-3 text-base leading-7 text-slate-300 light:text-slate-700">{selectedProject.detail.overview}</p>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-950/65 p-5 light:border-slate-200 light:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Features</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300 light:text-slate-700">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check size={14} className="mt-1 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/65 p-5 light:border-slate-200 light:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Tech Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 light:border-slate-200 light:bg-white light:text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-950/65 p-5 light:border-slate-200 light:bg-slate-50">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Challenges</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300 light:text-slate-700">
                    {selectedProject.detail.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/65 p-5 light:border-slate-200 light:bg-slate-50">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Lessons Learned</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-300 light:text-slate-700 md:grid-cols-3">
                  {selectedProject.detail.lessons.map((lesson) => (
                    <li key={lesson} className="rounded-xl border border-slate-700 bg-slate-900/70 p-3 light:border-slate-200 light:bg-white">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </section>

        <section id="journey" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Journey"
            title="Education & learning journey."
            description="Tôi coi quá trình học tập là nền tảng cho việc xây dựng kỹ năng lập trình, thiết kế UX và tư duy giải quyết vấn đề."
          />

          <div className="mt-12 space-y-6">
            {learningJourney.map((stage, index) => (
              <motion.div
                key={stage.period}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/65 p-5 md:grid-cols-[180px_1fr] light:border-slate-200 light:bg-white/90"
              >
                <div className="flex items-center md:justify-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{stage.period}</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4 light:border-slate-200 light:bg-slate-50">
                  <h3 className="text-xl font-semibold text-slate-50 light:text-slate-900">{stage.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {stage.items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300 light:border-slate-200 light:text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Certificates"
            title="Official documentation and learning proof."
            description="Một số chứng chỉ và tài liệu học tập đang chờ cập nhật thông tin chính thức để đảm bảo tính trung thực và minh bạch."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <motion.article
                key={certificate.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/65 p-6 light:border-slate-200 light:bg-white/90"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-50 light:text-slate-900">{certificate.name}</h3>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] ${certificate.status === 'pending' ? 'border border-amber-400/25 bg-amber-500/10 text-amber-300 light:border-amber-200 light:bg-amber-50 light:text-amber-700' : 'border border-emerald-400/25 bg-emerald-500/10 text-emerald-300 light:border-emerald-200 light:bg-emerald-50 light:text-emerald-700'}`}>
                    {certificate.status === 'pending' ? 'Details pending' : 'Verified'}
                  </span>
                </div>

                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">
                  {certificate.issuer}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300 light:text-slate-700">{certificate.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3 light:border-slate-200 light:bg-slate-50">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 light:text-slate-500">Issue date</p>
                    <p className="mt-2 text-sm text-slate-200 light:text-slate-700">{certificate.date ?? 'Pending'}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-3 light:border-slate-200 light:bg-slate-50">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 light:text-slate-500">Score</p>
                    <p className="mt-2 text-sm text-slate-200 light:text-slate-700">{certificate.score ?? 'Pending'}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="career-goal" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Career Goal"
            title="I want to start my career in a real engineering environment."
            description="Tôi mong muốn bắt đầu sự nghiệp trong môi trường công nghệ chuyên nghiệp, nơi có thể áp dụng kiến thức đã học, tiếp tục nâng cao năng lực phát triển phần mềm và đóng góp vào sản phẩm có giá trị thực tế."
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {profile.careerGoals.map((goal) => (
              <span
                key={goal}
                className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 light:border-slate-200 light:bg-white light:text-slate-700"
              >
                {goal}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Build Something Meaningful."
            description="Mình đang tìm kiếm cơ hội thực tập / fresher phù hợp với web, mobile, AI, QA/QC và game UI."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/65 p-6 light:border-slate-200 light:bg-white/90">
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={20} />
                <a href="mailto:anle64437@gmail.com" className="text-base text-slate-200 light:text-slate-700">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="text-cyan-400" size={20} />
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-base text-slate-200 light:text-slate-700">
                  {profile.githubUrl}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-cyan-400" size={20} />
                <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="text-base text-slate-200 light:text-slate-700">
                  {profile.linkedInUrl}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={20} />
                <a href="tel:0868264437" className="text-base text-slate-200 light:text-slate-700">
                  {profile.phone}
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:anle64437@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-slate-950">
                  Send email
                  <Mail size={16} />
                </a>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-100 light:border-slate-200 light:bg-white light:text-slate-800">
                  View GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/65 p-6 light:border-slate-200 light:bg-white/90">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300 light:text-slate-700">
                    Tên
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 light:border-slate-200 light:bg-slate-50 light:text-slate-800"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300 light:text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 light:border-slate-200 light:bg-slate-50 light:text-slate-800"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300 light:text-slate-700">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 light:border-slate-200 light:bg-slate-50 light:text-slate-800"
                  placeholder="Mô tả ngắn về cơ hội, dự án hoặc câu hỏi bạn muốn trao đổi..."
                />
              </div>

              {formStatus.message && (
                <p
                  className={`mt-4 text-sm ${
                    formStatus.type === 'success' ? 'text-emerald-300 light:text-emerald-700' : 'text-rose-300 light:text-rose-700'
                  }`}
                >
                  {formStatus.message}
                </p>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  Gửi tin nhắn
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/60 light:border-slate-200 light:bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xl font-semibold text-slate-50 light:text-slate-900">Lê Phú An</p>
            <p className="mt-1 text-sm text-slate-400 light:text-slate-600">Full-stack Developer Portfolio</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 light:text-slate-600">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-400 light:text-slate-600">Designed & Built with passion for technology.</span>
            <a href="#home" aria-label="Back to top" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300 light:border-slate-200 light:bg-white light:text-slate-800">
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
