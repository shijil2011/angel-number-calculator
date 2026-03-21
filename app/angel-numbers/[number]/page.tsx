import { notFound } from "next/navigation"
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

// Auto-link helper to inject internal links naturally, avoiding self-links and excessive linking
function AutoLinkContent({ 
  text, 
  currentNumber, 
  tracker 
}: { 
  text: string; 
  currentNumber: string; 
  tracker: { internalCount: number } 
}) {
  const parts = text.split(/(\bangel number \d{3,4}\b|\b\d{3,4}\b)/gi);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/\b(\d{3,4})\b/);
        // Only link if it's a number, not the current page, and under the 5-link limit
        if (match && angelNumbersList.includes(match[1]) && match[1] !== currentNumber && tracker.internalCount < 5) {
          tracker.internalCount++;
          return <Link key={i} href={`/angel-numbers/${match[1]}`} className="text-primary font-medium hover:underline underline-offset-2">{part}</Link>;
        }
        return part;
      })}
    </>
  );
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
  const tracker = { internalCount: 0 };

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
      "@id": `https://angel-number-calculator.vercel.app/angel-numbers/${meaning.number}`,
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
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-primary-foreground rounded-full text-3xl font-bold mb-6">
              {meaning.number}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Angel Number {meaning.number} Meaning & Significance</h1>
            
            {/* Key Takeaways */}
            <Card className="my-8 bg-primary/5 border-primary/20 text-left">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                    <Star className="h-5 w-5" /> Key Takeaways
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                    <p>• {meaning.shortMeaning}</p>
                    <p>• Spiritual guidance for: {meaning.spiritualSignificance.slice(0, 100)}...</p>
                    <p>• Practical advice: {meaning.practicalActions[0]}</p>
                </CardContent>
            </Card>

            <p className="text-xl text-muted-foreground mb-6 text-balance">{meaning.shortMeaning}</p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            <section id="meaning">
              <h2 className="text-3xl font-bold mb-6">Complete Meaning of Angel Number {meaning.number}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                {meaning.expandedMeaning.split("\n\n").map((p, i) => <p key={i} className="mb-4"><AutoLinkContent text={p} currentNumber={meaning.number} tracker={tracker} /></p>)}
              </div>
            </section>

            {/* Spiritual Significance */}
            <section id="spiritual">
              <h2 className="text-2xl font-bold mb-4">Spiritual Significance</h2>
              <p className="text-muted-foreground leading-relaxed"><AutoLinkContent text={meaning.spiritualSignificance} currentNumber={meaning.number} tracker={tracker} /></p>
            </section>

            {/* Love & Relationships */}
            <section id="love">
              <h2 className="text-2xl font-bold mb-4">Love & Relationships</h2>
              <p className="text-muted-foreground leading-relaxed"><AutoLinkContent text={meaning.loveAndRelationships} currentNumber={meaning.number} tracker={tracker} /></p>
            </section>

            {/* Career & Money */}
            <section id="career">
              <h2 className="text-2xl font-bold mb-4">Career & Money</h2>
              <p className="text-muted-foreground leading-relaxed"><AutoLinkContent text={meaning.careerAndMoney} currentNumber={meaning.number} tracker={tracker} /></p>
            </section>

            {/* Practical Actions & Tips */}
            <div className="grid md:grid-cols-2 gap-8">
                <section id="actions">
                    <h2 className="text-2xl font-bold mb-4">Practical Actions</h2>
                    <ul className="space-y-3">
                        {meaning.practicalActions.map((a, i) => <li key={i} className="text-muted-foreground"><AutoLinkContent text={a} currentNumber={meaning.number} tracker={tracker} /></li>)}
                    </ul>
                </section>
                <section id="manifestation">
                    <h2 className="text-2xl font-bold mb-4">Manifestation Tips</h2>
                    <ul className="space-y-3">
                        {meaning.manifestationTips.map((t, i) => <li key={i} className="text-muted-foreground"><AutoLinkContent text={t} currentNumber={meaning.number} tracker={tracker} /></li>)}
                    </ul>
                </section>
            </div>

            {/* References */}
            <section id="references">
              <h2 className="text-2xl font-bold mb-4">Further Resources</h2>
              <p className="text-muted-foreground">
                To explore more about numerology, check out <Link href="https://en.wikipedia.org/wiki/Numerology" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">this external overview on Wikipedia</Link> or return to our <Link href="/" className="text-primary hover:underline">Angel Number Calculator</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
