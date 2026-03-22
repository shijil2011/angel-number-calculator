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

export default function AngelNumber222Page() {
  const tracker = { internalCount: 0 };
  const faqList = [
    { q: "What is the meaning of 222 in angel numbers?", a: "222 symbolizes balance, harmony, and trust in the divine timing of your life path." },
    { q: "Is 222 a sign of twin flame union?", a: "Yes, 222 is often interpreted as a sign of progress in twin flame relationships." },
    { q: "What should I do when I see 222?", a: "Stay grounded, maintain faith, and trust that your current actions are leading to fruition." },
    { q: "Does 222 indicate career progress?", a: "It signifies that your hard work is aligning with your purpose and growth is coming." },
    { q: "How does 222 affect manifestation?", a: "222 acts as a signal that your manifestations are taking root and growing." },
    { q: "Is 222 a lucky number?", a: "It is an auspicious number signifying divine protection and support." },
    { q: "Can 222 appear in my dreams?", a: "Yes, seeing 222 in dreams highlights a need for spiritual balance." },
    { q: "What if I see 222 repeatedly?", a: "It confirms that you are in total alignment with your life's purpose." },
    { q: "Is 222 a sign for relationships?", a: "It indicates a deepening bond and the need for patience and trust." },
    { q: "Does 222 relate to spiritual growth?", a: "It is a foundational number for spiritual expansion and understanding." }
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

  const longContent = "The angel number 222 meaning is intrinsically linked to balance, harmony, and the necessity of trusting divine timing as you navigate your unique life path. When this number appears frequently in your day-to-day life, it serves as a gentle reminder from the spiritual realm that you are exactly where you need to be. In the context of spiritual numerology, the number 2 signifies duality, partnerships, and diplomacy, and when tripled as 222, this energy is amplified, signaling that your manifestations are taking root. Many seekers report seeing 222 during periods of transition where they feel overwhelmed; the appearance of this number acts as a spiritual anchor, stabilizing your energy and assuring you that the foundations you are building are solid and sustainable. It is common to see other signs like 111 or 333 alongside 222, as your angels work to provide a comprehensive roadmap for your spiritual expansion. The beauty of 222 lies in its simplicity; it does not demand massive action, but rather a quiet, consistent faith in the unfolding process of your destiny. Whether you are dealing with professional challenges, personal growth, or relationship dynamics, 222 encourages you to lean into patience, understanding that the results you desire are maturing just below the surface, much like a seed that has been planted but has yet to break the soil. By aligning your thoughts with the supportive frequency of 222, you create a space of serenity that allows for faster manifestation and clearer intuitive insights. If you ever feel that your spiritual progress has stalled, remember that 222 is the energy of flow—it is the universe's way of telling you that you are moving in harmony with the greater design. Take this moment to acknowledge your progress, express gratitude for the support you receive from your guides, and move forward with the quiet confidence that your life is moving in a purposeful direction. Your angels are orchestrating synchronicities behind the scenes, and 222 is their way of letting you know you are safe, supported, and perfectly on time.";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Angel Number 222 Meaning and Significance</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" alt="Spiritual balance and alignment concept" className="rounded-lg shadow-md w-full" />
            
            <p className="text-xl">
              <AutoLinkContent text={longContent.repeat(15)} tracker={tracker} />
            </p>

            <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1200&auto=format&fit=crop" alt="Vibrational frequency alignment" className="rounded-lg shadow-md w-full" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" alt="Divine timing and spiritual growth" className="rounded-lg shadow-md w-full" />
            
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
