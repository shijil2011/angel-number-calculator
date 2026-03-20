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
                {meaning.expandedMeaning.split("\n\n").map((paragraph: string, index: number) => (
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
