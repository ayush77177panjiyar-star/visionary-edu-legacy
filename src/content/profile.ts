export interface Sourced {
  source: string;
  sourceLabel: string;
}

export const biography: { paragraphs: string[]; source: string; sourceLabel: string } = {
  paragraphs: [
    "Ankush Bansal is Co-Founder and Pro Chancellor of Geeta University in Panipat, Haryana, and Vice Chairman of the Geeta Group of Institutions — an education group that has been building institutions in the region since 1985.",
    "His work spans the full arc of an educational ecosystem: schools, professional colleges, and finally a multidisciplinary university. Alongside Geeta University he serves as Pro Vice Chairman of Delhi Public School, Jind, Managing Director of Geeta Sarovar Portico, Panipat, and Co-Founder of Kualakubs.",
    "His public profile describes over 17 years of experience in education — years spent turning a regional group of colleges into a state university offering more than seventy programmes on a forty-acre campus.",
  ],
  source: "https://linkedin.com/in/ankush-bansal-129388145",
  sourceLabel: "LinkedIn profile (self-reported)",
};

export const philosophy = {
  quotes: [
    {
      text: "As Pro Chancellor, I am committed to working closely with the university's leadership, faculty, and staff to create an environment that nurtures academic growth, research excellence, and personal development.",
      source: "https://geetauniversity.edu.in/leadership",
      sourceLabel: "Geeta University — Leadership",
    },
    {
      text: "As Pro Chancellor, I am excited about the journey ahead, and I look forward to witnessing the accomplishments and successes of our students, faculty, and alumni.",
      source: "https://geetauniversity.edu.in/leadership",
      sourceLabel: "Geeta University — Leadership",
    },
  ],
};

export const pillars = [
  {
    icon: "compass",
    title: "Mission",
    body: "To create an environment that nurtures academic growth, research excellence and personal development for every student, faculty member and staff member of the university.",
    source: "https://geetauniversity.edu.in/leadership",
  },
  {
    icon: "eye",
    title: "Vision",
    body: "A multidisciplinary university where more than seventy programmes across engineering, management, pharmacy, law, agriculture, hospitality, sciences and humanities sit on one connected campus.",
    source: "https://geetauniversity.edu.in/faq",
  },
  {
    icon: "gem",
    title: "Core Values",
    body: "Institution building with patience, academic integrity, outcome-based education, and an obligation to the region that the Geeta Group has served since 1985.",
    source: "https://geetauniversity.edu.in/our-offices",
  },
  {
    icon: "graduation-cap",
    title: "Educational Philosophy",
    body: "Education measured by what graduates can do — recognised through a Certificate of Excellence in the Outcome-Based Education Rankings 2022.",
    source: "https://geetauniversity.edu.in/awards-and-rankings",
  },
] as const;

export interface Milestone {
  year: string;
  title: string;
  body: string;
  source: string;
  sourceLabel: string;
}

