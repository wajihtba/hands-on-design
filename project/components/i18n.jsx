// i18n — EN / FR / AR with native copy (not translations).
// Exposes window.useI18n(): { lang, t, setLang } for all components.

const translations = {
  en: {
    title: "Learn Software Engineering — Hands-On Labs Online | Hands-On",
    nav: { labs: 'Labs', method: 'Method', about: 'About' },
    header: { signin: 'Sign in', cta: 'Get started' },
    hero: {
      eyebrow: "// Tools change. Engineering doesn't.",
      h1_1: 'Become a',
      h1_2: 'software engineer.',
      lede: 'Hands-on labs, live workshops, and real-world challenges that build the skills that last — right in your browser.',
      cta_primary: 'Start for free',
      cta_secondary: 'See how it works',
      stats: [
        { n: '400+', l: 'hands-on labs' },
        { n: 'Live', l: 'workshops' },
        { n: '4.9', l: 'average rating' },
        { n: 'EU', l: 'instructors' },
      ],
      lab: {
        kicker: 'PostgreSQL Performance',
        title: 'Optimizing Multi-Table JOINs',
        progress: '2/5',
        step_active: 'Run the JOIN query — observe Seq Scans',
        description: 'This query joins customers → orders → order_items → products. Without indexes on foreign keys and filter columns, Postgres has to Seq Scan every table.',
        filename: 'query.sql — PostgreSQL (PGlite)',
        results: 'Results',
        meta: '6 rows · 12ms',
        cols: ['name', 'plan', 'orders', 'revenue'],
        rows: [
          ['Customer 42',  'enterprise', '18', '12,847.50'],
          ['Customer 7',   'pro',        '15',  '9,234.00'],
          ['Customer 156', 'enterprise', '12',  '8,491.25'],
          ['Customer 91',  'pro',        '11',  '7,120.80'],
          ['Customer 23',  'free',       ' 9',  '5,890.40'],
          ['Customer 188', 'enterprise', ' 8',  '4,215.60'],
        ],
        mark: 'Mark step complete',
      },
    },
    stack: {
      eyebrow: '// Labs for every stack',
      title: 'Labs for every stack.',
      pills: ['Frontend', 'React', 'SQL', 'Node.js', 'Terminal', 'Linux', 'Docker', 'Python', 'Go', 'TypeScript'],
    },
    myth: {
      eyebrow: '// The shortcut',
      pre: '6 months to',
      rotating: ['full-stack', 'backend', 'frontend', 'DevOps'],
      post: 'is a myth.',
      lede: 'It takes time — and real practice.',
      cards: [
        { title: 'Hands-on labs',     body: 'Real environments with guided steps.' },
        { title: 'Interactive videos', body: 'Lessons with built-in checkpoints.' },
        { title: 'Challenges',         body: 'Timed scenarios to test your skills.' },
      ],
    },
    longRun: {
      eyebrow: '// Built for the long run',
      h2_1: 'We focus on the skills',
      h2_2: 'that stay relevant.',
      lede: 'Debugging, system design, architecture, problem-solving — the engineering fundamentals that compound over a career.',
      left: 'Short term',
      right: 'Long term',
      rows: [
        { bad: 'Memorize syntax',        good: 'Understand systems' },
        { bad: 'Chase every new tool',   good: 'Invest in skills that last' },
        { bad: 'Follow along passively', good: 'Think through problems' },
      ],
    },
    cta: {
      eyebrow: '// Ready to ship?',
      h2_1: 'Stop watching.',
      h2_2: 'Start building.',
      lede: 'Your first lab is free — no credit card, no tutorial, just code that runs.',
      button: 'Start your first lab',
      micro: 'Free · No credit card · Ready in 30 seconds',
    },
    footer: {
      tag: "Tools change. Engineering doesn't.",
      productH: 'Product',
      product: ['Labs', 'Method', 'Pricing'],
      companyH: 'Company',
      company: ['About', 'Blog', 'Contact'],
      legalH: 'Legal',
      legal: ['Privacy', 'Terms'],
      copy: '© 2026 Hands-on. All rights reserved.',
      by: 'hello@handson.dev',
    },
  },

  fr: {
    title: "Apprenez l'ingénierie logicielle — Labs Hands-On en ligne | Hands-On",
    nav: { labs: 'Labs', method: 'Méthode', about: 'À propos' },
    header: { signin: 'Se connecter', cta: 'Commencer' },
    hero: {
      eyebrow: '// Les outils changent. L’ingénierie reste.',
      h1_1: 'Devenez',
      h1_2: 'ingénieur logiciel.',
      lede: 'Labs pratiques, ateliers en direct et défis concrets pour maîtriser le débogage, la conception système et l’architecture — directement dans votre navigateur.',
      cta_primary: 'Commencer gratuitement',
      cta_secondary: 'Voir la méthode',
      stats: [
        { n: '400+', l: 'labs pratiques' },
        { n: 'Live', l: 'ateliers' },
        { n: '4.9', l: 'note moyenne' },
        { n: 'UE',  l: 'instructeurs' },
      ],
      lab: {
        kicker: 'PostgreSQL Performance',
        title: 'Optimiser les JOINs multi-tables',
        progress: '2/5',
        step_active: 'Lancer la requête JOIN — observer les Seq Scans',
        description: 'Cette requête joint customers → orders → order_items → products. Sans index sur les clés étrangères et les colonnes de filtre, Postgres fait un Seq Scan sur chaque table.',
        filename: 'query.sql — PostgreSQL (PGlite)',
        results: 'Résultats',
        meta: '6 lignes · 12ms',
        cols: ['name', 'plan', 'orders', 'revenue'],
        rows: [
          ['Customer 42',  'enterprise', '18', '12 847,50'],
          ['Customer 7',   'pro',        '15',  '9 234,00'],
          ['Customer 156', 'enterprise', '12',  '8 491,25'],
          ['Customer 91',  'pro',        '11',  '7 120,80'],
          ['Customer 23',  'free',       ' 9',  '5 890,40'],
          ['Customer 188', 'enterprise', ' 8',  '4 215,60'],
        ],
        mark: 'Valider cette étape',
      },
    },
    stack: {
      eyebrow: '// Des labs pour chaque stack',
      title: 'Des labs pour chaque stack.',
      pills: ['Frontend', 'React', 'SQL', 'Node.js', 'Terminal', 'Linux', 'Docker', 'Python', 'Go', 'TypeScript'],
    },
    myth: {
      eyebrow: '// Le raccourci',
      pre: '6 mois pour devenir',
      rotating: ['full-stack', 'backend', 'frontend', 'DevOps'],
      post: 'est un mythe.',
      lede: 'Ça prend du temps — et de la vraie pratique.',
      cards: [
        { title: 'Labs pratiques',       body: 'Des environnements réels avec des étapes guidées.' },
        { title: 'Vidéos interactives',  body: 'Des leçons avec des points de contrôle intégrés.' },
        { title: 'Défis',                body: 'Des scénarios chronométrés pour tester vos compétences.' },
      ],
    },
    longRun: {
      eyebrow: '// Conçu pour durer',
      h2_1: 'On se concentre sur',
      h2_2: 'ce qui reste pertinent.',
      lede: 'Débogage, conception système, architecture, résolution de problèmes — les fondamentaux qui s’accumulent au fil d’une carrière.',
      left: 'Court terme',
      right: 'Long terme',
      rows: [
        { bad: 'Mémoriser la syntaxe',     good: 'Comprendre les systèmes' },
        { bad: 'Courir après chaque outil', good: 'Investir dans des compétences durables' },
        { bad: 'Suivre passivement',        good: 'Réfléchir aux problèmes' },
      ],
    },
    cta: {
      eyebrow: '// Prêt·e à shipper ?',
      h2_1: 'Arrêtez de regarder.',
      h2_2: 'Commencez à construire.',
      lede: 'Votre premier lab est gratuit — sans carte bancaire, sans tutoriel, juste du code qui tourne.',
      button: 'Démarrer votre premier lab',
      micro: 'Gratuit · Sans carte bancaire · Prêt en 30 secondes',
    },
    footer: {
      tag: 'Les outils changent. L’ingénierie reste.',
      productH: 'Produit',
      product: ['Labs', 'Méthode', 'Tarifs'],
      companyH: 'Entreprise',
      company: ['À propos', 'Blog', 'Contact'],
      legalH: 'Légal',
      legal: ['Confidentialité', 'Conditions'],
      copy: '© 2026 Hands-on. Tous droits réservés.',
      by: 'hello@handson.dev',
    },
  },

  ar: {
    title: 'تعلّم هندسة البرمجيات — مختبرات Hands-On | Hands-On',
    nav: { labs: 'المختبرات', method: 'الطريقة', about: 'عنّا' },
    header: { signin: 'تسجيل الدخول', cta: 'ابدأ الآن' },
    hero: {
      eyebrow: '// الأدوات تتغيّر. الهندسة تبقى.',
      h1_1: 'اصنع مسيرتك',
      h1_2: 'في هندسة البرمجيات.',
      lede: 'مختبرات تطبيقية، ورش عمل حيّة، وتحديات واقعية تبني المهارات التي تدوم — مباشرة من متصفحك.',
      cta_primary: 'ابدأ مجّانًا',
      cta_secondary: 'اكتشف الطريقة',
      stats: [
        { n: '+400', l: 'مختبر تطبيقي' },
        { n: 'حيّة', l: 'ورش عمل' },
        { n: '4.9',  l: 'تقييم المتعلّمين' },
        { n: 'EU',   l: 'مدرّبون' },
      ],
      lab: {
        kicker: 'PostgreSQL Performance',
        title: 'تحسين JOIN متعدد الجداول',
        progress: '2/5',
        step_active: 'شغّل استعلام الـ JOIN — لاحظ Seq Scans',
        description: 'يجمع هذا الاستعلام جداول customers → orders → order_items → products. دون فهارس على المفاتيح الأجنبية وأعمدة التصفية، يضطر Postgres لعمل Seq Scan على كل جدول.',
        filename: 'query.sql — PostgreSQL (PGlite)',
        results: 'النتائج',
        meta: '6 صفوف · 12ms',
        cols: ['name', 'plan', 'orders', 'revenue'],
        rows: [
          ['Customer 42',  'enterprise', '18', '12,847.50'],
          ['Customer 7',   'pro',        '15',  '9,234.00'],
          ['Customer 156', 'enterprise', '12',  '8,491.25'],
          ['Customer 91',  'pro',        '11',  '7,120.80'],
          ['Customer 23',  'free',       ' 9',  '5,890.40'],
          ['Customer 188', 'enterprise', ' 8',  '4,215.60'],
        ],
        mark: 'تمّت الخطوة',
      },
    },
    stack: {
      eyebrow: '// مختبرات لكل تقنية',
      title: 'مختبرات لكل تقنية.',
      pills: ['Frontend', 'React', 'SQL', 'Node.js', 'Terminal', 'Linux', 'Docker', 'Python', 'Go', 'TypeScript'],
    },
    myth: {
      eyebrow: '// الاختصار',
      pre: '6 أشهر لتصبح',
      rotating: ['full-stack', 'backend', 'frontend', 'DevOps'],
      post: 'خرافة.',
      lede: 'الأمر يحتاج وقتًا — وممارسة حقيقية.',
      cards: [
        { title: 'مختبرات تطبيقية',   body: 'بيئات حقيقية بخطوات موجّهة.' },
        { title: 'فيديوهات تفاعلية',  body: 'دروس بنقاط تحقّق مدمجة.' },
        { title: 'تحديات',            body: 'سيناريوهات بوقت محدّد لاختبار مهاراتك.' },
      ],
    },
    longRun: {
      eyebrow: '// صُمّم ليدوم',
      h2_1: 'نركّز على المهارات',
      h2_2: 'التي تبقى.',
      lede: 'تصحيح الأخطاء، تصميم الأنظمة، البنية البرمجية، حلّ المشكلات — أساسيات الهندسة التي تتراكم على مدى المسيرة.',
      left: 'المدى القصير',
      right: 'المدى الطويل',
      rows: [
        { bad: 'الحفظ بلا فهم',         good: 'فهم الأنظمة' },
        { bad: 'التشتّت بين الأدوات',   good: 'الاستثمار في مهارات تدوم' },
        { bad: 'المشاهدة دون تطبيق',     good: 'التفكير في حلّ المشكلات' },
      ],
    },
    cta: {
      eyebrow: '// جاهز للانطلاق؟',
      h2_1: 'توقّف عن المشاهدة.',
      h2_2: 'ابدأ بالبناء.',
      lede: 'أوّل مختبر مجّاني — بدون بطاقة بنكية، بدون دروس نظرية، كود يعمل فقط.',
      button: 'ابدأ أوّل مختبر',
      micro: 'مجّانًا · بدون بطاقة بنكية · جاهز في 30 ثانية',
    },
    footer: {
      tag: 'الأدوات تتغيّر. الهندسة تبقى.',
      productH: 'المنتج',
      product: ['المختبرات', 'الطريقة', 'الأسعار'],
      companyH: 'الشركة',
      company: ['عنّا', 'المدوّنة', 'تواصل'],
      legalH: 'قانوني',
      legal: ['الخصوصية', 'الشروط'],
      copy: '© 2026 Hands-on. جميع الحقوق محفوظة.',
      by: 'hello@handson.dev',
    },
  },
};

