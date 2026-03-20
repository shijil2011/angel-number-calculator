// Schema.org structured data templates for SEO

export interface OrganizationSchema {
  "@context": string
  "@type": string
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
}

export interface WebsiteSchema {
  "@context": string
  "@type": string
  name: string
  url: string
  description: string
  publisher: {
    "@type": string
    name: string
  }
}

export interface BreadcrumbSchema {
  "@context": string
  "@type": string
  itemListElement: Array<{
    "@type": string
    position: number
    name: string
    item: string
  }>
}

export interface HowToSchema {
  "@context": string
  "@type": string
  name: string
  description: string
  step: Array<{
    "@type": string
    name: string
    text: string
  }>
}

export interface FAQSchema {
  "@context": string
  "@type": string
  mainEntity: Array<{
    "@type": string
    name: string
    acceptedAnswer: {
      "@type": string
      text: string
    }
  }>
}

export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Angel Number Calculator",
  url: "https://angel-number-calculator.vercel.app",
  logo: "https://angel-number-calculator.vercel.app/logo.png",
  description:
    "Discover your personal angel numbers and their spiritual meanings through our free, evidence-based calculator.",
  sameAs: [
    "https://twitter.com/angelnumbercalc",
    "https://facebook.com/angelnumbercalc",
    "https://instagram.com/angelnumbercalc",
  ],
}

export const websiteSchema: WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Angel Number Calculator",
  url: "https://angel-number-calculator.vercel.app",
  description:
    "Calculate your personal angel numbers and discover their spiritual meanings with our free, comprehensive calculator.",
  publisher: {
    "@type": "Organization",
    name: "Angel Number Calculator",
  },
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export const calculatorHowToSchema: HowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Your Angel Number",
  description: "Step-by-step guide to finding your personal angel numbers using our calculator",
  step: [
    {
      "@type": "HowToStep",
      name: "Enter Your Birthdate",
      text: "Input your birthdate in DD/MM/YYYY format. This is required for calculating your life path number and finding digit patterns.",
    },
    {
      "@type": "HowToStep",
      name: "Add Optional Details",
      text: "Optionally add your full name for numerology analysis, time you often see for pattern matching, and any numbers you keep seeing.",
    },
    {
      "@type": "HowToStep",
      name: "Calculate Results",
      text: "Click 'Find My Angel Number' to generate your top 3 angel number candidates with confidence scores and evidence.",
    },
    {
      "@type": "HowToStep",
      name: "Review Your Results",
      text: "Examine your angel numbers, their meanings, confidence scores, and the evidence sources that led to each result.",
    },
    {
      "@type": "HowToStep",
      name: "Apply the Guidance",
      text: "Use the practical actions, manifestation tips, and spiritual guidance provided for each of your angel numbers.",
    },
  ],
}

export const homepageFAQSchema: FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the angel number calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our calculator uses established numerological principles and provides confidence scores based on multiple evidence sources. The accuracy depends on how much personal information you provide and how strongly the patterns align.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide my real name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your name is optional and only used for numerology calculations. We don't store any personal information, and all calculations happen in your browser for privacy.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't resonate with my results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Angel numbers are personal spiritual messages. If the results don't resonate, try focusing on numbers you've been seeing repeatedly in your daily life, as these often carry the most relevant guidance.",
      },
    },
    {
      "@type": "Question",
      name: "How do angel numbers work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Angel numbers are believed to be messages from your guardian angels or the universe. They appear as repeating number sequences in your daily life and carry specific spiritual meanings and guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I calculate angel numbers for someone else?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can use our calculator for family members or friends by entering their birthdate and details. However, the most meaningful results come from personal sightings and individual spiritual connection.",
      },
    },
  ],
}
