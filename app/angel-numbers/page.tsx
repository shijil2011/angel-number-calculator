import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Angel Number Meanings | Complete Guide to Angel Numbers",
  description:
    "Discover the meanings of all angel numbers. Complete guide to understanding angel number messages, spiritual significance, and practical guidance.",
  keywords: [
    "angel number meanings",
    "angel numbers guide",
    "numerology meanings",
    "spiritual numbers",
    "angel number dictionary",
  ],
}

const angelNumbers = [
  {
    number: "111",
    title: "New Beginnings & Manifestation",
    description:
      "A powerful sign of new beginnings and manifestation power. Your thoughts are rapidly becoming reality.",
    color: "bg-blue-500",
    category: "Manifestation",
  },
  {
    number: "222",
    title: "Balance & Divine Timing",
    description: "Trust in divine timing and seek balance in all areas of your life. Cooperation and harmony are key.",
    color: "bg-green-500",
    category: "Balance",
  },
  {
    number: "333",
    title: "Creativity & Growth",
    description: "Express your creativity and embrace spiritual growth. The ascended masters are supporting you.",
    color: "bg-purple-500",
    category: "Creativity",
  },
  {
    number: "444",
    title: "Stability & Protection",
    description: "Build strong foundations and trust in divine protection. Your hard work will pay off.",
    color: "bg-orange-500",
    category: "Stability",
  },
  {
    number: "555",
    title: "Change & Freedom",
    description: "Major life changes are coming. Embrace transformation and personal freedom.",
    color: "bg-red-500",
    category: "Change",
  },
  {
    number: "666",
    title: "Balance & Nurturing",
    description: "Focus on nurturing yourself and others. Seek balance between material and spiritual worlds.",
    color: "bg-pink-500",
    category: "Nurturing",
  },
  {
    number: "777",
    title: "Spiritual Awakening",
    description: "You're on the right spiritual path. Trust your intuition and inner wisdom.",
    color: "bg-indigo-500",
    category: "Spiritual",
  },
  {
    number: "888",
    title: "Abundance & Success",
    description: "Financial abundance and material success are flowing into your life.",
    color: "bg-yellow-500",
    category: "Abundance",
  },
  {
    number: "999",
    title: "Completion & Service",
    description: "A cycle is ending. Use your gifts to serve others and humanity.",
    color: "bg-teal-500",
    category: "Service",
  },
  {
    number: "1010",
    title: "New Cycle & Leadership",
    description: "A new spiritual cycle is beginning. Step into your leadership role.",
    color: "bg-cyan-500",
    category: "Leadership",
  },
  {
    number: "1111",
    title: "Spiritual Portal",
    description: "A powerful spiritual portal is open. Make a wish and trust in manifestation.",
    color: "bg-violet-500",
    category: "Portal",
  },
  {
    number: "1212",
    title: "Spiritual Growth",
    description: "You're experiencing rapid spiritual growth and positive changes.",
    color: "bg-rose-500",
    category: "Growth",
  },
  {
    number: "1234",
    title: "Progressive Steps",
    description: "Take things step by step. You're making steady progress toward your goals.",
    color: "bg-emerald-500",
    category: "Progress",
  },
]

const categories = ["All", "Manifestation", "Balance", "Creativity", "Stability", "Change", "Spiritual", "Abundance"]

export default function AngelNumbersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Angel Number Finder</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm hover:text-primary transition-colors">
                Calculator
              </Link>
              <Link href="/angel-numbers" className="text-sm text-primary font-medium">
                Meanings
              </Link>
              <Link href="/how-it-works" className="text-sm hover:text-primary transition-colors">
                How It Works
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Angel Number Meanings</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Discover the spiritual significance and practical guidance behind every angel number. Each number carries
            unique messages from your angels and the universe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link href="/">
                <Search className="h-4 w-4 mr-2" />
                Find My Angel Numbers
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Angel Numbers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {angelNumbers.map((angelNumber) => (
            <Card key={angelNumber.number} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-12 h-12 rounded-full ${angelNumber.color} flex items-center justify-center text-white font-bold`}
                  >
                    {angelNumber.number}
                  </div>
                  <Badge variant="secondary">{angelNumber.category}</Badge>
                </div>
                <CardTitle className="text-xl">{angelNumber.title}</CardTitle>
                <CardDescription className="text-base">{angelNumber.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group" asChild>
                  <Link href={`/angel-numbers/${angelNumber.number}-meaning`}>
                    Read Full Meaning
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Are Angel Numbers Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Are Angel Numbers?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Angel numbers are sequences of numbers that carry divine guidance by referring to specific numerological
                meanings. They are believed to be messages from your guardian angels, spirit guides, or the universe
                itself, designed to offer insight, encouragement, and direction in your life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These numbers often appear repeatedly in your daily life - on clocks, receipts, license plates,
                addresses, or any other place where numbers naturally occur. When you notice these patterns, it's a sign
                that the spiritual realm is trying to communicate with you.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Divine Messages</h4>
                  <p className="text-sm text-muted-foreground">
                    Each number sequence carries specific spiritual guidance and meaning
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Search className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Personal Relevance</h4>
                  <p className="text-sm text-muted-foreground">
                    The numbers you see are specifically relevant to your current life situation
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <ArrowRight className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Actionable Guidance</h4>
                  <p className="text-sm text-muted-foreground">
                    Angel numbers provide practical steps and spiritual insights for your journey
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Interpret Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Interpret Angel Numbers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pay Attention to Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Notice when numbers appear repeatedly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Consider the context when you see them
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Trust your intuition about their meaning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Keep a journal of your sightings
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Apply the Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Reflect on the message's relevance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Take practical action based on the guidance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Use the numbers for meditation and manifestation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Share your experiences with others
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Discover Your Angel Numbers?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Use our personalized calculator to find the angel numbers most relevant to your life. Get detailed meanings,
            practical guidance, and manifestation tips based on your unique details.
          </p>
          <Button size="lg" asChild>
            <Link href="/">Calculate My Angel Numbers</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
