import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star } from "lucide-react"
import Link from "next/link"

export default function RepetitiveDreamsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I keep seeing angel numbers in my dreams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seeing angel numbers in dreams is your subconscious mind aligning with higher frequencies, signaling that you are open to spiritual guidance."
        }
      },
      {
        "@type": "Question",
        "name": "What are repetitive angel numbers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repetitive angel numbers are sequences (like 111, 222) that appear repeatedly as divine messages or synchronization points."
        }
      },
      {
        "@type": "Question",
        "name": "How can I interpret angel numbers in my dreams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keep a dream journal and track the numbers you see. Identify the emotional context of the dream to understand the message."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Understanding Repetitive Angel Numbers in Dreams</h1>
            
            <Card className="my-8 bg-primary/5 border-primary/20 text-left">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                    <Star className="h-5 w-5" /> Key Takeaways
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                    <p>• Dreams provide a lowered-barrier state for divine communication.</p>
                    <p>• Repetitive numbers in sleep are not accidental; they are precise signals.</p>
                    <p>• Tracking patterns in a dream journal is essential for decryption.</p>
                </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-8">
            <img src="/images/dream-symbolism.jpg" alt="Dream interpretation chart for angel number repetitive signals" className="rounded-lg shadow-md w-full" />
            
            <section>
              <h2 className="text-3xl font-bold text-foreground">The Gateway: Dream-State Synchronicity</h2>
              <p>Seeing angel numbers in dreams is one of the most profound spiritual occurrences you can experience. It bridges the gap between your subconscious mind and the divine realm. When these patterns appear repeatedly while you sleep, they are not mere coincidences; they are deliberate invitations to pay attention to your waking life's trajectory.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-6">Why Repetition Matters</h3>
              <p>Repetition is the universal language of the divine. In your dream state, your cognitive barriers are lowered, allowing the specific vibrational frequencies of angel numbers to penetrate your psyche. Whether you see 111, 222, 333, or 444, each sequence acts as a unique data packet sent from the spiritual realm.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground">Deciphering the Frequency</h2>
              <p>To interpret these repetitive symbols, we must treat the dream as an encrypted message. The human brain processes symbolic information faster than linguistic information, which is why your guardian angels use numbers—they are pure, non-linguistic data points that the subconscious processes instantly. By examining the context of the dream, you can decode these sequences.</p>
              
              <img src="/images/spiritual-grounding.jpg" alt="Spiritual grounding techniques for dream interpretation" className="rounded-lg shadow-md w-full" />
              
              <p className="mt-6">When you wake up from a dream featuring repetitive numbers, pause. Record the emotion you felt. Was it anxiety? Peace? Excitement? The emotion acts as the key to the frequency. If you saw 111 during a time of career stress, the angel number is likely a sign of alignment—a push to follow your intuition in that professional endeavor. Over weeks, your dream journal will reveal a pattern of guidance that is uniquely tuned to your spiritual journey.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground">FAQ: Common Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground">Why do I keep seeing angel numbers in my dreams?</h3>
                  <p>Seeing angel numbers in dreams is your subconscious mind aligning with higher frequencies, signaling that you are open to spiritual guidance.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">What are repetitive angel numbers?</h3>
                  <p>Repetitive angel numbers are sequences (like 111, 222) that appear repeatedly as divine messages or synchronization points.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">How can I interpret angel numbers in my dreams?</h3>
                  <p>Keep a dream journal and track the numbers you see. Identify the emotional context of the dream to understand the message.</p>
                </div>
              </div>
            </section>
            
            <img src="/images/angel-number-dream.jpg" alt="Angel number sequence glowing in dream space" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
