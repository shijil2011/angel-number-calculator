import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function RepetitiveDreamsPage() {
  const faqList = [
    { q: "Why do I keep seeing angel numbers in my dreams?", a: "Seeing angel numbers in dreams is your subconscious mind aligning with higher frequencies, signaling that you are open to spiritual guidance." },
    { q: "What are repetitive angel numbers?", a: "Repetitive angel numbers are sequences (like 111, 222) that appear repeatedly as divine messages or synchronization points." },
    { q: "How can I interpret angel numbers in my dreams?", a: "Keep a dream journal and track the numbers you see. Identify the emotional context of the dream to understand the message." },
    { q: "Do these dreams have specific meanings?", a: "Yes, each number carries a unique vibrational frequency meant to offer guidance for your waking life." },
    { q: "Is seeing these numbers in dreams rare?", a: "It is a common sign of spiritual awakening, especially when you are transitioning through life phases." },
    { q: "How do I start a dream journal?", a: "Keep a notebook by your bed and write down every detail immediately upon waking, focusing on numbers and emotions." },
    { q: "Can I ignore angel numbers in my dreams?", a: "You can, but they tend to persist until you acknowledge the message being sent to you." },
    { q: "Does the number sequence mean the same thing in dreams as in waking life?", a: "Yes, the core vibrational meaning remains the same, but the dream context provides a deeper subconscious layer." },
    { q: "How to tell if it's an angel number or just a random number?", a: "If the number appears repeatedly or stands out with strong emotional intensity, it is likely an angel number." },
    { q: "Can angel numbers help me find my life purpose?", a: "Absolutely. Angel numbers act as navigational markers on your soul mission, helping you stay aligned with your true path." }
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
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Understanding Repetitive Angel Numbers in Dreams</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <p className="text-xl font-medium">Repetitive angel numbers in dreams often serve as a profound spiritual gateway, bridging the gap between your subconscious mind and the divine realm.</p>
            
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Dream interpretation chart for angel number repetitive signals" className="rounded-lg shadow-md w-full" />
            
            <p>When these numerical patterns appear repeatedly while you sleep, they are not mere coincidences; they are deliberate invitations to pay attention to your waking life trajectory. Repetition is the universal language of the divine, and in your dream state, your cognitive barriers are significantly lowered, allowing the specific vibrational frequencies of angel numbers to penetrate your psyche. Whether you see 111, 222, 333, or 444, each sequence acts as a unique data packet sent from the spiritual realm meant to guide your path forward.</p>

            <h2 className="text-3xl font-bold text-gray-900">The Power of Subconscious Reception</h2>
            <p>To interpret these repetitive symbols, we must treat the dream as an encrypted message. The human brain processes symbolic information faster than linguistic information, which is why your guardian angels use numbers—they are pure, non-linguistic data points that the subconscious processes instantly. By examining the context of the dream, you can decode these sequences effectively. When you wake up from a dream featuring repetitive numbers, pause. Record the emotion you felt. Was it anxiety? Peace? Excitement? The emotion acts as the key to the frequency. If you saw 111 during a time of career stress, the angel number is likely a sign of alignment—a push to follow your intuition in that professional endeavor. Over weeks, your dream journal will reveal a pattern of guidance that is uniquely tuned to your spiritual journey.</p>
            
            <h2 className="text-3xl font-bold text-gray-900">Expanding Your Spiritual Horizon</h2>
            <p>Deep spiritual growth often happens when we are least aware of it—during our sleep cycles. By focusing on repetitive angel numbers, you are actively participating in your own soul's development. This is a time of profound internal calibration, where your spirit guides help you resolve internal conflicts that manifest as obstacles during the day. The repetition of these numbers indicates that the message is urgent and essential for your current stage of life. As you become more observant of these dream-state numbers, you will notice that they begin to synchronize with events in your daily life, forming a seamless flow of divine wisdom. Trust this process, remain open to the lessons, and maintain your journal to capture the fleeting wisdom of your nightly encounters with the divine.</p>
            
            <h2 className="text-3xl font-bold text-gray-900">The Science of Subconscious Priming</h2>
            <p>Beyond the spiritual aspect, there is a fascinating element of "subconscious priming" involved. When you consciously focus on angel numbers throughout the day, you are essentially programming your Reticular Activating System (RAS). Your RAS is the part of your brain that filters information. By focusing on angel numbers, you instruct your brain to scan for these patterns even when you sleep. This isn't just "coincidence"—it's a deliberate exercise in focus. Your dream state becomes a laboratory where you process these numbers, attaching deeper personal meaning to them based on your daily experiences. This is why a dream journal is absolutely vital. Without writing these encounters down, the subconscious-to-conscious transfer of information often fades within minutes of waking up. By capturing the details, you solidify the connection and ensure the guidance from your angels is not lost to the fog of morning.</p>

            <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1200&auto=format&fit=crop" alt="Spiritual grounding techniques for dream interpretation" className="rounded-lg shadow-md w-full" />
            
            <h2 className="text-3xl font-bold text-gray-900">Grounding Techniques for Dream Recall</h2>
            <p>If you find that you see the numbers but struggle to remember the full dream context, try these grounding techniques before bed. First, commit to the intention of dream recall as you drift off; simply stating "I will remember my dreams" has a measurable impact on recall. Second, place a notebook or voice recorder by your bed so you can capture the information immediately without turning on bright lights that might jar you back into full wakefulness. Third, drink a glass of water, which helps with physiological grounding. Lastly, meditation before bed creates a state of "alpha waves," which is the bridge between waking consciousness and deep REM sleep—the sweet spot where these messages are transmitted most clearly. By combining these methods, you create a dedicated vessel for the wisdom your angels wish to share, ensuring that the repetitive signals you receive are interpreted with clarity and grace.</p>

            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" alt="Angel number sequence glowing in dream space" className="rounded-lg shadow-md w-full" />
            
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
