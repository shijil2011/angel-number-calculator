import { Sparkles, Star, BookOpen } from "lucide-react"
import Link from "next/link"

export default function TwinFlamePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Twin Flame meaning of angel number 1111?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seeing 1111 is a powerful sign of Twin Flame alignment, often indicating that you are entering a phase of deep spiritual union or reunion."
        }
      },
      {
        "@type": "Question",
        "name": "How does 1111 affect my Twin Flame journey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1111 acts as a 'portal' or 'gateway,' accelerating the growth and lessons needed to reach union with your Twin Flame."
        }
      },
      {
        "@type": "Question",
        "name": "Is 1111 a good sign for relationships?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 1111 is considered the most significant number for manifestation and alignment, making it an extremely positive sign for relationship growth."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Header (Inherited) */}
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Twin Flame Meaning of Angel Number 1111</h1>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8">
            <img src="/images/twin-flame-1111.jpg" alt="Twin Flame spiritual union and 1111 connection" className="rounded-lg shadow-md w-full" />
            
            <section>
              <h2 className="text-3xl font-bold text-foreground">The Gateway of Union</h2>
              <p>When you see 1111 on your journey toward your Twin Flame, you are witnessing the opening of a divine portal. This number is not just a digit; it is a synchronization signal from the universe that your spiritual paths are converging. For many, 1111 is the hallmark of the "Twin Flame Awakening," a moment where the veil between two souls becomes thin.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6">Alignment and Manifestation</h3>
              <p>Twin Flames share a single soul frequency, and 1111 represents the master frequency. When you and your Twin Flame both encounter 1111, it is a cosmic "ping," letting both parties know that the universe is actively working to bring you into alignment.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground">FAQ: Twin Flame Connections</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground">What is the Twin Flame meaning of angel number 1111?</h3>
                  <p>Seeing 1111 is a powerful sign of Twin Flame alignment, often indicating that you are entering a phase of deep spiritual union or reunion.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">How does 1111 affect my Twin Flame journey?</h3>
                  <p>1111 acts as a 'portal' or 'gateway,' accelerating the growth and lessons needed to reach union with your Twin Flame.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Is 1111 a good sign for relationships?</h3>
                  <p>Yes, 1111 is considered the most significant number for manifestation and alignment, making it an extremely positive sign for relationship growth.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer (Inherited) */}
        <footer className="border-t mt-12 py-8 bg-background">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Angel Number Finder. All rights reserved.</p>
            </div>
        </footer>
      </div>
    </>
  );
}
