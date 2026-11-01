import Image, { type StaticImageData } from "next/image";
import {
  siAlpinedotjs,
  siAndroid,
  siBootstrap,
  siCss,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGoogleappsscript,
  siHtml5,
  siJavascript,
  siJetpackcompose,
  siJsonwebtokens,
  siKotlin,
  siLaravel,
  siMaterialdesign,
  siMysql,
  siNextdotjs,
  siOpenapiinitiative,
  siPhp,
  siPostman,
  siReact,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siVite,
  siWebpack,
  siWebcomponentsdotorg,
  type SimpleIcon,
} from "simple-icons";
import Icon from "./ui-icon";
import SiteNav from "./site-nav";
import CertificateGallery, { type Certificate } from "./certificate-gallery";
import heroPortrait from "../img/hero_1.png";
import educationPortrait from "../img/hero_2.png";
import mssqlLogo from "../img/logo/mssql.webp";
import pestLogo from "../img/logo/pest.png";
import vscLogo from "../img/logo/vsc.webp";

const links = {
  github: "https://github.com/rizkimgite",
  notes: "https://github.com/rizkimgite/WebApp-Notes",
  bacoffee: "https://github.com/rizkimgite/BaCoffee-Full",
  bacoffeeDocs: "https://drive.google.com/drive/folders/1AhqGXtGsDJ3QTMNKgnYA2A3Mo8QkR8u9",
  yappendis: "https://github.com/rizkimgite/YAPPI",
  yappendisDocs: "https://drive.google.com/drive/folders/140VNST1231Y1rhDYlPDL_w_jFq3rJdSh?usp=sharing",
  whatsapp: "https://wasap.at/TjUX1h",
  dicoding1: "https://www.dicoding.com/certificates/RVZKML9MNXD5",
  dicoding2: "https://www.dicoding.com/certificates/0LZ0J9E70X65",
  dicoding3: "https://www.dicoding.com/certificates/QLZ9NVEGDZ5D",
  dicoding4: "https://www.dicoding.com/certificates/ERZR7K5VNZYV",
  award: "https://drive.google.com/file/d/17rz7Yqewomy5xs9ez0c8XXUDRGt10eQG/view?usp=sharing",
  notesDocs: "https://drive.google.com/drive/folders/1_H48K2cqnXgO6gBlMf5VT6jDPbS_6Vs7?usp=sharing",
};

const skills = [
  ["Programming Languages", "HTML", "CSS", "JavaScript", "PHP", "SQL", "Kotlin", "TypeScript"],
  ["Frontend Development", "Responsive Design", "Bootstrap", "Tailwind CSS", "Blade", "React", "Next.js", "Jetpack Compose"],
  ["Backend Development", "Laravel", "REST API", "Authentication", "Role based authorization", "Google Apps Script"],
  ["Database", "MySQL", "Microsoft SQL Server", "Firebase Cloud Firestore", "SQLite"],
  ["Tools and Technologies", "Git and GitHub", "Figma", "Vite", "Webpack 5", "Pest", "VS Code", "Postman"],
  ["Business and Professional Skills", "PRD", "User needs research", "Wireframe and prototype", "Database design", "Documentation", "Microsoft Excel"],
];

const experiences = [
  { period: "2024 - 2026", title: "Telemarketing", place: "Berijalan Office Member Of Astra, Sleman, DI Yogyakarta", body: "Mencapai peringkat Top 1, Top 3, dan Top 5 Mitra divisi Tema C2 dengan target 120 kontrak per hari. Menggali kebutuhan, menangani keberatan melalui negosiasi, serta mendokumentasikan kontrak dan kebutuhan per wilayah." },
  { period: "2023 - 2024", title: "Manager Restoran Franchise", place: "Oseng Oseng Mercon Bu Narti Palagan, Sleman", body: "Memantau empat karyawan dan operasional harian, termasuk stok dapur, kas, kasir, produksi, serta pesanan offline dan online. Menyusun laporan stok, pendapatan, dan pengeluaran harian di Microsoft Excel." },
  { period: "2022 - 2023", title: "Kasir", place: "Toko Anugrah Sapen, Yogyakarta", body: "Menangani transaksi shift malam pukul 22.00-05.00 dengan rata-rata penjualan Rp700.000 per jam dan mencocokkan saldo akhir dengan catatan sistem." },
  { period: "2019 - 2021", title: "Operator Komputer", place: "Flaquina Studio, Bunobogu, Sulawesi Tengah", body: "Menjalankan layanan cetak dan dokumen, menyusun administrasi Word dan Excel, menjaga kas harian, serta menangani kendala teknis dasar pada printer, mesin fotokopi, dan komputer." },
  { period: "2015 - 2019", title: "Asisten Bendahara dan Operator Desa", place: "Botugolu, Bunobogu", body: "Membantu tugas bendahara dan administrasi desa menggunakan Word dan Excel secara non-formal." },
];

