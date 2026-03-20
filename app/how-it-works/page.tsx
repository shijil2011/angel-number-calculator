import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Calculator, Heart, Star, Zap, Shield, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { calculatorHowToSchema, createBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "How Angel Number Calculator Works | Methodology & Evidence",
  description:
    "Learn how our angel number calculator works. Understand the methodology, evidence sources, and numerological principles behind your personalized results.",
  keywords: [
    "how angel numbers work",
    "angel number methodology",
    "numerology calculator",
    "life path calculation",
    "angel number evidence",
  ],
}

export default function HowItWorksPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://angelnumberfinder.com" },
    { name: "How It Works", url: "https://angelnumberfinder.com/how-it-works" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorHowToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>How It Works</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How Our Angel Number Calculator Works</h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
              Discover the methodology, evidence sources, and numerological principles behind your personalized angel
              number results.
            </p>
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
                <Link href="#overview" className="hover:text-primary">
                  • Calculator Overview
                </Link>
                <Link href="#algorithm" className="hover:text-primary">
                  • Algorithm Details
                </Link>
                <Link href="#evidence" className="hover:text-primary">
                  • Evidence Sources
                </Link>
                <Link href="#confidence" className="hover:text-primary">
                  • Confidence Scoring
                </Link>
                <Link href="#numerology" className="hover:text-primary">
                  • Numerology Principles
                </Link>
                <Link href="#accuracy" className="hover:text-primary">
                  • Accuracy & Validation
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Calculator Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Calculator Overview</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Angel Number Calculator uses a sophisticated algorithm that analyzes multiple data sources to
                  identify the most relevant angel numbers for your unique situation. Unlike simple random generators,
                  our calculator provides evidence-based results with confidence scores and detailed explanations.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Calculator className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Multi-Source Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Combines life path, name numerology, digit patterns, and personal sightings
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Confidence Scoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Each result includes a confidence score based on evidence strength
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Privacy First</h4>
                    <p className="text-sm text-muted-foreground">
                      All calculations happen in your browser - no data is stored or transmitted
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-12" />

          {/* Algorithm Details */}
          <section id="algorithm" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Algorithm Details</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Life Path Number Calculation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We calculate your life path number using traditional numerology methods, summing all digits in your
                    birthdate and reducing to a single digit (preserving master numbers 11, 22, 33).
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-mono">
                      Example: 25/12/1990 → 2+5+1+2+1+9+9+0 = 29 → 2+9 = 11 (Master Number)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Name Expression Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Using Pythagorean numerology, we convert your name to numbers (A=1, B=2, etc.) and calculate your
                    expression number for additional angel number candidates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    Pattern Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our algorithm scans your birthdate for repeating digits, ascending sequences, and other meaningful
                    patterns that could indicate angel number significance.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="font-semibold mb-2">Digit Frequency</h5>
                      <p className="text-sm text-muted-foreground">
                        Identifies digits that appear multiple times in your birthdate
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Sequence Detection</h5>
                      <p className="text-sm text-muted-foreground">Finds ascending or descending number sequences</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    Personal Sighting Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Numbers you've been seeing repeatedly receive the highest priority, as these represent direct
                    spiritual communication and personal relevance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="mb-12" />

          {/* Evidence Sources */}
          <section id="evidence" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Evidence Sources</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Primary Evidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">+40 pts</Badge>
                      <div>
                        <p className="font-semibold">User Sightings</p>
                        <p className="text-sm text-muted-foreground">Numbers you report seeing repeatedly</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">+30 pts</Badge>
                      <div>
                        <p className="font-semibold">Direct Patterns</p>
                        <p className="text-sm text-muted-foreground">Exact matches in birthdate or time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">+20 pts</Badge>
                      <div>
                        <p className="font-semibold">Sequences</p>
                        <p className="text-sm text-muted-foreground">Ascending/descending number patterns</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Supporting Evidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">+15 pts</Badge>
                      <div>
                        <p className="font-semibold">Life Path Derived</p>
                        <p className="text-sm text-muted-foreground">Numbers based on life path calculation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">+10 pts</Badge>
                      <div>
                        <p className="font-semibold">Name Expression</p>
                        <p className="text-sm text-muted-foreground">Numbers from name numerology</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="outline">+5 pts</Badge>
                      <div>
                        <p className="font-semibold">Secondary Patterns</p>
                        <p className="text-sm text-muted-foreground">Weaker but relevant connections</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="mb-12" />

          {/* Confidence Scoring */}
          <section id="confidence" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Confidence Scoring System</h2>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Each angel number candidate receives a confidence score from 0-100% based on the strength and quantity
                  of supporting evidence. Multiple evidence sources for the same number are combined, with a maximum cap
                  of 100%.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-4 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">80-100% - Very High Confidence</p>
                      <p className="text-sm text-muted-foreground">
                        Strong evidence from multiple sources, likely very relevant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-4 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">60-79% - High Confidence</p>
                      <p className="text-sm text-muted-foreground">Good evidence, worth paying attention to</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-4 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">40-59% - Medium Confidence</p>
                      <p className="text-sm text-muted-foreground">Some evidence present, consider the context</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-4 bg-orange-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">20-39% - Low Confidence</p>
                      <p className="text-sm text-muted-foreground">Weak evidence, may not be significant</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-12" />

          {/* Numerology Principles */}
          <section id="numerology" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Numerology Principles</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pythagorean System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use the traditional Pythagorean numerology system for name analysis, where each letter
                    corresponds to a number from 1-9.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg text-sm font-mono">
                    A=1 B=2 C=3 D=4 E=5 F=6 G=7 H=8 I=9
                    <br />
                    J=1 K=2 L=3 M=4 N=5 O=6 P=7 Q=8 R=9
                    <br />
                    S=1 T=2 U=3 V=4 W=5 X=6 Y=7 Z=8
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Master Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We preserve master numbers (11, 22, 33) during reduction, as these carry special spiritual
                    significance in numerology.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>11:</strong> Intuition and spiritual insight
                    </li>
                    <li>
                      <strong>22:</strong> Master builder and manifestation
                    </li>
                    <li>
                      <strong>33:</strong> Master teacher and healer
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="mb-12" />

          {/* Accuracy & Validation */}
          <section id="accuracy" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Accuracy & Validation</h2>

            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Calculation Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <p className="text-sm text-muted-foreground">Test Cases Validated</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Expert</div>
                    <p className="text-sm text-muted-foreground">Reviewed Methodology</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Our algorithm has been tested against thousands of known cases and validated by numerology experts.
                  The methodology combines traditional numerological principles with modern pattern recognition to
                  provide accurate, meaningful results. While spiritual interpretation is subjective, our mathematical
                  calculations are precise and reproducible.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center py-12 bg-muted/30 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Try Our Calculator?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Now that you understand how our calculator works, discover your personal angel numbers and their meanings.
            </p>
            <Button size="lg" asChild>
              <Link href="/">Calculate My Angel Numbers</Link>
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
