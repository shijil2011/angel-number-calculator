import { AngelNumberCalculator } from "@/components/angel-number-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Calculator, Heart, Star, Zap, Shield, ChevronDown, Moon, Sun, Eye, BookOpen } from "lucide-react"
import Link from "next/link"
import { homepageFAQSchema, createBreadcrumbSchema } from "@/lib/schema"
import { angelNumbersList } from "@/lib/angel-number-data"

// Popular numbers for the dropdown menu
const popularNumbers = [
  { num: "111", label: "111 – New Beginnings" },
  { num: "222", label: "222 – Balance & Trust" },
  { num: "333", label: "333 – Creativity & Growth" },
  { num: "444", label: "444 – Protection & Stability" },
  { num: "555", label: "555 – Major Changes" },
  { num: "666", label: "666 – Harmony & Responsibility" },
  { num: "777", label: "777 – Spiritual Awakening" },
  { num: "888", label: "888 – Abundance & Wealth" },
  { num: "999", label: "999 – Completion & Wisdom" },
  { num: "1010", label: "1010 – Soul Purpose" },
  { num: "1111", label: "1111 – Gateway to Higher Consciousness" },
  { num: "1212", label: "1212 – New Opportunities" },
]

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
              <Link href="/" className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Angel Number Finder</span>
              </Link>
              <nav className="hidden md:flex items-center gap-5">
                <Link href="#calculator" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">
                  Calculator
                </Link>
                <div className="relative group">
                  <button className="text-sm hover:text-blue-600 transition-colors font-medium flex items-center gap-1 text-gray-700">
                    Angel Numbers
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  {/* Dropdown with popular numbers */}
                  <div className="absolute top-full left-0 mt-1 bg-white border rounded-xl shadow-xl py-3 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="px-4 py-2 border-b mb-2">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Popular Numbers</span>
                    </div>
                    {popularNumbers.map((item) => (
                      <Link key={item.num} href={`/angel-numbers/${item.num}`} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                        <span className="font-semibold text-blue-600">{item.num}</span>
                        <span className="text-gray-500">— {item.label.split('–')[1]?.trim()}</span>
                      </Link>
                    ))}
                    <div className="border-t mt-2 pt-2 px-4">
                      <Link href="/angel-numbers" className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                        <BookOpen className="h-3 w-3" />
                        View All {angelNumbersList.length}+ Meanings
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="#meanings" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">
                  Popular Meanings
                </Link>
                <Link href="#how-it-works" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">
                  How It Works
                </Link>
                <Link href="#faq" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">
                  FAQ
                </Link>
              </nav>
              <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 hidden md:flex">
                <Link href="#calculator">Calculate Now</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Trusted by 50,000+ spiritual seekers worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-gray-900 leading-tight">
              Free Angel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Number Calculator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
              Use our <strong>free angel number calculator</strong> to discover what messages your guardian angels are sending you. 
              Enter your birthdate and get <strong>personalized interpretations</strong> for love, career, and spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all">
                <Link href="#calculator">Calculate My Angel Numbers — It's Free</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-xl transition-all"
              >
                <Link href="/angel-numbers">Browse All Meanings</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-600" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-600" />
                <span>Expert-Curated Meanings</span>
              </div>
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-blue-600" />
                <span>366+ Angel Numbers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3 text-gray-900">Your Personal Angel Number Reading</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Enter your details below to discover which angel numbers are appearing in your life and what they mean for you.</p>
            </div>
            <AngelNumberCalculator />
          </div>
        </section>

        {/* What Are Angel Numbers */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Eye className="h-3 w-3" />
                  Spiritual Insight
                </div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">What Are Angel Numbers?</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Angel numbers are <strong>repetitive number sequences</strong> that appear in your daily life — on clocks, receipts, license plates, and phone numbers. These aren't coincidences. They're <strong>direct messages from your guardian angels</strong>, designed to guide you toward your highest purpose.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  When you keep seeing a specific number pattern, your angels are trying to capture your attention. Each number carries a unique vibrational frequency and spiritual meaning, from <Link href="/angel-numbers/111" className="text-blue-600 hover:underline">111 for new beginnings</Link> to <Link href="/angel-numbers/777" className="text-blue-600 hover:underline">777 for spiritual awakening</Link>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/angel-numbers">Explore All Numbers</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-gray-300">
                    <Link href="#how-it-works">How It Works</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "111", color: "bg-blue-500", label: "Manifestation" },
                  { num: "222", color: "bg-green-500", label: "Balance" },
                  { num: "333", color: "bg-purple-500", label: "Growth" },
                  { num: "444", color: "bg-orange-500", label: "Protection" },
                  { num: "555", color: "bg-red-500", label: "Change" },
                  { num: "777", color: "bg-indigo-500", label: "Awakening" },
                ].map((item) => (
                  <Link key={item.num} href={`/angel-numbers/${item.num}`}>
                    <Card className="hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer border-0 shadow-md bg-white">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3`}>
                          {item.num}
                        </div>
                        <p className="text-sm font-medium text-gray-600">{item.label}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Calculator */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Use Our Angel Number Calculator?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Unlike generic calculators, ours is built by spiritual practitioners and numerologists to give you accurate, personalized guidance.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Calculator className="h-8 w-8 text-blue-600" />,
                  title: "Personalized to Your Birthdate",
                  desc: "Our algorithm analyzes your unique birthdate patterns, life path number, and name numerology to find the angel numbers most relevant to your spiritual journey."
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                  title: "Deep, Actionable Meanings",
                  desc: "Every reading includes spiritual significance, love & relationship guidance, career advice, practical actions, manifestation tips, and powerful affirmations you can use immediately."
                },
                {
                  icon: <Shield className="h-8 w-8 text-green-600" />,
                  title: "Complete Privacy",
                  desc: "No signup required. No data stored. All calculations happen instantly in your browser. Your spiritual journey remains completely private and secure."
                },
                {
                  icon: <Zap className="h-8 w-8 text-orange-500" />,
                  title: "366+ Angel Numbers",
                  desc: "The largest curated database of angel number meanings. From common sequences like 111 and 444 to rare patterns like 1010 and 1234 — we cover them all."
                },
                {
                  icon: <Star className="h-8 w-8 text-pink-600" />,
                  title: "SEO-Optimized for Discovery",
                  desc: "Every meaning page is optimized for search engines so you can share your readings easily. Our pages rank #1 for angel number keywords worldwide."
                },
                {
                  icon: <Heart className="h-8 w-8 text-red-500" />,
                  title: "Updated Regularly",
                  desc: "As we receive feedback and discover new patterns, we update our meanings. Join our community of spiritual seekers and stay aligned with your path."
                },
              ].map((item, idx) => (
                <Card key={idx} className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-3">{item.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Angel Numbers */}
        <section id="meanings" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Most Searched Angel Number Meanings</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover what your guardian angels are trying to tell you with our most popular angel number interpretations.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "111", meaning: "New beginnings and manifestation power. Your thoughts are creating reality faster than ever.", color: "from-blue-500 to-blue-600", link: "/angel-numbers/111" },
                { num: "222", meaning: "Balance, trust, and divine timing. Everything is unfolding perfectly.", color: "from-green-500 to-green-600", link: "/angel-numbers/222" },
                { num: "333", meaning: "Creativity, joy, and ascended master guidance are surrounding you.", color: "from-purple-500 to-purple-600", link: "/angel-numbers/333" },
                { num: "444", meaning: "Stability, protection, and hard work are building your solid foundation.", color: "from-orange-500 to-orange-600", link: "/angel-numbers/444" },
                { num: "555", meaning: "Major life changes, freedom, and exciting new adventures ahead.", color: "from-red-500 to-red-600", link: "/angel-numbers/555" },
                { num: "666", meaning: "Harmony, love, and balance in family, home, and responsibilities.", color: "from-pink-500 to-pink-600", link: "/angel-numbers/666" },
                { num: "777", meaning: "Spiritual awakening, inner wisdom, and divine protection active.", color: "from-indigo-500 to-indigo-600", link: "/angel-numbers/777" },
                { num: "888", meaning: "Abundance, prosperity, and financial mastery are flowing to you.", color: "from-amber-500 to-amber-600", link: "/angel-numbers/888" },
                { num: "999", meaning: "Completion of a cycle, humanitarianism, and serving your soul's mission.", color: "from-teal-500 to-teal-600", link: "/angel-numbers/999" },
                { num: "1010", meaning: "Soul purpose activation and spiritual awakening at a higher level.", color: "from-cyan-500 to-cyan-600", link: "/angel-numbers/1010" },
                { num: "1111", meaning: "Gateway to higher consciousness. A powerful portal for manifestation.", color: "from-violet-500 to-violet-600", link: "/angel-numbers/1111" },
                { num: "1212", meaning: "New opportunities, positive change, and aligning with your life purpose.", color: "from-emerald-500 to-emerald-600", link: "/angel-numbers/1212" },
              ].map((item) => (
                <Link key={item.num} href={item.link}>
                  <Card className="hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border-0 shadow-md bg-white overflow-hidden h-full">
                    <div className={`h-1.5 bg-gradient-to-r ${item.color}`} />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                          {item.num}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">Angel {item.num}</h3>
                          <p className="text-xs text-gray-500">Angel Number</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.meaning}</p>
                      <span className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                        Read full meaning →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" variant="outline" asChild className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 rounded-xl">
                <Link href="/angel-numbers">View All {angelNumbersList.length}+ Angel Numbers</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sun className="h-3 w-3" />
                Simple Process
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">How the Angel Number Calculator Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our calculator uses numerological principles to analyze your birthdate and reveal the angel numbers most significant to your spiritual journey.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  step: "1",
                  title: "Enter Your Birthdate",
                  desc: "Type in your full birthdate. Our algorithm extracts all number patterns, sequences, and significant dates.",
                  icon: <Calculator className="h-6 w-6" />
                },
                {
                  step: "2",
                  title: "We Calculate & Match",
                  desc: "Using Pythagorean numerology, we cross-reference your patterns against 366+ angel number meanings to find your top matches.",
                  icon: <Moon className="h-6 w-6" />
                },
                {
                  step: "3",
                  title: "Get Your Personalized Reading",
                  desc: "Receive detailed interpretations with spiritual guidance, love advice, career insights, and practical actions you can take today.",
                  icon: <Star className="h-6 w-6" />
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg shadow-blue-600/25">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Numerology Sources We Use</h3>
                  <ul className="space-y-3">
                    {[
                      "Pythagorean numerology system",
                      "Chaldean name number analysis",
                      "Life path number calculation",
                      "Birthdate pattern recognition",
                      "Repeating sequence detection",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                          <Zap className="h-3 w-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">What Each Reading Includes</h3>
                  <ul className="space-y-3">
                    {[
                      "Complete spiritual significance",
                      "Love & relationship guidance",
                      "Career & financial advice",
                      "8 practical daily actions",
                      "8 powerful affirmations",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                          <Star className="h-3 w-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about angel numbers and our calculator.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What does it mean when you keep seeing the same number everywhere?",
                  a: "When you repeatedly see a specific number — like 11:11 on clocks, or 333 on receipts — it's your angels trying to get your attention. Each angel number carries a unique message. The more frequently you see a number, the more urgently your angels want you to understand and act on its guidance. Our calculator helps you decode exactly what these divine messages mean for your life."
                },
                {
                  q: "How accurate is the Angel Number Calculator?",
                  a: "Our calculator is built on established numerological principles and is regularly reviewed by spiritual practitioners. It analyzes multiple patterns in your birthdate — including life path numbers, repeating sequences, and date patterns — to identify your most relevant angel numbers. We also provide a confidence score for each result, so you know which numbers have the strongest spiritual connection for you personally."
                },
                {
                  q: "Do I need to provide my real name?",
                  a: "Your name is completely optional. If you choose to enter it, we use Chaldean numerology to calculate your name number, which can reveal additional angel number matches. All calculations happen instantly in your browser — we don't store any personal data."
                },
                {
                  q: "What's the difference between angel numbers and regular numbers?",
                  a: "Regular numbers appear randomly. Angel numbers appear in repetitive, meaningful sequences — and they show up at precisely the moment you need spiritual guidance. When you notice a number appearing multiple times in a short period, especially during important life decisions, that's your angels communicating with you."
                },
                {
                  q: "How many angel numbers can I have?",
                  a: "Everyone has multiple angel numbers that become relevant at different stages of life. Your core angel numbers are tied to your life path (from your birthdate), but you can receive new angel number messages throughout your life as you face different challenges and opportunities. Our calculator identifies all patterns in your birthdate to give you a comprehensive reading."
                },
                {
                  q: "Can I search for a specific angel number's meaning?",
                  a: "Absolutely! Type any number into our search or browse through our complete library of 366+ angel number meanings. Each page includes detailed interpretations for love, career, spiritual significance, practical actions, and powerful affirmations you can use immediately."
                },
              ].map((item, idx) => (
                <Card key={idx} className="bg-white border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 leading-relaxed">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Decode Your Angel Numbers?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of spiritual seekers who've discovered their guardian angels' messages. Your reading is ready instantly — completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-xl">
                <Link href="#calculator">Calculate My Angel Numbers</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                <Link href="/angel-numbers">Browse All Meanings</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-gray-900 text-gray-400 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                  <span className="font-bold text-white">Angel Number Finder</span>
                </div>
                <p className="text-sm leading-relaxed">
                  The most comprehensive angel number database on the internet. Decode your divine messages and align with your highest purpose.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Popular Numbers</h4>
                <ul className="space-y-2 text-sm">
                  {["111", "222", "333", "444", "555", "777", "888", "999", "1111"].map((num) => (
                    <li key={num}>
                      <Link href={`/angel-numbers/${num}`} className="hover:text-blue-400 transition-colors">
                        Angel {num} Meaning
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-blue-400 transition-colors">Free Calculator</Link></li>
                  <li><Link href="/angel-numbers" className="hover:text-blue-400 transition-colors">All Meanings ({angelNumbersList.length}+)</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
                  <li><Link href="#faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Top Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/angel-numbers/111" className="hover:text-blue-400 transition-colors">New Beginnings (111)</Link></li>
                  <li><Link href="/angel-numbers/222" className="hover:text-blue-400 transition-colors">Balance & Trust (222)</Link></li>
                  <li><Link href="/angel-numbers/777" className="hover:text-blue-400 transition-colors">Spiritual Awakening (777)</Link></li>
                  <li><Link href="/angel-numbers/1111" className="hover:text-blue-400 transition-colors">Higher Consciousness (1111)</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm">© 2024 Angel Number Finder. All rights reserved. Made with divine guidance.</p>
              <div className="flex gap-6 text-sm">
                <Link href="/angel-numbers" className="hover:text-blue-400 transition-colors">Privacy</Link>
                <Link href="/angel-numbers" className="hover:text-blue-400 transition-colors">Terms</Link>
                <Link href="/angel-numbers" className="hover:text-blue-400 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
