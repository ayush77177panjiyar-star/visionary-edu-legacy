import auditorium from "@/assets/auditorium-address.png.asset.json";
import athlete from "@/assets/athlete-felicitation.png.asset.json";
import bhoomiPujan from "@/assets/bhoomi-pujan.png.asset.json";
import portrait from "@/assets/portrait.png.asset.json";
import asiaAward from "@/assets/asia-excellence-award.png.asset.json";
import memento from "@/assets/memento-of-honour.png.asset.json";
import dignitary from "@/assets/dignitary-welcome.png.asset.json";
import governor from "@/assets/governor-visit.png.asset.json";
import expertSession from "@/assets/expert-session.png.asset.json";
import keynote from "@/assets/keynote-felicitation.png.asset.json";

export const portraitImage = portrait.url;

export type GalleryCategory =
  | "Leadership"
  | "Events"
  | "Awards"
  | "Campus"
  | "Convocation"
  | "Students";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  span?: "tall" | "wide";
}

export const galleryItems: GalleryItem[] = [
  {
    src: portrait.url,
    alt: "Portrait of Ankush Bansal, Pro Chancellor of Geeta University, in his office",
    caption: "Ankush Bansal, Pro Chancellor, Geeta University",
    category: "Leadership",
  },
  {
    src: auditorium.url,
    alt: "A leader addressing a packed university auditorium of students and faculty",
    caption: "Addressing a full auditorium of students and faculty",
    category: "Events",
    span: "wide",
  },
  {
    src: governor.url,
    alt: "Geeta University leadership team on stage welcoming a visiting dignitary",
    caption: "Welcoming a distinguished guest on the Geeta University stage",
    category: "Events",
    span: "wide",
  },
  {
    src: asiaAward.url,
    alt: "Award being presented on stage at an Asia excellence ceremony",
    caption: "Recognition received at an Asia excellence ceremony",
    category: "Awards",
    span: "tall",
  },
  {
    src: memento.url,
    alt: "Memento of honour being presented to a visiting guest at the university",
    caption: "Memento of honour presented to a visiting guest",
    category: "Leadership",
  },
  {
    src: keynote.url,
    alt: "Keynote speaker being felicitated at a Geeta University expert session",
    caption: "Felicitating a keynote speaker at an expert session",
    category: "Events",
  },
  {
    src: expertSession.url,
    alt: "Resource person felicitated with a sapling at an expert session",
    caption: "A sapling for a resource person — a campus tradition",
    category: "Events",
  },
  {
    src: athlete.url,
    alt: "A national athlete in India team kit greeted by university leadership",
    caption: "With a national athlete representing India",
    category: "Students",
    span: "tall",
  },
  {
    src: bhoomiPujan.url,
    alt: "Bhoomi Pujan ceremony marking the foundation of a new hostel",
    caption: "Bhoomi Pujan — foundation laid for a new hostel",
    category: "Campus",
  },
  {
    src: dignitary.url,
    alt: "University leadership welcoming public representatives with flowers at an event",
    caption: "Welcoming public representatives at an institutional event",
    category: "Leadership",
    span: "wide",
  },
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Leadership",
  "Events",
  "Awards",
  "Campus",
  "Students",
];
