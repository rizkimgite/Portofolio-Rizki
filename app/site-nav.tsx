"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "./ui-icon";
import siteIcon from "../img/icon.png";

const nav = [
  ["Tentang Saya", "tentang"],
  ["Keahlian", "keahlian"],
  ["Pendidikan", "pendidikan"],
  ["Proyek", "proyek"],
  ["Sertifikat Pencapaian", "sertifikat"],
  ["Pengalaman Kerja", "pengalaman"],
  ["Kontak", "kontak"],
] as const;

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [overContact, setOverContact] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [indicatorStretching, setIndicatorStretching] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const indicatorTimeout = useRef<number | null>(null);

  useLayoutEffect(() => {
    const container = navLinksRef.current;
    if (!container || !activeSection) return;
    const activeLink = container.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
    if (!activeLink) return;

    container.style.setProperty("--indicator-x", `${activeLink.offsetLeft}px`);
    container.style.setProperty("--indicator-y", `${activeLink.offsetTop}px`);
    container.style.setProperty("--indicator-width", `${activeLink.offsetWidth}px`);
    container.style.setProperty("--indicator-height", `${activeLink.offsetHeight}px`);
    setIndicatorStretching(true);
    if (indicatorTimeout.current !== null) window.clearTimeout(indicatorTimeout.current);
    indicatorTimeout.current = window.setTimeout(() => setIndicatorStretching(false), 150);
  }, [activeSection, menuOpen]);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const contact = document.querySelector("#kontak");
    const observer = contact ? new IntersectionObserver(
      ([entry]) => setOverContact(entry.isIntersecting),
      { threshold: 0.08 },
    ) : null;
    if (contact && observer) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    const sections = nav.map(([, id]) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const visibleSections = new Set<HTMLElement>();
    if (!("IntersectionObserver" in window)) return;
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleSections.add(section);
        else visibleSections.delete(section);
      });

      const active = [...visibleSections].sort((a, b) => {
        const target = window.innerHeight * 0.3;
        return Math.abs(a.getBoundingClientRect().top - target) - Math.abs(b.getBoundingClientRect().top - target);
      })[0];
      if (active) setActiveSection(active.id);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = navLinksRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
      const container = navLinksRef.current;
      if (!activeLink || !container) return;
      container.style.setProperty("--indicator-x", `${activeLink.offsetLeft}px`);
      container.style.setProperty("--indicator-y", `${activeLink.offsetTop}px`);
      container.style.setProperty("--indicator-width", `${activeLink.offsetWidth}px`);
      container.style.setProperty("--indicator-height", `${activeLink.offsetHeight}px`);
    };
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  return (
    <header className={`nav-wrap${isScrolled ? " nav-wrap-scrolled" : ""}${overContact ? " nav-wrap-dark" : ""}`}>
      <nav className="nav" aria-label="Navigasi utama">
        <a className="brand" href="#profil"><Image src={siteIcon} alt="Logo Rizki Mulyawan" /><span>Rizki Mulyawan</span></a>
        <div
          ref={navLinksRef}
          id="primary-navigation"
          className={`nav-links${menuOpen ? " nav-links-open" : ""}${activeSection ? " nav-links-has-active" : ""}${indicatorStretching ? " nav-links-stretching" : ""}`}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          <span className="nav-indicator" aria-hidden="true" />
          {nav.map(([label, id]) => (
            <a href={`#${id}`} key={id} aria-current={activeSection === id ? "location" : undefined} onClick={() => { setActiveSection(id); setMenuOpen(false); }}>{label}</a>
          ))}
        </div>
        <a className="nav-cta" href="#kontak">Mari bicara <Icon name="arrow" size={15} /></a>
        <button
          className="menu"
          type="button"
          aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </nav>
    </header>
  );
}
