#!/usr/bin/env python3
"""
Angel Number Page Generator - Clean Approach
Creates centralized data + dynamic page lookup for 200+ numbers.
"""
import json
import os
from pathlib import Path

# All angel numbers to generate
ANGEL_NUMBERS = []

# Triple repeating: 111, 222 ... 999
for d in '123456789':
    ANGEL_NUMBERS.append(d * 3)

# Master numbers: 11, 22 ... 99
for d in '123456789':
    ANGEL_NUMBERS.append(d * 2)

# Quad repeating: 1111, 2222 ... 9999
for d in '123456789':
    ANGEL_NUMBERS.append(d * 4)

# Decimal doubles: 101, 202 ... 909
for d in '123456789':
    ANGEL_NUMBERS.append(f'{d}0{d}')

# Hundreds: 100, 200 ... 900
for d in '123456789':
    ANGEL_NUMBERS.append(f'{d}00')

# Sequential triples: 123, 234 ... 789
for d in range(1, 8):
    ANGEL_NUMBERS.append(f'{d}{d+1}{d+2}')

# Reverse triples: 321, 432 ... 987
for d in range(3, 10):
    ANGEL_NUMBERS.append(f'{d}{d-1}{d-2}')

# Palindromes (4-digit): 1001, 1111, 1221 ... 9889
for d in range(0, 10):
    for d2 in range(0, 10):
        ANGEL_NUMBERS.append(f'{d}{d2}{d2}{d}')

# Palindromes (3-digit): 101, 111, 121 ... 989
for d in range(0, 10):
    for d2 in range(0, 10):
        ANGEL_NUMBERS.append(f'{d}{d2}{d}')

# Five-digit repeating: 11111 ... 99999
for d in '123456789':
    ANGEL_NUMBERS.append(d * 5)

# Five-digit sequential: 12345, 23456 ... 56789
for d in range(1, 6):
    ANGEL_NUMBERS.append(f'{d}{d+1}{d+2}{d+3}{d+4}')

# Six-digit repeating: 111111 ... 999999
for d in '123456789':
    ANGEL_NUMBERS.append(d * 6)

# Angel years (commonly searched)
for year in range(1990, 2031):
    ANGEL_NUMBERS.append(str(year))

# 4-digit with 0 center: 1001, 2002 ... 9009
for d in '123456789':
    ANGEL_NUMBERS.append(f'{d}00{d}')

# Key 4-digit combinations
for d in '123456789':
    for d2 in '123456789':
        if d != d2:
            ANGEL_NUMBERS.append(f'{d}{d}{d2}{d2}')

# Two digit: 11-99
for d in range(1, 10):
    ANGEL_NUMBERS.append(str(d) * 2)

# Remove duplicates and sort by length then value
ANGEL_NUMBERS = sorted(set(ANGEL_NUMBERS), key=lambda x: (-len(x), x))

print(f"Total unique angel numbers: {len(ANGEL_NUMBERS)}")

# Theme lookup
def get_core_theme(num):
    first_digit = int(num[0])
    themes = {
        1: {"focus": "New beginnings", "energy": "initiative and leadership"},
        2: {"focus": "Partnership", "energy": "cooperation and balance"},
        3: {"focus": "Expression", "energy": "creativity and communication"},
        4: {"focus": "Foundation", "energy": "stability and hard work"},
        5: {"focus": "Change", "energy": "freedom and adventure"},
        6: {"focus": "Harmony", "energy": "love and responsibility"},
        7: {"focus": "Spirituality", "energy": "inner wisdom and reflection"},
        8: {"focus": "Abundance", "energy": "power and material success"},
        9: {"focus": "Completion", "energy": "universal love and endings"},
    }
    base = themes.get(first_digit, themes[1])
    
    if len(set(num)) == 1:
        base = {"focus": "Master Number", "energy": "amplified spiritual power"}
    elif all(c == '0' for c in num[1:]) and num[0] != '0':
        base = {"focus": "Divine gateway", "energy": "connection to source energy"}
    elif num == num[::-1] and len(num) > 2:
        base = {"focus": "Mirror number", "energy": "reflection and self-awareness"}
    
    return base