const projects = [
  {
    index: "01",
    name: "Notes Web App",
    label: "Personal Project Dicoding · 2026",
    summary: "Aplikasi pencatatan web dengan daftar catatan dinamis yang terhubung ke REST API.",
    contribution: "Mengembangkan antarmuka dengan Web Components dan Fetch API untuk mengambil, menambah, serta menghapus catatan. Menambahkan loading state, penanganan kesalahan, pengurutan berdasarkan waktu, dan build Webpack untuk produksi.",
    stack: ["HTML", "CSS", "JavaScript ES6+", "Web Components", "Fetch API", "REST API", "Webpack 5"],
    href: links.notes,
    docs: links.notesDocs,
    docsLabel: "Link dokumentasi",
    docsRel: "noopener noreferrer",
  },
  {
    index: "02",
    name: "Website YAPPENDIS",
    label: "Proyek Akademik untuk Organisasi · 2026",
    summary: "Portal informasi dan CMS untuk Yayasan Pengkajian dan Pengembangan Ilmu Ilmu Pendidikan Islam.",
    contribution: "Menyusun PRD, struktur menu, dan wireframe; mengembangkan website dan CMS dengan autentikasi, role-based authorization, rate limiting login, validasi unggahan, serta pemisahan storage publik dan privat.",
    stack: ["PHP", "Laravel", "Blade", "Tailwind CSS", "Alpine.js", "Vite", "SQLite", "MySQL", "Pest"],
    href: links.yappendis,
    docs: links.yappendisDocs,
    docsLabel: "Link dokumentasi",
  },
  {
    index: "03",
    name: "BaCoffee",
    label: "Proyek Akademik Tugas Akhir · 2026",
    summary: "Ekosistem reservasi coffee shop dengan aplikasi konsumen, aplikasi mitra, dan dashboard admin.",
    contribution: "Menerapkan alur pemesanan sampai check-in, pengelolaan keterlambatan, denda, poin, voucher, verifikasi usaha, broadcast, metrik realtime, dan laporan konsumen melalui Firestore.",
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: links.bacoffee,
    docs: links.bacoffeeDocs,
    docsLabel: "Link dokumentasi",
  },
];

const certificates: Certificate[] = [
  { name: "Fundamental Front End Web Development", issuer: "Dicoding", year: "Oktober 2026", href: links.dicoding3, file: "/images/certificates/Fundamental Front-End Web Development.pdf", type: "pdf", pages: ["/images/certificates/fundamental-front-end.png", "/images/certificates/fundamental-front-end-page-2.png", "/images/certificates/fundamental-front-end-page-3.png"] },
  { name: "Dasar Pemrograman Web", issuer: "Dicoding", year: "September 2026", href: links.dicoding2, file: "/images/certificates/Dasar Pemrograman Web.pdf", type: "pdf", pages: ["/images/certificates/dasar-pemrograman-web.png", "/images/certificates/dasar-pemrograman-web-page-2.png", "/images/certificates/dasar-pemrograman-web-page-3.png"] },
  { name: "Dasar Pemrograman JavaScript", issuer: "Dicoding", year: "September 2026", href: links.dicoding1, file: "/images/certificates/Dasar Pemrograman JavaScript.pdf", type: "pdf", pages: ["/images/certificates/dasar-pemrograman-javascript.png", "/images/certificates/dasar-pemrograman-javascript-page-2.png", "/images/certificates/dasar-pemrograman-javascript-page-3.png"] },
  { name: "Membuat Front End Web untuk Pemula", issuer: "Dicoding", year: "September 2026", href: links.dicoding4, file: "/images/certificates/Membuat Front-End Web untuk Pemula.pdf", type: "pdf", pages: ["/images/certificates/membuat-front-end-web-untuk-pemula.png", "/images/certificates/membuat-front-end-web-untuk-pemula-page-2.png"] },
  { name: "Introduction to Large Language Models", issuer: "IBM Skill", year: "September 2026", file: "/images/certificates/Introduction to Large Language Models.pdf", type: "pdf", pages: ["/images/certificates/introduction-to-large-language-models.png"] },
  { name: "Awardee Best Mitra Berijalan Official Workshop Kreatifitas Berbasis Seni", issuer: "Berijalan and PSBK", year: "September 2025", file: "/images/certificates/Awardee-BestMitra.jpg", type: "image", pages: [] },
];

