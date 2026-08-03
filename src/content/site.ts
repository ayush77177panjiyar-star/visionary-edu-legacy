import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

/**
 * Every fact in this content layer is attributed to a public source via the
 * `source` field. Items that could not be verified are NOT included — see
 * `src/content/README.md` for the list of open items awaiting official data.
 */

export const person = {
  name: "Ankush Bansal",
  role: "Pro Chancellor",
  organisation: "Geeta University",
  tagline: "Transforming Education. Inspiring Generations.",
  theme: "The Visionary Behind Transforming Education",
  location: "Panipat, Haryana, India",
  roles: [
    "Visionary Leader",
    "Education Reformer",
    "Institution Builder",
    "Innovation Advocate",
    "Nation Builder",
  ],
  linkedin: "https://linkedin.com/in/ankush-bansal-129388145",
  titles: [
    {
      title: "Co-Founder & Pro Chancellor",
      org: "Geeta University, Panipat",
      source: "https://linkedin.com/in/ankush-bansal-129388145",
    },
    {
      title: "Vice Chairman",
      org: "Geeta Group of Institutions, Panipat",
      source: "https://linkedin.com/in/ankush-bansal-129388145",
    },
    {
      title: "Pro Vice Chairman",
      org: "Delhi Public School, Jind",
      source: "https://linkedin.com/in/ankush-bansal-129388145",
    },
    {
      title: "Managing Director",
      org: "Geeta Sarovar Portico, Panipat",
      source: "https://linkedin.com/in/ankush-bansal-129388145",
    },
    {
      title: "Co-Founder",
      org: "Kualakubs",
      source: "https://linkedin.com/in/ankush-bansal-129388145",
    },
  ],
};

export const university = {
  name: "Geeta University",
  website: "https://geetauniversity.edu.in/",
  address: "NH-71, Naultha, Panipat, Haryana 132145, India",
  phone: "+91 92787 68000",
  phoneHref: "tel:+919278768000",
  email: "info@geetauniversity.edu.in",
  mapQuery: "Geeta University, Naultha, Panipat, Haryana 132145",
  established: "2022",
  groupEstablished: "1985",
  campusAcres: 40,
  programmes: 70,
  source: "https://geetauniversity.edu.in/contact-us",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journey", label: "Journey" },
  { to: "/university", label: "University" },
  { to: "/gallery", label: "Gallery" },
  { to: "/media", label: "Media" },
  { to: "/awards", label: "Awards" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: person.linkedin, icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/c/geetauniversity", icon: Youtube },
  {
    label: "Instagram",
    href: "https://www.instagram.com/geetauniversitypanipat/",
    icon: Instagram,
  },
  { label: "Facebook", href: "https://www.facebook.com/geetauniversity", icon: Facebook },
];

export const admissionOffices = [
  { city: "Sonipat", address: "2nd Floor, Gupta Dosa Corner, Subhash Chowk, Sonipat" },
  { city: "Shamli", address: "Above HDFC Bank, Budhana Road, Shamli" },
  { city: "Karnal", address: "79, Mughal Canal Road, Karnal" },
  { city: "Delhi", address: "C-8/28, 2nd Floor, Sector 7 Rohini, opp. Metro Pillar 395" },
];
