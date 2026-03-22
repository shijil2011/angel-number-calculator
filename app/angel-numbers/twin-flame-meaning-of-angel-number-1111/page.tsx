import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star, Zap, Shield, ChevronDown, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { angelNumbersList } from "@/lib/angel-number-data"

export default function TwinFlamePage() {
  const faqList = [
    { q: "What is the Twin Flame meaning of 1111?", a: "Seeing 1111 is a powerful sign of Twin Flame alignment, often indicating that you are entering a phase of deep spiritual union or reunion." },
    { q: "How does 1111 affect my Twin Flame journey?", a: "1111 acts as a 'portal' or 'gateway,' accelerating the growth and lessons needed to reach union." },
    { q: "Is 1111 a good sign for relationships?", a: "Yes, it is the most significant number for manifestation and alignment, signaling positive relationship growth." },
    { q: "Does seeing 1111 mean separation is over?", a: "It often acts as a portal for reunion and indicates the end of a difficult cycle." },
    { q: "Why is 1111 significant for twin flames?", a: "It represents synchronized soul frequencies and heightened consciousness." },
    { q: "How to interpret 1111 when I feel stuck?", a: "Focus on your current thoughts and intentions; 1111 acts as a mirror for your manifestations." },
    { q: "Are twin flames always romantic?", a: "Twin flames are soul-based connections, not always romantic, but always deeply transformative." },
    { q: "What does 1111 do to my energy?", a: "It amplifies your manifestation ability and clears energetic blockages." },
    { q: "Can I manifest union with 1111?", a: "Yes, 1111 is the ultimate manifestation number—align your intentions with your twin." },
    { q: "Should I contact my twin flame when I see 1111?", a: "1111 encourages intuition. If your guidance feels clear, trust that inner nudge." }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header - Copied exactly from Home Page */}
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Angel Number Finder</span>
              </Link>
              <nav className="hidden md:flex items-center gap-5">
                <Link href="/#calculator" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">Calculator</Link>
                <Link href="/angel-numbers" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">Angel Numbers</Link>
                <Link href="/#faq" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">FAQ</Link>
              </nav>
              <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 hidden md:flex">
                <Link href="/#calculator">Calculate Now</Link>
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-center text-gray-900">Twin Flame Meaning of Angel Number 1111</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Twin flame soul union conceptual visualization" className="rounded-lg shadow-md w-full" />
            
            <p className="text-xl">1111 is the master code for twin flames, acting as a direct signal of alignment...</p>
            
            <p>(Detailed 1500+ word content covering: Spiritual Awakening, The Separation Phase, Healing Energy, The Synchronicity of 11:11, Manifesting Union, Soul Frequencies, Twin Flame Recognition, Karmic Lessons, The Role of Intuition, Moving Past Doubts, and Long-Term Integration of Twin Flame Energy...)</p>

            <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1200&auto=format&fit=crop" alt="Vibrational frequency alignment for twin flame union" className="rounded-lg shadow-md w-full" />
            
            <p>(...More content explaining the specific spiritual journey of twin flames and the role 1111 plays in daily manifestations...)</p>

            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" alt="1111 portal visualization for twin flame journey" className="rounded-lg shadow-md w-full" />

            <section>
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4 mt-6">
                  {faqList.map((item, i) => (
                      <div key={i} className="border-b pb-4">
                          <p className="font-bold text-gray-900">{item.q}</p>
                          <p>{item.a}</p>
                      </div>
                  ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer - Copied exactly from Home Page */}
        <footer className="border-t bg-gray-900 text-gray-400 py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-blue-400" />
                      <span className="font-bold text-white">Angel Number Finder</span>
                    </div>
                    <p className="text-sm">Comprehensive angel number database.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-white">Popular Numbers</h4>
                    <ul className="space-y-2 text-sm">
                      {["111", "222", "333"].map((num) => <li key={num}><Link href={`/angel-numbers/${num}`}>Angel {num}</Link></li>)}
                    </ul>
                  </div>
                </div>
                <div className="text-sm">© {new Date().getFullYear()} Angel Number Finder. All rights reserved.</div>
            </div>
        </footer>
      </div>
    </>
  );
}
