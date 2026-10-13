import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Urja's Bakehouse",
  tagline: "100% eggless custom cakes, cupcakes, and desserts in Mississauga.",
  category: "Eggless custom cakes",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://urjas-bakehouse.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#f08aa4" }, // soft pink from the logo
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mississauga home bakery",
    headline: "100% eggless cakes made for your celebration",
    subhead: "Custom cakes, cupcakes, and sweet treats for birthdays, weddings, and more. Send a DM with your date and idea to get started.",
    images: [
      { src: "/images/post-1.jpg", alt: "Elegant blue textured cake with gold accents by Urja's Bakehouse" },
      { src: "/images/post-5.jpg", alt: "Lavender and gold birthday cake" },
      { src: "/images/post-3.jpg", alt: "Eggless tres leches cake collection" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "100% eggless cakes",
    "Food Handler Certified",
    "Made to order in Mississauga",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Delicious and beautiful treats",
    body: [
      "Urja's Bakehouse is a Mississauga bakery artist creating delicious and beautiful treats for birthdays, weddings, and more. Every cake is 100% eggless.",
      "Share your date, servings or size, flavour, and design idea. You can also find select treats on Uber Eats.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Fresh fruit topped eggless cake" },
  },

  menu: {
    title: "What we bake",
    intro: "Every order is custom. Quotes are shared in your message based on size, design, and date. No public price list.",
    variant: "cards",
    groups: [
      {
        title: "Celebration favourites",
        note: "Quoted by DM",
        items: [
          {
            name: "100% eggless custom cakes",
            description: "Birthdays, weddings, and every sweet moment in between.",
            image: { src: "/images/post-1.jpg", alt: "Blue and gold custom celebration cake" },
            href: "https://www.instagram.com/p/DeVQKgdDpTL/",
          },
          {
            name: "Cupcakes",
            description: "Pretty little bites for showers, parties, and gifts.",
            image: { src: "/images/post-2.jpg", alt: "Baby shower cupcakes" },
            href: "https://www.instagram.com/p/DeNWJkwDryx/",
          },
          {
            name: "Eggless tres leches",
            description: "Soft, creamy, and made without eggs.",
            image: { src: "/images/post-3.jpg", alt: "Eggless tres leches collection" },
            href: "https://www.instagram.com/p/Dd5KEIxOMMp/",
          },
          {
            name: "Brownies, cheesecakes, and hampers",
            description: "Chocolate bars, cheesecakes, and sweet gift boxes.",
            image: { src: "/images/post-4.jpg", alt: "Sparkly custom celebration cake" },
            href: "https://www.instagram.com/p/DdmwlYKDtnK/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1080,
        height: 1440,
        alt: "Elegant blue textured cake with gold",
        caption: "Blue cake magic",
        href: "https://www.instagram.com/p/DeVQKgdDpTL/",
      },
      {
        src: "/images/post-2.jpg",
        width: 1080,
        height: 565,
        alt: "Baby shower cupcakes",
        caption: "Baby shower cupcakes",
        href: "https://www.instagram.com/p/DeNWJkwDryx/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1080,
        alt: "Eggless tres leches collection",
        caption: "Eggless tres leches",
        href: "https://www.instagram.com/p/Dd5KEIxOMMp/",
      },
      {
        src: "/images/post-4.jpg",
        width: 1080,
        height: 1440,
        alt: "Sparkly cake for a new beginning",
        caption: "A little sparkle",
        href: "https://www.instagram.com/p/DdmwlYKDtnK/",
      },
      {
        src: "/images/post-5.jpg",
        width: 1080,
        height: 1440,
        alt: "Lavender and gold thirtieth birthday cake",
        caption: "Lavender and gold",
        href: "https://www.instagram.com/p/DdPL4Hky1rp/",
      },
      {
        src: "/images/post-6.jpg",
        width: 1080,
        height: 1350,
        alt: "Blue and gold birthday cake",
        caption: "Blue and gold birthday",
        href: "https://www.instagram.com/p/DdKwioLur4x/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1350,
        alt: "Fresh fruit topped cake",
        caption: "Fresh and fruity",
        href: "https://www.instagram.com/p/DdH-SYkuNTd/",
      },
      {
        src: "/images/post-8.jpg",
        width: 1080,
        height: 1440,
        alt: "Pharmacist themed celebration cake",
        caption: "Sweet for a pharmacist",
        href: "https://www.instagram.com/p/Dc1579gDo9j/",
      },
    ],
  },

  reels: {
    title: "A closer look",
    intro: "",
    items: [],
  },

  instagram: {
    handle: "urjasbakehouse",
    embeds: [
      "https://www.instagram.com/p/DeVQKgdDpTL/",
      "https://www.instagram.com/p/Dd5KEIxOMMp/",
      "https://www.instagram.com/p/DdPL4Hky1rp/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to open a starter message, then send it in the chat. Select treats are also on Uber Eats.",
    dmMessage:
      "Hi Urja's Bakehouse! I would like to place a custom order.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [
      {
        label: "Order on Uber Eats",
        href: "https://www.ubereats.com/ca/store/urjas-bakehouse/6z-4v6xSQxm5SUP8pn55BA",
      },
    ],
    note: "DM for custom cakes. Uber Eats for select ready items.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "Are your cakes eggless?",
      a: "Yes. Urja's Bakehouse makes 100% eggless cakes in Canada.",
    },
    {
      q: "How do I order a custom cake?",
      a: "Send a DM on Instagram with your date, servings or size, flavour, and design idea. You will get a quote back in the chat.",
    },
    {
      q: "Where are you based?",
      a: "Urja's Bakehouse is a home bakery in Mississauga, Ontario.",
    },
    {
      q: "Can I order on Uber Eats?",
      a: "Yes. Select treats are listed on Uber Eats. Custom cakes are ordered through Instagram DM.",
    },
  ],

  contact: {
    area: "Mississauga, Ontario",
    socials: [
      { label: "YouTube @urjasbakehouse", href: "https://youtube.com/@urjasbakehouse" },
    ],
  },

  seo: {
    title: "Urja's Bakehouse | Eggless custom cakes in Mississauga",
    description:
      "100% eggless custom cakes, cupcakes, and desserts in Mississauga. Food Handler Certified. Order by Instagram DM or Uber Eats.",
    keywords: [
      "eggless cakes Mississauga",
      "custom cakes Mississauga",
      "eggless bakery Mississauga",
      "Urja's Bakehouse",
      "tres leches Mississauga",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