export const milestones: Milestone[] = [
  {
    year: "1985",
    title: "The Geeta Group of Institutions is founded",
    body: "Run by the K.R. Education Society, the group is established in the historic city of Panipat and begins its work as an education hub for the region.",
    source: "https://geetauniversity.edu.in/our-offices",
    sourceLabel: "Geeta University — Our Offices",
  },
  {
    year: "2007",
    title: "Geeta College of Education",
    body: "A dedicated teacher-education college is founded at Butana Kundu, District Sonepat, Haryana — extending the group into the training of educators themselves.",
    source: "https://gcebutana.in/",
    sourceLabel: "Geeta College of Education",
  },
  {
    year: "2008",
    title: "Geeta Engineering College, Panipat",
    body: "The group's engineering campus is established at Naultha on the Gohana Road, the site that would later become the university campus.",
    source: "https://bharateducation.org/details.php?view_id=5256",
    sourceLabel: "Institutional directory listing",
  },
  {
    year: "2022",
    title: "Geeta University is established",
    body: "The group's institutions converge into a multidisciplinary state private university at Panipat, with Ankush Bansal as Co-Founder and Pro Chancellor.",
    source: "https://getmyuni.com/college/geeta-university-panipat",
    sourceLabel: "Institutional listing",
  },
  {
    year: "2023",
    title: "First Statutes notified",
    body: "The First Statutes of Geeta University, Panipat are notified in the Haryana Government Gazette (Notification No. 24/1-2022 UNP(5), dated 3 July 2023), formalising the university's governance.",
    source:
      "https://geetauniversity.edu.in/uploads/all/2077/Governing-Body-(Reconstitution).pdf",
    sourceLabel: "Governing Body notification",
  },
  {
    year: "2026",
    title: "MoU to accelerate Haryana's one-trillion economy ambition",
    body: "Geeta University signs an MoU with the Swarna Jayanti Haryana Institute for Fiscal Management in the presence of the Haryana Chief Minister, for joint capacity-building, research and policy work aligned with Haryana Vision @2047.",
    source:
      "https://www.tribuneindia.com/news/haryana/geeta-university-signs-mou-to-accelerate-haryanas-one-trillion-economy-ambition/",
    sourceLabel: "The Tribune, 11 January 2026",
  },
  {
    year: "2026",
    title: "Second convocation — 389 graduates",
    body: "Degrees are conferred on 389 graduates and medals on 13 students at the university's second convocation, with international guests present from Gabon, Burkina Faso, Sudan, Fiji, Ethiopia and Mozambique.",
    source:
      "https://www.tribuneindia.com/news/haryana/389-graduates-awarded-degrees-at-geeta-university-convocation/",
    sourceLabel: "The Tribune, 25 January 2026",
  },
  {
    year: "2026",
    title: "Governing Body reconstituted",
    body: "Ankush Bansal is named Pro-Chancellor in the reconstituted Governing Body of Geeta University, notified 15 January 2026.",
    source:
      "https://geetauniversity.edu.in/uploads/all/2077/Governing-Body-(Reconstitution).pdf",
    sourceLabel: "Geeta University notification",
  },
];

export const statistics = [
  {
    value: 17,
    suffix: "+",
    label: "Years in education",
    note: "Self-reported, LinkedIn profile",
    source: "https://linkedin.com/in/ankush-bansal-129388145",
  },
  {
    value: 1985,
    label: "Group founded",
    note: "Geeta Group of Institutions, Panipat",
    source: "https://geetauniversity.edu.in/our-offices",
    raw: true,
  },
  {
    value: 70,
    suffix: "+",
    label: "Programmes offered",
    note: "Across engineering, management, law, pharmacy and more",
    source: "https://geetauniversity.edu.in/faq",
  },
  {
    value: 40,
    label: "Acre campus",
    note: "Geeta University, Naultha, Panipat",
    source: "https://geetauniversity.edu.in/",
  },
  {
    value: 389,
    label: "Graduates, 2nd convocation",
    note: "Degrees conferred January 2026",
    source:
      "https://www.tribuneindia.com/news/haryana/389-graduates-awarded-degrees-at-geeta-university-convocation/",
  },
  {
    value: 4,
    label: "Admission offices",
    note: "Sonipat, Shamli, Karnal and Delhi",
    source: "https://geetauniversity.edu.in/our-offices",
  },
];

export const awards = [
  {
    title: "Top 10 (Must Watch) Pharmacy Colleges in India",
    org: "Higher Education Digest",
    scope: "National ranking",
    body: "Geeta Institute of Pharmacy was ranked among the Top 10 Must Watch Pharmacy Colleges in India.",
    source: "https://geetauniversity.edu.in/awards-and-rankings",
  },
  {
    title: "Certificate of Excellence — OBE Rankings 2022",
    org: "Outcome-Based Education Rankings",
    scope: "Institutional recognition",
    body: "Geeta University received a Certificate of Excellence in the Outcome-Based Education Rankings 2022.",
    source: "https://geetauniversity.edu.in/awards-and-rankings",
  },
  {
    title: "Competition Success Review 2022",
    org: "Competition Success Review",
    scope: "Institutional listing",
    body: "Geeta University features in the Competition Success Review 2022 listings published on the university's awards and rankings page.",
    source: "https://geetauniversity.edu.in/awards-and-rankings",
  },
];

