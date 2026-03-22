import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { angelNumbersList } from "@/lib/angel-number-data"

// Auto-link helper
function AutoLinkContent({ text, tracker }: { text: string; tracker: { internalCount: number } }) {
  const parts = text.split(/(\b\d{3,4}\b)/gi);
  return (
    <>
      {parts.map((part, i) => {
        if (angelNumbersList.includes(part) && tracker.internalCount < 5) {
          tracker.internalCount++;
          return <Link key={i} href={`/angel-numbers/${part}`} className="text-blue-600 hover:underline font-semibold">{part}</Link>;
        }
        return part;
      })}
    </>
  );
}

export default function TwinFlamePage() {
  const tracker = { internalCount: 0 };
  const faqList = [
    { q: "What is the Twin Flame meaning of 1111?", a: "Seeing 1111 is a powerful sign of Twin Flame alignment, often indicating that you are entering a phase of deep spiritual union or reunion." },
    { q: "Does 1111 mean separation is over?", a: "While not a guarantee of immediate physical union, 1111 often acts as a portal for reunion." },
    { q: "Why is 1111 significant for twin flames?", a: "It represents synchronized soul frequencies. Mirror numbers reflect your shared journey." },
    { q: "How to interpret 1111 when I feel stuck?", a: "Focus on your current thoughts when you see it; it reflects your inner vibration." },
    { q: "Are twin flames always romantic?", a: "Twin flames are soul-based connections centered on growth, not always romantic." },
    { q: "What does 1111 do to my energy?", a: "It amplifies your manifestation ability and helps clear energetic blockages." },
    { q: "Can I manifest union with 1111?", a: "Yes, 1111 is the ultimate manifestation number." },
    { q: "How long until union after 1111 appears?", a: "Timing depends on your individual soul growth." },
    { q: "Should I contact my twin flame when I see 1111?", a: "Follow your intuition—the universe will guide your action." },
    { q: "Is 1111 dangerous?", a: "No, it is a protective, guiding number for your journey." }
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
        <Header />
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Twin Flame Meaning of Angel Number 1111</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <p className="text-xl font-medium">The twin flame meaning of angel number 1111 acts as a powerful gateway for soul alignment, signaling that your energy and your counterpart's energy are synchronizing toward a higher destiny.</p>
            
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Twin flame soul union conceptual visualization" className="rounded-lg shadow-md w-full" />
            
            <h2 className="text-3xl font-bold text-gray-900">Understanding the 1111 Portal</h2>
            <p>When you encounter this sequence, it is not merely a random event; it is a profound synchronicity signaling that your soul's journey is converging with that of your counterpart. In the realm of twin flames, 1111 acts as a portal or gateway, accelerating the growth and lessons needed to reach union. For many, 1111 is the hallmark of the Twin Flame Awakening—a moment where the veil between two souls becomes thin, allowing for a deep exchange of spiritual energy.</p>
            
            <h2 className="text-3xl font-bold text-gray-900">Key Features of the 1111 Connection</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Synchronicity:</strong> You and your twin flame may experience simultaneous thoughts or life events.</li>
                <li><strong>Mirroring:</strong> Your twin flame reflects your own internal growth areas back to you.</li>
                <li><strong>Rapid Growth:</strong> The connection is designed to accelerate soul maturation.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900">Why the Separation Phase Exists</h2>
            <p>If you are currently feeling the weight of the separation phase, the appearance of 1111 is an invitation to shift your perspective from loss to growth. The journey of 1111 is rarely a straight line; you will experience highs of spiritual ecstasy and lows of intense shadow work. This is normal. The appearance of 1111 in moments of doubt is the ultimate reminder that you are on the right path.</p>

            <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1200&auto=format&fit=crop" alt="Vibrational frequency alignment for twin flame union" className="rounded-lg shadow-md w-full" />

            <h2 className="text-3xl font-bold text-gray-900">Actionable Steps for Manifesting Reunion</h2>
            <p>Manifesting union with your twin flame requires more than just wishing for it; it demands that you become the person you are intended to be in that union. When 1111 flashes before you, treat it as a cosmic nudge. Practice grounding exercises—meditation, nature walks, or even simple deep-breathing—to stabilize your energy.</p>
            
            <ul className="list-decimal pl-6 space-y-2">
                <li><strong>Focus on Wholeness:</strong> Stop chasing your twin flame; instead, focus on your own spiritual evolution.</li>
                <li><strong>Maintain a Dream Journal:</strong> Capture repetitive numbers seen during sleep, much like the patterns we see in <AutoLinkContent text="222" tracker={tracker} />.</li>
                <li><strong>Grounding Practices:</strong> When root chakra is grounded, you become a magnetic pole for your twin's energy.</li>
            </ul>

            <p>Remember that the journey of 1111 is rarely a straight line. You will experience highs of spiritual ecstasy and lows of intense shadow work. Trust the timing of the universe, and know that every repetitive sign is a layer of protection and confirmation that your twin flame connection is authentic, essential, and guided by forces much larger than yourself, often supported by the stability of <AutoLinkContent text="444" tracker={tracker} />.</p>
            
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" alt="1111 portal visualization for twin flame journey" className="rounded-lg shadow-md w-full" />
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
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
        <Footer />
      </div>
    </>
  );
}
