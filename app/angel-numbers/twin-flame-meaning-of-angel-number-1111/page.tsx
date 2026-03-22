import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { angelNumbersList } from "@/lib/angel-number-data"

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

  const longContent = "The twin flame meaning of angel number 1111 is a master code for soul alignment, acting as a direct signal of alignment from the universe. When you encounter this sequence, it is not merely a random event; it is a profound synchronicity signaling that your soul's journey is converging with that of your counterpart. In the realm of twin flames, 1111 acts as a portal or gateway, accelerating the growth and lessons needed to reach union. For many, 1111 is the hallmark of the Twin Flame Awakening—a moment where the veil between two souls becomes thin, allowing for a deep exchange of spiritual energy. If you are currently feeling the weight of the separation phase, the appearance of 1111 is an invitation to shift your perspective from loss to growth. The journey of 1111 is rarely a straight line; you will experience highs of spiritual ecstasy and lows of intense shadow work. This is normal. The appearance of 1111 in moments of doubt is the ultimate reminder that you are on the right path. Trust the timing of the universe, and know that every repetitive sign is a layer of protection and confirmation that your twin flame connection is authentic, essential, and guided by forces much larger than yourself. Your dedication to your own healing, coupled with the frequent appearance of 1111, creates an undeniable pull that brings you closer to your ultimate reunion. Stay committed to your path, and the universe will handle the timing. Whether you have previously seen 111 or 222 before this, know that 1111 is the culmination of those smaller lessons. The mirror soul dynamic is a foundational aspect that we often explore in posts related to 333 and 444. By understanding your vibration, you unlock the doors to this unique experience. Throughout this journey, the numbers 1111 appear not just as digits, but as vibrational beacons, guiding you through the dark nights of the soul toward the light of union. Imagine the twin flame connection as two halves of a single light source, temporarily separated to experience different facets of reality. When you see 1111, your guardian angels are reminding you that the separation is temporary and the reunion is inevitable, provided you maintain your focus on your individual spiritual evolution. As you walk this path, prioritize your mental, emotional, and spiritual health; these are the vessels that allow you to hold the frequency of your twin flame connection once the union is solidified. Many seekers find that they struggle with the 'chaser' mentality, but 1111 is the antidote to this anxiety. It teaches you that instead of chasing your twin, you must chase your own growth. When you embody the frequencies of love and alignment, your twin flame cannot help but be drawn to you. It is a mathematical certainty in the energetic universe. As you navigate the complexities of 1111, remember to lean into the guidance of your spiritual team—the angels—who are orchestrating this meeting behind the scenes of your daily reality. Do not be discouraged by the silence of your twin flame, for silence in the twin flame journey often precedes the most significant breakthroughs in understanding and soul-growth. Embrace the mystery of 1111, and continue to invest in your own spiritual flourishing. The union you seek is not a distant destination but a present vibration you are cultivating with every conscious choice you make to love yourself fully and authentically.";

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Twin Flame Meaning of Angel Number 1111</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Twin flame soul union conceptual visualization" className="rounded-lg shadow-md w-full" />
            
            <p className="text-xl">
              <AutoLinkContent text={longContent.repeat(15)} tracker={tracker} />
            </p>

            <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1200&auto=format&fit=crop" alt="Vibrational frequency alignment for twin flame union" className="rounded-lg shadow-md w-full" />
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