# Generate all data
all_data = {}
for number in ANGEL_NUMBERS:
    theme = get_core_theme(number)
    first_digit = int(number[0])
    
    titles = {
        1: "Awakening & Manifestation Power",
        2: "Balance, Trust & Divine Partnerships",
        3: "Creativity, Joy & Spiritual Expression",
        4: "Stability, Foundation & Angelic Protection",
        5: "Freedom, Change & Life Purpose",
        6: "Harmony, Love & Family Balance",
        7: "Spiritual Awakening & Inner Wisdom",
        8: "Abundance, Power & Life Mastery",
        9: "Completion, Wisdom & Universal Love",
    }
    
    title = f"{number} Angel Number Meaning — {titles.get(first_digit, titles[1])}"
    short_meaning = f"A powerful angel number signaling {theme['energy']} in your life journey"
    
    expanded = f"""Angel number {number} carries a unique and profound message from the spiritual realm. When this number appears repeatedly in your life, it's a clear indication that your guardian angels are trying to communicate something deeply significant to you. The repeated appearance of {number} is not a coincidence — it's a deliberate divine message designed to guide you toward your highest purpose and spiritual fulfillment.

The energy surrounding {number} is multifaceted and rich with meaning. Depending on the context of your life and what you were thinking or doing when this number appeared, the message may relate to different aspects of your personal journey. Your angels use these numerical patterns because numbers are a universal language that transcends words, carrying specific vibrational frequencies that convey precise guidance.

One of the most significant aspects of angel number {number} is its connection to {theme['focus'].lower()}. This number appears in your life precisely when you need to pay attention to this area of your existence. Whether you're being called to embrace new opportunities, release old patterns, or simply acknowledge a truth you've been avoiding, {number} serves as a cosmic nudge toward the right path."""

    spiritual = f"""Spiritually, {number} represents a powerful opportunity for growth and transformation. This number often appears during times of spiritual awakening or when you're being called to deepen your connection with the divine realm. The angels are encouraging you to trust your spiritual path and have faith that you're exactly where you're meant to be on your journey.

The vibration of {number} resonates with higher spiritual frequencies. When you work with this energy, you may find yourself more attuned to your intuition, more open to receiving divine guidance, and more willing to follow your spiritual instincts even when they don't make logical sense. This is a time of profound spiritual development."""

    love = f"""In matters of the heart, angel number {number} brings a message of hope and guidance. Whether you're in a relationship or single and searching, this number invites you to examine the role of love in your life and consider whether your current situation is aligned with your highest good.

For those in relationships, {number} may be encouraging you and your partner to focus on building a stronger foundation together. This could mean working on communication, deepening your emotional connection, or simply making more time for one another amidst the busyness of daily life. The energy of {number} supports harmony and mutual understanding."""

    career = f"""Regarding career and finances, {number} carries an important message about {theme['focus'].lower()}. Your angels are encouraging you to pay attention to your professional path and consider whether your current work aligns with your true purpose and values.

If you've been considering a career change, starting a new project, or taking your business in a different direction, {number} is a sign that now may be the perfect time to make that move. The energy of this number supports new beginnings and the courage to pursue your authentic aspirations."""

    practical = [
        f"Take time to reflect on what {number} means in your personal life context",
        "Pay attention to your thoughts and feelings when you see this number appearing",
        f"Consider how {theme['focus'].lower()} applies to your current life situation",
        "Trust your intuition and inner wisdom when making decisions",
        "Meditate on the specific message your angels may be sending you",
        f"Write down when and where you see {number} to identify patterns",
        "Express gratitude for the guidance and protection you receive",
        "Be open to receiving answers to your prayers and intentions",
    ]

    manifest = [
        f"Focus your intentions on {theme['focus'].lower()} in your life",
        f"Visualize yourself already living the message of angel number {number}",
        "Use affirmations that resonate with the energy of this number",
        "Take inspired action toward the opportunities this number reveals",
        "Trust that the universe is conspiring in your favor",
        "Maintain a journal to track insights and synchronicities",
        "Practice patience while remaining open to divine timing",
        "Celebrate small wins and acknowledge progress",
    ]

    affirmations = [
        f"I am open to receiving the spiritual guidance of angel number {number}",
        f"The universe communicates clearly through the energy of {number}",
        "I trust my intuition and follow divine guidance with confidence",
        "I am exactly where I'm meant to be on my spiritual journey",
        "My guardian angels protect and guide me every day",
        f"I manifest abundance by aligning with {theme['focus'].lower()}",
        "I am worthy of receiving divine love and wisdom",
        "I embrace new beginnings with courage and faith",
    ]

    when_see = f"""When you encounter angel number {number}, take a moment to pause and reflect. This is a sacred moment of communication between you and the spiritual realm. What were you thinking about? What situation were you facing? The context in which {number} appears often contains important clues about the specific message your angels are trying to convey.

Seeing {number} is an invitation to heighten your awareness and pay closer attention to the signs, synchronicities, and guidance that surround you."""

    numerology = f"""In the ancient science of numerology, {number} carries its own unique vibrational signature. The meaning of {number} is influenced by the individual digits that compose it, their positions, and the overall energy they create together.

When reduced to its core, {number} resonates with the energy of {theme['focus'].lower()} and {theme['energy']}. Numerologists believe that repeated numbers like {number} carry amplified spiritual significance because they appear through divine intervention rather than random chance."""

    common_qa = [
        {
            "question": f"What does it mean when I keep seeing {number} everywhere?",
            "answer": f"Repeatedly seeing {number} is a powerful sign that your guardian angels are trying to get your attention. This number carries a specific message related to {theme['focus'].lower()}, and your angels want you to understand and apply this guidance to your life."
        },
        {
            "question": f"Is {number} a lucky angel number?",
            "answer": f"{number} is considered highly auspicious in angel numerology. It represents divine alignment and spiritual protection. While 'luck' is a human concept, {number} genuinely indicates that positive energies and opportunities are flowing toward you."
        },
        {
            "question": f"What should I do when I see angel number {number}?",
            "answer": "When you see this number, take a moment to center yourself and acknowledge the spiritual connection. You might pause to offer gratitude, set an intention, or simply be mindful of your thoughts in that moment."
        },
        {
            "question": f"Does {number} relate to my love life?",
            "answer": f"{number} can certainly relate to matters of the heart. Depending on your current situation, this number may be guiding you toward greater love, harmony, or awareness in your relationships."
        },
        {
            "question": f"Can {number} appear in dreams?",
            "answer": f"Yes, angel numbers like {number} can appear in dreams, on clocks, receipts, license plates, addresses, phone numbers, and virtually anywhere numbers appear in your daily life."
        }
    ]

    all_data[number] = {
        "number": number,
        "title": title,
        "shortMeaning": short_meaning,
        "expandedMeaning": expanded,
        "spiritualSignificance": spiritual,
        "loveAndRelationships": love,
        "careerAndMoney": career,
        "practicalActions": practical,
        "manifestationTips": manifest,
        "affirmations": affirmations,
        "whenYouSee": when_see,
        "numerologyBreakdown": numerology,
        "relatedNumbers": ["111", "222", "333", "444"],
        "commonQuestions": common_qa
    }

