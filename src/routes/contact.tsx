import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SourceLink } from "@/components/source-link";
import { admissionOffices, socialLinks, university } from "@/content/site";

const TITLE = "Contact — Office of the Pro Chancellor, Geeta University";
const DESCRIPTION =
  "Reach the office of the Pro Chancellor at Geeta University, NH-71, Naultha, Panipat, Haryana 132145, or through the university's admission offices.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const details = [
    { icon: MapPin, label: "Campus", value: university.address, href: undefined },
    { icon: Phone, label: "Phone", value: university.phone, href: university.phoneHref },
    { icon: Mail, label: "Email", value: university.email, href: `mailto:${university.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Office of the Pro Chancellor"
        lede="Enquiries reach the university's official channels at the Panipat campus."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Reach us" title="Geeta University, Panipat" />
            <ul className="mt-10 space-y-7">
              {details.map((d) => (
                <Reveal as="li" key={d.label}>
                  <div className="flex items-start gap-4">
                    <d.icon className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <p className="eyebrow text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-1 block text-base text-foreground underline-offset-4 hover:underline"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base text-foreground">{d.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <SourceLink href={university.source} className="mt-8" />

            <div className="mt-12">
              <p className="eyebrow text-muted-foreground">Follow</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-gold hover:text-foreground"
                  >
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border/70">
              <iframe
                title="Map showing Geeta University, Naultha, Panipat"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(university.mapQuery)}&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Admission offices" title="Also present in" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {admissionOffices.map((o) => (
              <Reveal as="li" key={o.city} className="bg-background p-7">
                <p className="font-display text-xl text-foreground">{o.city}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.address}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