const technologyLogos: Record<string, SimpleIcon> = {
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  "JavaScript ES6+": siJavascript,
  PHP: siPhp,
  SQL: siMysql,
  Kotlin: siKotlin,
  TypeScript: siTypescript,
  "Responsive Design": siCss,
  Bootstrap: siBootstrap,
  "Tailwind CSS": siTailwindcss,
  Blade: siLaravel,
  React: siReact,
  "Next.js": siNextdotjs,
  "Jetpack Compose": siJetpackcompose,
  Laravel: siLaravel,
  "REST API": siOpenapiinitiative,
  Authentication: siJsonwebtokens,
  "Role based authorization": siJsonwebtokens,
  "Google Apps Script": siGoogleappsscript,
  MySQL: siMysql,
  "Firebase Cloud Firestore": siFirebase,
  SQLite: siSqlite,
  "Git and GitHub": siGithub,
  Figma: siFigma,
  Vite: siVite,
  "Webpack 5": siWebpack,
  Postman: siPostman,
  "Alpine.js": siAlpinedotjs,
  "Web Components": siWebcomponentsdotorg,
  "Fetch API": siJavascript,
  "Material 3": siMaterialdesign,
  Firebase: siFirebase,
  Android: siAndroid,
};

const localTechnologyLogos: Record<string, StaticImageData> = {
  "Microsoft SQL Server": mssqlLogo,
  Pest: pestLogo,
  "VS Code": vscLogo,
};

function External({ href, children, className = "text-link", rel = "noreferrer" }: { href: string; children: React.ReactNode; className?: string; rel?: string }) {
  return <a className={className} href={href} target="_blank" rel={rel}>{children}<Icon name="external" size={15} /></a>;
}

function TechnologyLogo({ name }: { name: string }) {
  const localLogo = localTechnologyLogos[name];
  const logo = technologyLogos[name];

  if (localLogo) {
    return (
      <span className="technology-logo technology-logo-local">
        <Image src={localLogo} alt={`${name} logo`} sizes="24px" />
      </span>
    );
  }

  if (!logo) {
    return <span className="technology-logo technology-logo-fallback" aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
  }

  return (
    <span className="technology-logo" aria-hidden="true" style={{ color: `#${logo.hex}` }}>
      <svg viewBox="0 0 24 24" focusable="false"><path d={logo.path} /></svg>
    </span>
  );
}

