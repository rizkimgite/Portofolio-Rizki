"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "./ui-icon";

export type Certificate = {
  name: string;
  issuer: string;
  year: string;
  href?: string;
  file: string;
  type: "pdf" | "image";
  pages: string[];
}

function CertificateCard({ certificate, onOpen }: { certificate: Certificate; onOpen: () => void }) {
  const [previewFailed, setPreviewFailed] = useState(false);
  const preview = certificate.type === "pdf" ? certificate.pages[0] : certificate.file;

  return (
    <article className="certificate-card">
      <button className="certificate-preview" type="button" onClick={onOpen} aria-label={`Lihat sertifikat ${certificate.name}`}>
        {!previewFailed ? (
          <Image
            src={preview}
            alt={`Preview sertifikat ${certificate.name}`}
            fill
            sizes="(max-width: 760px) 90vw, (max-width: 1050px) 44vw, 350px"
            onError={() => setPreviewFailed(true)}
          />
        ) : (
          <span className="certificate-preview-fallback">Preview dokumen tidak tersedia. Buka untuk melihat file asli.</span>
        )}
        <span className="certificate-preview-label">Klik untuk melihat</span>
      </button>
      <div className="certificate-info">
        <p>{certificate.issuer} <span>·</span> {certificate.year}</p>
        <h3>{certificate.name}</h3>
        <div className="certificate-actions">
          <button className="credential" type="button" onClick={onOpen}>Lihat sertifikat <Icon name="external" size={14} /></button>
          {certificate.href && <a className="credential" href={certificate.href} target="_blank" rel="noreferrer">Credential <Icon name="external" size={14} /></a>}
        </div>
      </div>
    </article>
  );
}

export default function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    else if (!selected && dialog.open) dialog.close();
  }, [selected]);

  const openCertificate = (certificate: Certificate) => {
    setPage(1);
    setZoom(100);
    setSelected(certificate);
  };

  const currentPage = selected?.type === "pdf" ? selected.pages[page - 1] : selected?.file;

  return (
    <>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.name} certificate={certificate} onOpen={() => openCertificate(certificate)} />
        ))}
      </div>
      <dialog
        className="certificate-dialog"
        ref={dialogRef}
        aria-label={selected ? `Sertifikat ${selected.name}` : "Pratinjau sertifikat"}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        {selected && (
          <div className="certificate-dialog-content">
            <header className="certificate-dialog-header">
              <div><p>{selected.issuer} · {selected.year}</p><h2>{selected.name}</h2></div>
              <button className="certificate-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Tutup pratinjau">
                <Icon name="close" />
              </button>
            </header>
            <div className="certificate-viewer">
              {currentPage && (
                <div className="certificate-page" style={{ width: `${zoom}%` }}>
                  <Image src={currentPage} alt={selected.type === "pdf" ? `${selected.name}, halaman ${page}` : selected.name} fill sizes="(max-width: 760px) 95vw, 1000px" />
                </div>
              )}
            </div>
            <footer className="certificate-dialog-footer">
              {selected.type === "pdf" ? (
                <div className="certificate-viewer-controls" aria-label="Kontrol PDF">
                  <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page <= 1} aria-label="Halaman sebelumnya">‹</button>
                  <span>Halaman {page} / {selected.pages.length}</span>
                  <button type="button" onClick={() => setPage((current) => Math.min(selected.pages.length, current + 1))} disabled={page >= selected.pages.length} aria-label="Halaman berikutnya">›</button>
                  <span className="viewer-control-divider" />
                  <button type="button" onClick={() => setZoom((current) => Math.max(75, current - 25))} disabled={zoom <= 75} aria-label="Perkecil dokumen">−</button>
                  <span>{zoom}%</span>
                  <button type="button" onClick={() => setZoom((current) => Math.min(150, current + 25))} disabled={zoom >= 150} aria-label="Perbesar dokumen">+</button>
                </div>
              ) : <span className="certificate-viewer-controls">Gambar asli · proporsi dipertahankan</span>}
              <div className="certificate-file-actions">
                <a href={selected.file} target="_blank" rel="noreferrer">Buka di tab baru <Icon name="external" size={14} /></a>
                <a href={selected.file} download>Unduh file <Icon name="download" size={14} /></a>
              </div>
            </footer>
          </div>
        )}
      </dialog>
    </>
  );
}