const LANG_KEY = 'hands-on-lang';
const VALID = ['en', 'fr', 'ar'];
function initialLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && VALID.includes(saved)) return saved;
  } catch (_) {}
  const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  if (VALID.includes(nav)) return nav;
  return 'fr';
}

window.__LANG = initialLang();

function applyLang(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  const t = translations[lang];
  if (t && t.title) document.title = t.title;
  try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
}
// Apply before React mounts so first paint has correct dir
applyLang(window.__LANG);

window.setLang = function (lang) {
  if (!VALID.includes(lang)) return;
  window.__LANG = lang;
  applyLang(lang);
  window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang } }));
};

function resolve(obj, key) {
  const parts = key.split('.');
  let v = obj;
  for (const p of parts) {
    if (v == null) return undefined;
    v = v[p];
  }
  return v;
}

window.useI18n = function () {
  const [lang, setLangState] = React.useState(window.__LANG);
  React.useEffect(() => {
    const onChange = (e) => setLangState(e.detail.lang);
    window.addEventListener('lang-change', onChange);
    return () => window.removeEventListener('lang-change', onChange);
  }, []);
  const t = React.useCallback((key) => {
    const v = resolve(translations[lang], key);
    return v === undefined ? key : v;
  }, [lang]);
  return { lang, t, setLang: window.setLang, dir: lang === 'ar' ? 'rtl' : 'ltr' };
};

window.__translations = translations;
