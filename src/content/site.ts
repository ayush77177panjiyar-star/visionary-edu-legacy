import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const person = {
  name: "Ankush Bansal",
  role: "Pro Chancellor",
  organisation: "Geeta University",
  tagline: "Transforming Education. Inspiring Generations.",
  theme: "The Visionary Behind Transforming Education",
  roles: [
    "Visionary Leader",
    "Education Reformer",
    "Institution Builder",
    "Innovation Advocate",
    "Nation Builder",
  ],
  linkedin: "https://www.linkedin.com/company/geeta-university/",
};

export const university = {
  name: "Geeta University",
  website: "https://geetauniversity.edu.in/",
  address: "Naultha, Panipat, Haryana 132145, India",
  mapQuery: "Geeta University, Naultha, Panipat, Haryana 132145",
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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/geeta-university/",
    icon: Linkedin,
  },
  { label: "YouTube", href: "https://www.youtube.com/@GeetaUniversity", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/geetauniversity/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/GeetaUniversity/", icon: Facebook },
];