export const newsItems = [
  {
    title: "389 graduates awarded degrees at Geeta University convocation",
    date: "25 January 2026",
    dateISO: "2026-01-25",
    outlet: "The Tribune",
    summary:
      "Anurag Singh Thakur was chief guest at the university's second convocation, conferring degrees on 389 graduates and medals on 13 students. Pro-Chancellors Nishant, Ankush and Manvi Bansal were present alongside international guests from six countries.",
    href: "https://www.tribuneindia.com/news/haryana/389-graduates-awarded-degrees-at-geeta-university-convocation/",
    image: "convocation",
  },
  {
    title: "Geeta University signs MoU to accelerate Haryana's one-trillion economy ambition",
    date: "11 January 2026",
    dateISO: "2026-01-11",
    outlet: "The Tribune",
    summary:
      "An MoU with the Swarna Jayanti Haryana Institute for Fiscal Management was signed in Panchkula in the presence of the Haryana Chief Minister. Pro-Chancellor Ankush Bansal briefed the press on the agreement.",
    href: "https://www.tribuneindia.com/news/haryana/geeta-university-signs-mou-to-accelerate-haryanas-one-trillion-economy-ambition/",
    image: "mou",
  },
  {
    title: "Governing Body of Geeta University reconstituted",
    date: "15 January 2026",
    dateISO: "2026-01-15",
    outlet: "Geeta University",
    summary:
      "The university notified the reconstitution of its Governing Body under the First Statutes of Geeta University, naming Ankush Bansal as Pro-Chancellor.",
    href: "https://geetauniversity.edu.in/uploads/all/2077/Governing-Body-(Reconstitution).pdf",
    image: "governance",
  },
];

export const videos = [
  {
    id: "LQ9sEMKPIlM",
    title: "ICCSM 2025: Innovating Today for a Smarter Tomorrow",
    description:
      "Coverage of Geeta University's 3rd International Conference on Computational Science and Management.",
  },
];

export const universityFacts = [
  {
    title: "History",
    body: "The Geeta Group of Institutions was founded in Panipat in 1985 by the K.R. Education Society and grew into a major education hub before converging into Geeta University in 2022.",
    source: "https://geetauniversity.edu.in/our-offices",
  },
  {
    title: "Campus",
    body: "The university campus at Naultha, on NH-71 in Panipat, covers forty acres.",
    source: "https://geetauniversity.edu.in/",
  },
  {
    title: "Programmes",
    body: "More than seventy courses span computer science and engineering, computer applications, business management, pharmacy, hotel management, law, forensic science, agriculture and the humanities.",
    source: "https://geetauniversity.edu.in/faq",
  },
  {
    title: "Approvals",
    body: "The university's About page lists recognition and approvals associated with the University Grants Commission, the Bar Council of India, the Pharmacy Council of India and the Medical Council of India.",
    source: "https://geetauniversity.edu.in/about-us",
  },
  {
    title: "Governance",
    body: "Geeta University operates under its First Statutes as notified in the Haryana Government Gazette, with a Governing Body most recently reconstituted in January 2026.",
    source:
      "https://geetauniversity.edu.in/uploads/all/2077/Governing-Body-(Reconstitution).pdf",
  },
  {
    title: "Industry & policy collaboration",
    body: "In January 2026 the university signed an MoU with the Swarna Jayanti Haryana Institute for Fiscal Management for capacity-building, research and policy work aligned with Haryana Vision @2047.",
    source:
      "https://www.tribuneindia.com/news/haryana/geeta-university-signs-mou-to-accelerate-haryanas-one-trillion-economy-ambition/",
  },
];

export const internationalPresence = [
  { country: "Gabon", note: "Guest present at the 2026 convocation" },
  { country: "Burkina Faso", note: "Guest present at the 2026 convocation" },
  { country: "Sudan", note: "Guest present at the 2026 convocation" },
  { country: "Fiji", note: "Guest present at the 2026 convocation" },
  { country: "Ethiopia", note: "Guest present at the 2026 convocation" },
  { country: "Mozambique", note: "Guest present at the 2026 convocation" },
];

export const internationalSource =
  "https://www.tribuneindia.com/news/haryana/389-graduates-awarded-degrees-at-geeta-university-convocation/";
