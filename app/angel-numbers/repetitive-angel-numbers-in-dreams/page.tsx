import React from 'react';
import Head from 'next/head';

export default function RepetitiveDreamsPage() {
  const faqSchema = {
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
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <Head>
        <title>Understanding Repetitive Angel Numbers in Dreams | Spiritual Guide</title>
        <meta name="description" content="Explore the subconscious symbolism, angel number frequencies, and spiritual grounding behind seeing angel numbers in dreams." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <h1 className="text-4xl font-bold">Understanding Repetitive Angel Numbers in Dreams</h1>

      <img src="/images/dream-symbolism.jpg" alt="Dream interpretation chart for angel number repetitive signals" className="rounded-lg shadow-md" />

      <section>
        <p>Seeing angel numbers in dreams is a profound spiritual occurrence that bridges the gap between your subconscious mind and the divine realm. When these patterns appear repeatedly while you sleep, they are not mere coincidences; they are invitations to pay attention to your waking life's trajectory.</p>
        
        <h2 className="text-2xl font-semibold">The Symbolism of Repetition</h2>
        <p>Repetition is the language of the universe. In dream state, your barriers are lowered, allowing the frequency of angel numbers to penetrate your psyche. Whether you see 111, 222, or 333, each carries a specific vibration meant to guide your path...</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Interpreting the Frequency</h2>
        <p>Deep dive into frequencies... (Expanding content to meet 1500+ word requirement with deep spiritual context)...</p>
        <img src="/images/spiritual-grounding.jpg" alt="Spiritual grounding techniques for dream interpretation" className="rounded-lg shadow-md" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold">FAQ: Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Why do I keep seeing angel numbers in my dreams?</h3>
            <p>Seeing angel numbers in dreams is your subconscious mind aligning with higher frequencies, signaling that you are open to spiritual guidance.</p>
          </div>
          <div>
            <h3 className="font-bold">What are repetitive angel numbers?</h3>
            <p>Repetitive angel numbers are sequences (like 111, 222) that appear repeatedly as divine messages or synchronization points.</p>
          </div>
        </div>
      </section>
      
      <img src="/images/angel-number-dream.jpg" alt="Angel number sequence glowing in dream space" className="rounded-lg shadow-md" />
    </main>
  );
}
