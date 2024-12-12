import Image01 from "../images/services1.jpg";
import Image02 from "../images/services2.jpg";
import Image03 from "../images/services3.jpg";
import Image04 from "../images/services4.jpg";
import Image05 from "../images/services5.jpg";

import webdev from "../images/webdev.png";
import cloud from "../images/cloud.svg";
import ml from "../images/ml.png";
import Ai from "../images/Ai.png";
import cs from "../images/cc.svg";
import dataDriven from "../images/datadriven.png";

import webdevBg from "../images/liquidBg.jpg";
import cloudBg from "../images/cloudeBg.jpg";
import aiBg from "../images/aiBg.jpg";

import gridImg3 from "../images/JPEG image 3.jpg";
import gridImg4 from "../images/JPEG image 4.jpg";
import gridImg5 from "../images/JPEG image 5.jpg";
import gridImg6 from "../images/JPEG image 6.jpg";
import gridImg7 from "../images/JPEG image 7.jpg";
import gridImg8 from "../images/JPEG image 8.jpg";
import gridImg9 from "../images/JPEG image 9.jpg";
import gridImg10 from "../images/JPEG image 10.jpg";
import gridImg11 from "../images/JPEG image 11.jpg";
import gridImg12 from "../images/JPEG image 12.jpg";
import gridImg13 from "../images/JPEG image 13.jpg";
import gridImg14 from "../images/JPEG image 14.jpg";
import gridImg15 from "../images/JPEG image 15.jpg";
import gridImg16 from "../images/JPEG image 16.jpg";
import gridImg17 from "../images/JPEG image 17.jpg";
import gridImg18 from "../images/JPEG image 18.jpg";
import gridImg19 from "../images/JPEG image 19.jpg";
import gridImg20 from "../images/JPEG image 20.jpg";
import gridImg21 from "../images/JPEG image 21.jpg";
import gridImg22 from "../images/JPEG image 22.jpg";
import gridImg23 from "../images/JPEG image 23.jpg";
import gridImg24 from "../images/JPEG image 24.jpg";
import gridImg25 from "../images/JPEG image 25.jpg";
import gridImg26 from "../images/JPEG image 26.jpg";

import gmall from "../images/gmall.jpg";
import ghigh from "../images/ghigh.jpg";
import gstudy from "../images/gstudy.jpg";
import grage from "../images/grage.jpg";
import gacc from "../images/gacc.jpg";
import ghop from "../images/ghop.jpg";

import articles1 from "../images/article-1.jpg";
import articles2 from "../images/article-2.jpg";
import articles3 from "../images/article-3.jpg";
import articles4 from "../images/article-4.jpg";
import articleUser from "../images/user-2.jpg";

export interface Article {
  id: number;
  img: string;
  title: string;
  description: string;
  user: string;
  userImg: string;
  date: string;
  month: string;
}

export interface BlogStory {
  id: number;
  bgImg: string;
  title: string;
  description: string;
  userImg: string;
}

export const articleData: Article[] = [
  {
    id: 1,
    img: articles1,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    user: "harisankar",
    userImg: articleUser,
    date: "7",
    month: "july",
  },
  {
    id: 2,
    img: articles2,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    user: "harisankar",
    userImg: articleUser,
    date: "7",
    month: "july",
  },
  {
    id: 3,
    img: articles3,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    user: "harisankar",
    userImg: articleUser,
    date: "7",
    month: "july",
  },
  {
    id: 4,
    img: articles4,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    user: "harisankar",
    userImg: articleUser,
    date: "7",
    month: "july",
  },
];

export const blogStoriesData: BlogStory[] = [
  {
    id: 1,
    bgImg: articles1,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    userImg: articleUser,
  },
  {
    id: 2,
    bgImg: articles2,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    userImg: articleUser,
  },
  {
    id: 3,
    bgImg: articles3,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    userImg: articleUser,
  },
  {
    id: 4,
    bgImg: articles4,
    title: "how to improve your skills",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    userImg: articleUser,
  },
];

type ServicesSlide = {
  id: string;
  title: string;
  abv: string;
  url: string;
};

export const ServicesSlides: ServicesSlide[] = [
  {
    id: "slide-1",
    title: "artificial intelligence",
    abv: "AI",
    url: Image01,
  },
  {
    id: "slide-2",
    title: "machine learning",
    abv: "ML",
    url: Image02,
  },
  {
    id: "slide-3",
    title: "web development",
    abv: "WD",
    url: Image03,
  },
  {
    id: "slide-4",
    title: "data analysis",
    abv: "DA",
    url: Image04,
  },
  {
    id: "slide-5",
    title: "cloud computing",
    abv: "CC",
    url: Image05,
  },
];

