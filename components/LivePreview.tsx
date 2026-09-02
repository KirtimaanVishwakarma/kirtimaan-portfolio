"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, Project } from "@/lib/data";
import { getBrandIcon } from "@/lib/icons";

const urlFor = (name: string) => {
  if (name.includes("E360+")) return "e360-portal.health.app";
  if (name.includes("Order")) return "orders.kredmint.com";
  return name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".app";
};

function MockBrowserContent({ project }: { project: Project }) {
  const isHealthcare = project.name.includes("E360+");
  return (
    <div className="mock-preview-container">
      <div className="mock-preview-header">
        <div className="mock-preview-header-title">
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
          <span>
            {isHealthcare ? "E360+ Patient & Provider Portal" : "Order Lifecycle Command Center"}
          </span>
        </div>
        <span className="mock-status-pill">
          ● PRODUCTION SYSTEM
        </span>
      </div>

      <div className="mock-grid">
        {isHealthcare ? (
          <>
            <div className="mock-card">
              <div className="mock-card-lbl">PROVIDERS</div>
              <div className="mock-card-val">1,000+</div>
            </div>
            <div className="mock-card">
              <div className="mock-card-lbl">PATIENTS</div>
              <div className="mock-card-val" style={{ color: "var(--text)" }}>Millions</div>
            </div>
            <div className="mock-card">
              <div className="mock-card-lbl">ARCHITECTURE</div>
              <div className="mock-card-val" style={{ color: "var(--accent-2)", fontSize: "14px" }}>App Router</div>
            </div>
          </>
        ) : (
          <>
            <div className="mock-card">
              <div className="mock-card-lbl">MONTHLY ORDERS</div>
              <div className="mock-card-val">1,000,000+</div>
            </div>
            <div className="mock-card">
              <div className="mock-card-lbl">RETAILERS</div>
              <div className="mock-card-val" style={{ color: "var(--text)" }}>20,000+</div>
            </div>
            <div className="mock-card">
              <div className="mock-card-lbl">WAREHOUSES</div>
              <div className="mock-card-val" style={{ color: "var(--accent-2)" }}>100+ Nodes</div>
            </div>
          </>
        )}
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
        {project.stack.slice(0, 5).map((s) => (
          <span
            key={s}
            style={{
              fontSize: "10.5px",
              fontFamily: "var(--font-mono)",
              padding: "3px 8px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px",
              color: "var(--muted)",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function PreviewCard({ p, flip }: { p: Project; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className={`preview-row ${flip ? "flip" : ""}`}>
      <div className="preview-stage" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
        <motion.div
          className="browser"
          style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.21, 0.5, 0.25, 1] }}
        >
          <div className="browser-bar">
            <span className="bdot r" />
            <span className="bdot y" />
            <span className="bdot g" />
            <span className="browser-url">{urlFor(p.name)}</span>
          </div>
          <div className="browser-shot">
            {p.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                ref={imgRef}
                className={loaded ? "loaded" : ""}
                src={p.image}
                alt={`${p.name} preview`}
                onLoad={() => setLoaded(true)}
              />
            ) : (
              <MockBrowserContent project={p} />
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="preview-info"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.5, 0.25, 1] }}
      >
        <div className="preview-flag">{p.flag}</div>
        <h3 className="preview-title">{p.name}</h3>
        <p className="preview-blurb">{p.blurb}</p>
        <div className="stack">
          {p.stack.map((s) => {
            const def = getBrandIcon(s);
            const BrandIcon = def?.Icon;
            return (
              <span key={s}>
                {BrandIcon && <BrandIcon style={{ color: def!.color }} />}
                {s}
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default function LivePreview() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="preview" id="preview" aria-label="Live previews">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">// live preview</span>
          <h2 className="section-title">Featured work</h2>
        </div>
        {featured.map((p, i) => (
          <PreviewCard key={p.name} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