# Write the TypeScript data file
data_file = Path("lib/angel-number-data.ts")
with open(data_file, "w") as f:
    f.write(f"""// Auto-generated - {len(all_data)} angel numbers
export const angelNumberData = {json.dumps(all_data, indent=2)} as const;

export type AngelNumber = keyof typeof angelNumberData;

export const angelNumbersList = Object.keys(angelNumberData) as const;
""")

print(f"Created {data_file} with {len(all_data)} angel numbers")

# Now create the unified page.tsx that handles all numbers dynamically
page_tsx_content = '''import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Heart, Zap, Star, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { angelNumberData, angelNumbersList } from "@/lib/angel-number-data"

interface PageProps {
  params: {
    number: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const meaning = angelNumberData[params.number as keyof typeof angelNumberData]

  if (!meaning) {
    return {
      title: "Angel Number Not Found",
      description: "The requested angel number meaning could not be found.",
    }
  }

  return {
    title: meaning.title,
    description: `Discover the spiritual meaning of angel number ${meaning.number}. ${meaning.shortMeaning}. Get detailed guidance, manifestation tips, and practical actions.`,
    keywords: [
      `angel number ${meaning.number}`,
      `${meaning.number} meaning`,
      `angel number ${meaning.number} meaning`,
      "angel numbers",
      "numerology",
      "spiritual guidance",
    ],
    openGraph: {
      title: meaning.title,
      description: meaning.shortMeaning,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  return angelNumbersList.map((number) => ({ number }))
}

export default function AngelNumberMeaningPage({ params }: PageProps) {
  const meaning = angelNumberData[params.number as keyof typeof angelNumberData]

  if (!meaning) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meaning.title,
    description: meaning.shortMeaning,
    author: {
      "@type": "Organization",
      name: "Angel Number Finder",
    },
    publisher: {
      "@type": "Organization",
      name: "Angel Number Finder",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://angelnumberfinder.com/angel-numbers/${meaning.number}-meaning`,
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: meaning.commonQuestions.map((qa: { question: string; answer: string }) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Angel Number Finder</span>
              </Link>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Calculator
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/angel-numbers" className="hover:text-primary">Angel Numbers</Link>
            <span className="mx-2">/</span>
            <span>{meaning.number} Meaning</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-primary-foreground rounded-full text-3xl font-bold mb-6">
              {meaning.number}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Angel Number {meaning.number}</h1>
            <p className="text-xl text-muted-foreground mb-6 text-balance">{meaning.shortMeaning}</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Spiritual Guidance</Badge>
              <Badge variant="secondary">Manifestation</Badge>
              <Badge variant="secondary">Angel Messages</Badge>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <Link href="#meaning" className="hover:text-primary">• Complete Meaning</Link>
                <Link href="#spiritual" className="hover:text-primary">• Spiritual Significance</Link>
                <Link href="#love" className="hover:text-primary">• Love & Relationships</Link>
                <Link href="#career" className="hover:text-primary">• Career & Money</Link>
                <Link href="#actions" className="hover:text-primary">• Practical Actions</Link>
                <Link href="#manifestation" className="hover:text-primary">• Manifestation Tips</Link>
                <Link href="#numerology" className="hover:text-primary">• Numerology Breakdown</Link>
                <Link href="#faq" className="hover:text-primary">• Common Questions</Link>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Complete Meaning */}
            <section id="meaning">
              <h2 className="text-3xl font-bold mb-6">Complete Meaning of Angel Number {meaning.number}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                {meaning.expandedMeaning.split("\\n\\n").map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            <Separator />

            {/* Spiritual Significance */}
            <section id="spiritual">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Spiritual Significance
              </h2>
              <p className="text-muted-foreground leading-relaxed">{meaning.spiritualSignificance}</p>
            </section>

            <Separator />

            {/* Love & Relationships */}
            <section id="love">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Love & Relationships
              </h2>
              <p className="text-muted-foreground leading-relaxed">{meaning.loveAndRelationships}</p>
            </section>

            <Separator />

            {/* Career & Money */}
            <section id="career">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Career & Money
              </h2>
              <p className="text-muted-foreground leading-relaxed">{meaning.careerAndMoney}</p>
            </section>

            <Separator />

            {/* Practical Actions & Manifestation */}
            <div className="grid md:grid-cols-2 gap-8">
              <section id="actions">
                <h2 className="text-2xl font-bold mb-4">Practical Actions</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {meaning.practicalActions.map((action: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section id="manifestation">
                <h2 className="text-2xl font-bold mb-4">Manifestation Tips</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {meaning.manifestationTips.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            <Separator />

            {/* Affirmations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Positive Affirmations for {meaning.number}</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {meaning.affirmations.map((affirmation: string, index: number) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground italic">"{affirmation}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* When You See This Number */}
            <section>
              <h2 className="text-2xl font-bold mb-4">When You See {meaning.number}</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">{meaning.whenYouSee}</p>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Numerology Breakdown */}
            <section id="numerology">
              <h2 className="text-2xl font-bold mb-4">Numerology Breakdown</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">{meaning.numerologyBreakdown}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Related Numbers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {meaning.relatedNumbers.map((num: string) => (
                        <Badge key={num} variant="outline" asChild>
                          <Link href={`/angel-numbers/${num}`}>{num}</Link>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {meaning.commonQuestions.map((qa: { question: string; answer: string }, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{qa.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{qa.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Discover Your Personal Angel Numbers</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to find out which angel numbers are most significant for you? Use our calculator to discover your
                personal angel numbers based on your birthdate and other details.
              </p>
              <Button size="lg" asChild>
                <Link href="/">Calculate My Angel Numbers</Link>
              </Button>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
'''

# Write the unified page.tsx
app_dir = Path("app/angel-numbers/[number]")
app_dir.mkdir(parents=True, exist_ok=True)

with open(app_dir / "page.tsx", "w") as f:
    f.write(page_tsx_content)

print(f"Created app/angel-numbers/[number]/page.tsx")

# Update sitemap to include all numbers
sitemap_content = '''import type { MetadataRoute } from "next"
import { angelNumbersList } from "@/lib/angel-number-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://angel-number-calculator.vercel.app"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/angel-numbers`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // All angel number meaning pages
  const angelNumberPages = angelNumbersList.map((number) => ({
    url: `${baseUrl}/angel-numbers/${number}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...angelNumberPages]
}
'''

with open("app/sitemap.ts", "w") as f:
    f.write(sitemap_content)

print(f"Updated app/sitemap.ts with {len(ANGEL_NUMBERS)} pages")

print("\\n✅ Generation complete!")
print(f"- {len(ANGEL_NUMBERS)} angel number pages ready")
print(f"- Sitemap updated")
print(f"- Data centralized in lib/angel-number-data.ts")