export const startingFeatures: string[] = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  "Reprehenderit, maiores? dolor sit amet to be safe",
  "Lorem, ipsum dolor sit amet, Reprehenderit, maiores?",
];

export interface SliderItem {
  img: string;
  location: string;
  description: string;
  title: string;
}

export const sliderData: SliderItem[] = [
  {
    img: Image01,
    location: "Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    title: "AI",
  },
  {
    img: Image02,
    title: "ML",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam quaerat error facere repudiandae cumque.",
    location: "Machine Learning",
  },
  {
    img: Image03,
    title: "CLOUD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo.",
    location: "Cloud Computing",
  },
  {
    img: Image04,
    title: "WEB DEV",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit.",
    location: "Web Development",
  },
  {
    img: Image05,
    title: "DA",
    description:
      "Lorem ipsum Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
    location: "Data Analysis",
  },
];

export interface ServiceItem {
  id: number;
  img: string;
  bgImg: string | null;
  title: string;
  description: string;
}

export const advanceServicesData: ServiceItem[] = [
  {
    id: 1,
    img: webdev,
    bgImg: webdevBg,
    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 2,
    img: ml,
    bgImg: null,
    title: "machine learning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 3,
    img: Ai,
    bgImg: aiBg,
    title: "artificial intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 4,
    img: dataDriven,
    bgImg: null,
    title: "data driven",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 5,
    img: cloud,
    bgImg: cloudBg,
    title: "cloud computing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 6,
    img: cs,
    bgImg: null,
    title: "cyber security",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
];

interface ProductDetails {
  id: number;
  img: string;
  title: string;
  rating: string;
  subtitle: string;
  description: string;
}

export const productDetails: ProductDetails[] = [
  {
    id: 1,
    img: ghop,
    title: "G-HOP",
    rating: "8.5",
    subtitle: "Hospital ERM + CRM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 2,
    img: gmall,
    title: "G-MALL",
    rating: "9.3",
    subtitle: "Supermart ERP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 3,
    img: gstudy,
    title: "G-STUDY",
    rating: "8.7",
    subtitle: "School Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 4,
    img: ghigh,
    title: "G-HIGH",
    rating: "9.0",
    subtitle: "College Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 5,
    img: gacc,
    title: "G-ACC",
    rating: "8.4",
    subtitle: "Accounting Software",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
  {
    id: 6,
    img: grage,
    title: "G-RAGE",
    rating: "8.3",
    subtitle: "Garage Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam est nemo fugit aliquid suscipit quaerat error facere repudiandae cumque.",
  },
];

export interface IndustryData {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string;
}

export const industriesData: IndustryData[] = [
  {
    id: 1,
    url: gridImg3,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "banking",
  },
  {
    id: 2,
    url: gridImg4,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "financial service",
  },
  {
    id: 3,
    url: gridImg5,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "telecom industry",
  },
  {
    id: 4,
    url: gridImg6,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "healthcare",
  },
  {
    id: 5,
    url: gridImg7,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "life science",
  },
  {
    id: 6,
    url: gridImg8,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "energy",
  },
  {
    id: 7,
    url: gridImg9,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "agreeculture",
  },
  {
    id: 8,
    url: gridImg10,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "utilities",
  },
  {
    id: 9,
    url: gridImg11,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "warehouse",
  },
  {
    id: 10,
    url: gridImg12,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "production",
  },
  {
    id: 11,
    url: gridImg13,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "logistics",
  },
  {
    id: 12,
    url: gridImg14,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "it industry",
  },
  {
    id: 13,
    url: gridImg15,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "insurance",
  },
  {
    id: 14,
    url: gridImg16,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "fashion & textile",
  },
  {
    id: 15,
    url: gridImg17,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "transport",
  },
  {
    id: 16,
    url: gridImg18,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "piblic service",
  },
  {
    id: 17,
    url: gridImg19,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "retail",
  },
  {
    id: 18,
    url: gridImg20,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "hospitality",
  },
  {
    id: 19,
    url: gridImg21,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "communication",
  },
  {
    id: 20,
    url: gridImg22,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "travel & tourism",
  },
  {
    id: 21,
    url: gridImg23,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "education",
  },
  {
    id: 22,
    url: gridImg24,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "real-estate",
  },
  {
    id: 23,
    url: gridImg25,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "film and media",
  },
  {
    id: 24,
    url: gridImg26,
    title: "Lorem ipsum",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    tags: "manufacturing",
  },
];

export const hiringCriteria: string[] = [
  "Possess strong technical skills and problem-solving abilities, with experience in real-world projects.",
  "Demonstrate excellent communication and teamwork skills, ensuring smooth collaboration in a team environment.",
  "Have a passion for continuous learning and professional growth, staying updated with the latest industry trends.",
];