export default function Home() {
  return <>
    <SiteNav />
    <main>
      <section id="profil" className="hero anchor">
        <div className="hero-inner">
          <div className="hero-copy">
          <span className="eyebrow">Portfolio Rizki · 2026</span>
          <p className="hello">Halo, saya</p>
          <h1>Rizki <em>Mulyawan</em></h1>
          <p className="hero-role">Junior Front End Specialist <span>/</span> Web Developer</p>
          <p className="hero-description">Lulusan Informatika yang membangun aplikasi web, merancang kebutuhan produk, dan mendukung operasional digital dengan pendekatan yang rapi serta terukur.</p>
          <div className="actions">
            <a className="button primary" href="#proyek">Jelajahi proyek <Icon name="arrow" /></a>
            <a className="button quiet" href="https://drive.google.com/file/d/1jIJiz5rH65NYHfFv1irge55N4Q8njrSb/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><Icon name="download" /> Unduh CV</a>
          </div>
          <div className="hero-tech" aria-label="Teknologi utama">
            {["HTML", "CSS", "JavaScript"].map((technology) => <div className="hero-tech-item" key={technology}><TechnologyLogo name={technology} /><span>{technology}</span></div>)}
          </div>
          </div>
          <div className="hero-visual">
          <div className="hero-glow" />
          <div className="portrait-frame" data-image-reveal>
            <Image className="portrait" src={heroPortrait} alt="Rizki Mulyawan" priority sizes="(max-width: 413px) 75vw, (max-width: 760px) 310px, (max-width: 923px) 39vw, (max-width: 1050px) 360px, 390px" />
          </div>
          <div className="portrait-stamp"><span className="stamp-dot" /> Terbuka untuk peluang baru</div>
          <div className="hero-caption"><span>01 / 04</span><span>Build with purpose</span></div>
          </div>
        </div>
      </section>

      <section id="tentang" className="about anchor">
        <div className="section-inner">
          <div className="section-number">01</div>
          <div>
          <span className="eyebrow">Tentang saya</span>
          <h2>Menyelesaikan masalah dengan <em>digitalisasi.</em></h2>
          <p>Lulusan S1 Informatika UIN Sunan Kalijaga Yogyakarta dengan pengalaman membangun proyek web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL. Pengalaman menyusun PRD, wireframe, desain database, dan integrasi REST API dipadukan dengan latar operasional bisnis yang membentuk ketelitian, komunikasi, dan orientasi target.</p>
          <External href={links.github}>Kunjungi GitHub</External>
          </div>
          <aside><strong>3</strong><span>proyek perangkat lunak<br />dalam portofolio ini</span></aside>
        </div>
      </section>

      <section id="keahlian" className="skills anchor">
        <div className="section-inner">
          <div className="heading">
          <span className="eyebrow">Keahlian</span>
          <h2>Teknologi yang digunakan untuk <em>pengembangan website.</em></h2>
          <p>Berdasarkan pengalaman dan proyek yang telah dikerjakan.</p>
          </div>
          <div className="skills-grid">
          {skills.map(([group, ...items]) => <article className="skill-card" key={group}>
            <h3>{group}</h3>
            <ul>{items.map((skill) => <li key={skill}>
              <TechnologyLogo name={skill} />
              {skill}
            </li>)}</ul>
          </article>)}
          </div>
        </div>
      </section>

      <section id="pendidikan" className="education anchor">
        <div className="section-inner">
          <div className="heading"><span className="eyebrow">Pendidikan</span><h2>Landasan akademik untuk terus <em>belajar dan membangun.</em></h2></div>
          <article className="education-card">
          <p className="years">2020 - 2026</p>
          <div><h3>S1 Informatika</h3><p>UIN Sunan Kalijaga Yogyakarta · IPK 3,26/4,00 · Yudisium 19 Agustus 2026 · Wisuda 11 November 2026</p><p className="coursework">Mata kuliah relevan: Pemrograman Platform Web, Keamanan Aplikasi, Interaksi Manusia dan Komputer, dan Rekayasa Kebutuhan Perangkat Lunak.</p></div>
          <div className="education-photo" data-image-reveal><Image src={educationPortrait} alt="Rizki Mulyawan saat menempuh pendidikan" sizes="(max-width: 760px) 60vw, 220px" /></div>
          </article>
        </div>
      </section>

      <section id="proyek" className="projects anchor">
        <div className="section-inner">
          <div className="heading">
          <span className="eyebrow">Proyek Terbaru</span>
          <h2>Kontribusi nyata, dari ide sampai <em>implementasi.</em></h2>
          </div>
          <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.name}>
            <div className="project-top"><span>{project.index}</span><Icon name="code" size={20} /></div>
            <p className="project-label">{project.label}</p>
            <h3>{project.name}</h3>
            <p className="summary">{project.summary}</p>
            <div className="project-contribution"><b>Kontribusi</b><p>{project.contribution}</p></div>
            <div className="tags">{project.stack.map((item) => <span className="technology-tag" key={item}><TechnologyLogo name={item} />{item}</span>)}</div>
            <External href={project.href} className="project-link">Buka repository</External>
            {project.docs && <External href={project.docs} className="project-link" rel={project.docsRel ?? "noreferrer"}>{project.docsLabel ?? "Lihat folder proyek"}</External>}
          </article>)}
          </div>
        </div>
      </section>

      <section id="sertifikat" className="certificates anchor">
        <div className="section-inner">
          <div className="heading">
          <span className="eyebrow">Sertifikat dan penghargaan</span>
          <h2>Jejak belajar yang <em>terus bertumbuh.</em></h2>
          </div>
          <CertificateGallery certificates={certificates} />
        </div>
      </section>

      <section id="pengalaman" className="experience anchor">
        <div className="section-inner">
          <div className="heading"><span className="eyebrow">Pengalaman Kerja</span><h2>Pengalaman kerja segala bidang yang melatih<em> pemecahan masalah dan ketelitian.</em></h2></div>
          <div className="timeline">
            {experiences.map((item) => <article className="timeline-item" key={item.title}>
              <p className="period">{item.period}</p>
              <div><h3>{item.title}</h3><p className="place">{item.place}</p><p>{item.body}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="kontak" className="contact anchor">
        <div className="section-inner contact-inner">
          <span className="eyebrow">Mari terhubung</span>
          <h2>Semangat belajar membuatku <em>siap untuk berkontribusi positif.</em></h2>
          <p>Terbuka untuk setiap kesempatan.</p>
          <a className="email" href="mailto:rizkymgite@gmail.com">rizkymgite@gmail.com <Icon name="arrow" /></a>
          <div className="contact-links"><External href={links.github}>GitHub</External><External href={links.whatsapp}>WhatsApp</External></div>
          <footer>&copy; 2026 Portofolio Rizki</footer>
        </div>
      </section>
    </main>
  </>;
}
