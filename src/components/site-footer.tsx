import { Link } from "@tanstack/react-router";
import { Monogram } from "@/components/monogram";
import { navLinks, socialLinks, university } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/70">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--gold) 25%, var(--gold) 75%, transparent)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Monogram className="h-10 w-10" />
            <span className="font-display text-lg text-white">Ankush Bansal</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Pro Chancellor, Geeta University — Panipat, Haryana. Transforming education,
            inspiring generations.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="eyebrow text-gold-soft">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-gold-soft">Legal</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-gold-soft">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-gold-soft">
                Terms of Use
              </Link>
            </li>
            <li>
              <a
                href={university.website}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-gold-soft"
              >
                Geeta University
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-soft">Connect</h3>
          <ul className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <address className="mt-6 text-sm not-italic leading-relaxed">
            {university.address}
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ankush Bansal. All rights reserved.</p>
          <p>Content sourced from official Geeta University publications and public records.</p>
        </div>
      </div>
    </footer>
  );
}
