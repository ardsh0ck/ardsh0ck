import { v4 as uuidv4 } from 'uuid'

const works = [
  {
    img: 'images/thumbnails/rozetka_logo.svg',
    title: `Interface development for <span>Rozetka</span>`,
    url: 'https://rozetka.com.ua/',
    urlTitle: 'Rozetka',
    slug: 'rozetka',
    id: uuidv4(),
    description:
      'Complex redesign and development of all interfaces for Rozetka.',
    body: `<p>Main page.</p>
    <figure><img src="/images/works/rozetka/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>
    <p>Super portal. Page which consist main accents of current section.</p>
    <figure><img src="/images/works/rozetka/002.jpg" loading="lazy" alt="Screenshot of main super portal" /></figure>
    <p>Catalogue page.</p>
    <figure><img src="/images/works/rozetka/003.jpg" loading="lazy" alt="Screenshot of catalogue" /></figure>
    <p>Product page.</p>
    <figure><img src="/images/works/rozetka/004.jpg" loading="lazy" alt="Screenshot of product page" /></figure>
    `,
  },
  {
    img: 'images/thumbnails/tehmo_logo.svg',
    title: `Markup for <span>Tehmo</span>`,
    url: 'https://tehmo.com/',
    urlTitle: 'Tehmo',
    slug: 'tehmo',
    id: uuidv4(),
    description: 'Markup for website about gadgets and software.',
    body: `<p>Main page.</p>
    <figure><img src="/images/works/tehmo/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>
    <p>Main page of Gadgets section.</p>
    <figure><img src="/images/works/tehmo/002.jpg" loading="lazy" alt="Screenshot of gadgets section" /></figure>
    <p>Gadgegts catalogue.</p>
    <figure><img src="/images/works/tehmo/003.jpg" loading="lazy" alt="Screenshot of catalogue" /></figure>
    <p>Gadgegt's page.</p>
    <figure><img src="/images/works/tehmo/004.jpg" loading="lazy" alt="Screenshot of gadget page" /></figure>
    `,
  },
  {
    img: 'images/thumbnails/newberry_logo.svg',
    title: `Markup for <span>Newberry</span>`,
    url: 'https://newberry.ru/',
    urlTitle: 'NewBerry',
    description: 'Markup for fashion magazine.',
    slug: 'newberry',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/newberry/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/pdalife_logo.svg',
    title: `Markup for <span>PDALIFE</span>`,
    url: 'https://pdalife.to/',
    urlTitle: 'PDALife',
    description: 'Markup for apps catalogue for Android and iOS.',
    slug: 'pda-life',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/pdalife/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/cosmo_logo.jpg',
    title: `Markup for <span>CosmoEssay</span>`,
    urlTitle: 'CosmoEssay',
    description: 'Markup for CosmoEssay.',
    slug: 'cosmo-essay',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/cosmo/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/study_logo.jpg',
    title: `Markup for <span>Studydaddy</span>`,
    urlTitle: 'Studydaddy',
    description: 'Markup for Studydaddy.',
    slug: 'study-daddy',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/studydaddy/001.png" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/dmw_logo.jpg',
    title: `Markup for <span>DoMyWriting</span>`,
    urlTitle: 'DoMyWriting',
    description: 'Markup for DoMyWriting.',
    slug: 'do-my-writing',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/domy/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/sch_logo.jpg',
    title: `Markup for <span>SchreibenHilfe</span>`,
    urlTitle: 'SchreibenHilfe',
    description: 'Markup for SchreibenHilfe.',
    slug: 'schreiben-hilfe',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/schreiben/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/aks_l_logo.jpg',
    title: `Reapair center's info page <span>AKS</span>`,
    urlTitle: 'AKS',
    description: 'Frontend development for AKS e-shop.',
    slug: 'aks-service',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/aksrc/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>`,
  },
  {
    img: 'images/thumbnails/belkozin_logo.jpg',
    title: `Collagene technologies factory's website <span>Belkozin</span>`,
    urlTitle: 'Belkozin',
    description: 'Frontend development for Belkozin factory.',
    slug: 'belkozin',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/belkozin/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>
    <p>Products page.</p>
    <figure><img src="/images/works/belkozin/002.jpg" loading="lazy" alt="Screenshot of products page" /></figure>`,
  },
  {
    img: 'images/thumbnails/yukke_logo.jpg',
    title: `E-shop <span>Yukke</span>`,
    url: 'https://yukke.com.ua/',
    urlTitle: 'Yukke',
    description: 'Frontend development for Yukke e-shop.',
    slug: 'yukke',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/yukke/001.jpg" loading="lazy" alt="Screenshot of main page" /></figure>
    <p>Category page.</p>
    <figure><img src="/images/works/yukke/002.jpg" loading="lazy" alt="Screenshot of category page" /></figure>
    <p>Subcategory page.</p>
    <figure><img src="/images/works/yukke/003.jpg" loading="lazy" alt="Screenshot of subcategory page" /></figure>`,
  },
  {
    img: 'images/thumbnails/aks_logo.jpg',
    title: `E-shop <span>AKS</span>. Version for small screens`,
    urlTitle: 'AKS',
    description: 'Frontend development for AKS e-shop.',
    slug: 'aks',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/aks/001.jpg" loading="lazy" alt="Screenshot of main page" />
    <p>Catalogue page.</p>
    <img src="/images/works/aks/002.jpg" loading="lazy" alt="Screenshot of catalogue page" />
    <p>Product page.</p>
    <img src="/images/works/aks/002.jpg" loading="lazy" alt="Screenshot of product page" />`,
  },
  {
    img: 'images/thumbnails/r+_logo.jpg',
    title: `Job board <span>RabotaPlus</span>`,
    url: 'http://rabotaplus.com.ua',
    urlTitle: 'RabotaPlus',
    description: 'Frontend development for RabotaPlus job board.',
    slug: 'rplus',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/r+/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />
    <p>Category page.</p>
    <img src="/images/works/r+/002.jpg" loading="lazy" alt="Screenshot of category page" data-browser />
    <p>Job page.</p>
    <img src="/images/works/r+/003.jpg" loading="lazy" alt="Screenshot of job page" data-browser />`,
  },
  {
    img: 'images/thumbnails/fft_logo.jpg',
    title: `Fitness and travel agency <span>Food and Fitness travel</span>`,
    urlTitle: 'Food and Fitness travel',
    description:
      'Frontend development for fitnessagency Food and Fitness travel.',
    slug: 'food-and-fitness',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/fft/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />
    <p>News page.</p>
    <img src="/images/works/fft/002.jpg" loading="lazy" alt="Screenshot of news page" data-browser />`,
  },
  {
    img: 'images/thumbnails/demo_logo.jpg',
    title: `Household chemicals e-shop <span>Demo</span>`,
    urlTitle: 'Demo',
    description: 'Frontend development for household chemicals e-shop Demo.',
    slug: 'demo',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/demo/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />
    <p>Product page.</p>
    <img src="/images/works/demo/002.jpg" loading="lazy" alt="Screenshot of product page" data-browser />`,
  },
  {
    img: 'images/thumbnails/teocom_logo.jpg',
    title: `Furniture e-shop <span>Teocom</span>`,
    url: 'http://teocom.com.ua',
    urlTitle: 'TeoCom',
    description: 'Frontend development for furniture e-shop TeoCom.',
    slug: 'teocom',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/teocom/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />
    <p>Catalogue page.</p>
    <img src="/images/works/teocom/002.jpg" loading="lazy" alt="Screenshot of catalogue page" data-browser />
    <p>Product page.</p>
    <img src="/images/works/teocom/003.jpg" loading="lazy" alt="Screenshot of product page" data-browser />`,
  },
  {
    img: 'images/thumbnails/brd_logo.jpg',
    title: `Resorts of <span>Berdyansk</span> city`,
    url: 'https://berdyansk.org.ua',
    urlTitle: 'Berdyansk',
    description:
      'Frontend for website about ukrainian resorts in Berdyansk city',
    slug: 'berdyansk',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <figure><img src="/images/works/brd/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser /></figure>`,
  },
  {
    img: 'images/thumbnails/sektor_logo.jpg',
    title: `Website about ukrainian resorts <span>Sektor24</span>`,
    description:
      'Frontend development for booking housing on Ukrainian resorts.',
    urlTitle: 'Sektor24',
    slug: 'sektor-24',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/sektor24/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />
    <p>Catalogue page.</p>
    <img src="/images/works/sektor24/002.jpg" loading="lazy" alt="Screenshot of catalogue page" data-browser />
    <p>Product page.</p>
    <img src="/images/works/sektor24/003.jpg" loading="lazy" alt="Screenshot of product page" data-browser />`,
  },
  {
    img: 'images/thumbnails/veter_logo.jpg',
    title: `Info page for offline shop <span>Noviy Veter</span>`,
    description: 'Frontend development for offline shop.',
    slug: 'novy-veter',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/veter/001.png" loading="lazy" alt="Screenshot of main page" data-browser />`,
  },
  {
    img: 'images/thumbnails/klass_logo.jpg',
    title: `Coaching center <span>Klass</span>`,
    description: 'Markup for coaching center Klass.',
    urlTitle: 'Klass',
    slug: 'klass',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/klass/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />`,
  },
  {
    img: 'images/thumbnails/dom_logo.jpg',
    title: `Website for ISP <span>Dominion</span>`,
    description: 'Frontend for ISP Dominion based on Drupal CMS.',
    url: 'https://dominion.dn.ua',
    urlTitle: 'Dominion',
    slug: 'dominion',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/dominion/001.jpg" loading="lazy" alt="Screenshot of main page" data-browser />`,
  },
  {
    img: 'images/thumbnails/lazy_logo.jpg',
    title: `Testimonials page markup for <span>LAZYTOUR</span>`,
    description: 'Frontend for ISP Dominion based on Drupal CMS.',
    urlTitle: 'LAZYTOUR',
    slug: 'lazytour',
    id: uuidv4(),
    body: `<p>Main page.</p>
    <img src="/images/works/lazytour/001.png" loading="lazy" alt="Screenshot of main page" data-browser />`,
  },
]

export default works
