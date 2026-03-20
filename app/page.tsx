import { AngelNumberCalculator } from "@/components/angel-number-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Calculator, Heart, Star, Zap, Shield, ChevronDown } from "lucide-react"
import Link from "next/link"
import { homepageFAQSchema, createBreadcrumbSchema } from "@/lib/schema"

export default function HomePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Angel Number Calculator", url: "https://angel-number-calculator.vercel.app" },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">Angel Number Calculator</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="#calculator" className="text-sm hover:text-blue-600 transition-colors font-medium">
                  Calculator
                </Link>
                <div className="relative group">
                  <button className="text-sm hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                    Angel Numbers
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-lg py-2 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link href="/angel-numbers" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      All Meanings
                    </Link>
                    <Link href="/angel-numbers/111" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      111 Meaning
                    </Link>
                    <Link href="/angel-numbers/222" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      222 Meaning
                    </Link>
                    <Link href="/angel-numbers/333" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      333 Meaning
                    </Link>
                    <Link href="/angel-numbers/444" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      444 Meaning
                    </Link>
                  </div>
                </div>
                <Link href="/how-it-works" className="text-sm hover:text-blue-600 transition-colors font-medium">
                  How It Works
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900">Angel Number Calculator</h1>
            <p className="text-xl text-gray-600 mb-8 text-balance max-w-2xl mx-auto">
              Use our free angel number calculator to discover your personal angel numbers from your birthdate. Get
              detailed meanings, spiritual guidance, and manifestation tips.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="#calculator">Calculate My Angel Numbers</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-600" />
                Fast & Free
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                Private & Secure
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-600" />
                No Signup Required
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <AngelNumberCalculator />
          </div>
        </section>

        {/* New Expanded Content Sections */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Understanding Angel Numbers</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <Sparkles className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-xl">What Are Angel Numbers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Angel numbers are repetitive number sequences that carry divine guidance from your guardian angels.
                    These powerful messages appear when you need spiritual direction.
                  </p>
                  <Link href="/angel-numbers" className="text-blue-600 hover:text-blue-700 font-medium">
                    Explore all angel number meanings →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <Calculator className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-xl">How Our Calculator Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our angel number calculator analyzes your birthdate using numerology principles to reveal your most
                    significant angel numbers and their meanings.
                  </p>
                  <Link href="/how-it-works" className="text-purple-600 hover:text-purple-700 font-medium">
                    Learn our methodology →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <Heart className="h-8 w-8 text-pink-600 mb-2" />
                  <CardTitle className="text-xl">Personal Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Each angel number carries specific guidance for love, career, and spiritual growth. Discover what
                    your angels want you to know.
                  </p>
                  <Link href="#calculator" className="text-pink-600 hover:text-pink-700 font-medium">
                    Find your angel numbers →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Explainer Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Calculate Your Angel Numbers</h2>
            <p className="text-lg text-gray-600 mb-12 text-balance">
              Our calculator uses multiple evidence sources to find the angel numbers most relevant to you. We analyze
              your life path number, birthdate patterns, name numerology, and any numbers you've been seeing.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Life Path Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We calculate your life path number from your birthdate and create angel number candidates based on
                    this core spiritual number.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Pattern Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our algorithm detects repeating digits, sequences, and patterns in your birthdate and personal
                    details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Personal Sightings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Numbers you've been seeing repeatedly get the highest priority, as these are direct messages from
                    your angels.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="outline" className="flex items-center gap-2">
                <Sparkles className="h-3 w-3 text-blue-600" />
                Life Path
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Calculator className="h-3 w-3 text-purple-600" />
                Birthdate Pattern
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Star className="h-3 w-3 text-blue-600" />
                Time Match
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Heart className="h-3 w-3 text-pink-600" />
                Name Match
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Zap className="h-3 w-3 text-blue-600" />
                User Sighting
              </Badge>
            </div>
          </div>
        </section>

        {/* Popular Angel Numbers */}
        <section id="meanings" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Popular Angel Number Meanings</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  number: "111",
                  meaning: "New beginnings and manifestation power",
                  color: "bg-blue-500",
                  link: "/angel-numbers/111",
                },
                {
                  number: "222",
                  meaning: "Balance, cooperation, and divine timing",
                  color: "bg-green-500",
                  link: "/angel-numbers/222",
                },
                {
                  number: "333",
                  meaning: "Creativity, self-expression, and growth",
                  color: "bg-purple-500",
                  link: "/angel-numbers/333",
                },
                {
                  number: "444",
                  meaning: "Stability, hard work, and protection",
                  color: "bg-orange-500",
                  link: "/angel-numbers/444",
                },
                {
                  number: "555",
                  meaning: "Major life changes and freedom",
                  color: "bg-red-500",
                  link: "/angel-numbers/555",
                },
                {
                  number: "1234",
                  meaning: "Progressive steps and systematic growth",
                  color: "bg-teal-500",
                  link: "/angel-numbers/1234",
                },
              ].map((item) => (
                <Card key={item.number} className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}
                      >
                        {item.number}
                      </div>
                      <CardTitle className="text-lg text-gray-900">{item.number}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.meaning}</p>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700" asChild>
                      <Link href={item.link}>Read full meaning →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Reading */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Sample Angel Number Reading</h2>

            <Card className="border-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-blue-600">111</CardTitle>
                  <Badge className="bg-blue-600 text-white">95% confidence</Badge>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  New beginnings and manifestation power
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Evidence Sources:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600">
                        Life path number
                      </Badge>
                      <Badge variant="outline" className="text-purple-600">
                        Birthdate pattern (3x 1s)
                      </Badge>
                      <Badge variant="outline" className="text-pink-600">
                        User sighting
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600">
                    Angel number 111 is appearing in your life as a powerful sign of new beginnings and manifestation.
                    Your thoughts are rapidly manifesting into reality right now...
                  </p>

                  <Button variant="outline" className="text-blue-600 hover:bg-blue-50 bg-transparent">
                    Read Full Meaning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trust & Methodology */}
        <section id="how-it-works" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Methodology Explained</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our angel number calculator is based on established numerological principles and spiritual practices.
              Every calculation is transparent and explainable.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Evidence-Based Approach</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Life path calculation using traditional numerology
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Pythagorean name number analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Pattern recognition in personal data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    Confidence scoring based on multiple sources
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Reviewed</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Meanings sourced from spiritual traditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    Practical guidance for daily application
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Manifestation techniques included
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600">•</span>
                    Transparent calculation process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">How accurate is the angel number calculator?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our calculator uses established numerological principles and provides confidence scores based on
                    multiple evidence sources. The accuracy depends on how much personal information you provide and how
                    strongly the patterns align.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Do I need to provide my real name?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your name is optional and only used for numerological calculations. We don't store any personal
                    information, and all calculations happen in your browser for privacy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">What if I don't resonate with my results?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Angel numbers are personal spiritual messages. If the results don't resonate, try focusing on
                    numbers you've been seeing repeatedly in your daily life, as these often carry the most relevant
                    guidance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="text-blue-600 hover:bg-blue-50 bg-transparent">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-gray-50 py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-gray-900">Angel Number Calculator</span>
                </div>
                <p className="text-sm text-gray-600">
                  Discover your personal angel numbers and their spiritual meanings through our free, evidence-based
                  calculator.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-900">Angel Numbers</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/angel-numbers/111" className="hover:text-blue-600">
                      111 Meaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/angel-numbers/222" className="hover:text-blue-600">
                      222 Meaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/angel-numbers/333" className="hover:text-blue-600">
                      333 Meaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/angel-numbers/444" className="hover:text-blue-600">
                      444 Meaning
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-900">Tools</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-blue-600">
                      Angel Number Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/angel-numbers" className="hover:text-blue-600">
                      All Angel Numbers
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="hover:text-blue-600">
                      How It Works
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-900">Learn</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/how-it-works" className="hover:text-blue-600">
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link href="/angel-numbers" className="hover:text-blue-600">
                      Angel Number Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
              <p>&copy; 2024 Angel Number Calculator. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
