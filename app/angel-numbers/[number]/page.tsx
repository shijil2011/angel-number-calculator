import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Heart, Zap, Star, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

interface AngelNumberMeaning {
  number: string
  title: string
  shortMeaning: string
  expandedMeaning: string
  spiritualSignificance: string
  loveAndRelationships: string
  careerAndMoney: string
  practicalActions: string[]
  manifestationTips: string[]
  affirmations: string[]
  whenYouSee: string
  numerologyBreakdown: string
  relatedNumbers: string[]
  commonQuestions: Array<{ question: string; answer: string }>
}

const angelNumberMeanings: Record<string, AngelNumberMeaning> = {
  "111": {
    number: "111",
    title: "111 Angel Number Meaning — Manifestation & New Beginnings",
    shortMeaning: "New beginnings, manifestation power, and spiritual awakening",
    expandedMeaning: `Angel number 111 is one of the most powerful and significant numbers in numerology and spiritual practice. When this number appears repeatedly in your life, it's a clear sign that the universe is trying to communicate something important to you. The number 111 is often called a "wake-up call" from your angels and spirit guides, indicating that you're entering a period of rapid spiritual growth and manifestation.

The energy of 111 is all about new beginnings and fresh starts. If you've been feeling stuck or uncertain about your path, seeing 111 is a reassuring sign that change is coming. This number encourages you to step out of your comfort zone and embrace the opportunities that are presenting themselves to you. It's a reminder that you have the power to create your own reality through your thoughts, beliefs, and actions.

One of the most significant aspects of 111 is its connection to manifestation. When you see this number, your thoughts are particularly powerful and are manifesting into reality at an accelerated rate. This is why it's crucial to maintain positive thoughts and focus on what you want to create in your life, rather than what you fear or don't want. The universe is listening to your mental chatter and responding accordingly.

Angel number 111 also represents independence and leadership. Your angels are encouraging you to trust your instincts and take the initiative in your life. You don't need to wait for others to give you permission or approval – you have everything you need within yourself to succeed. This number often appears to natural leaders and pioneers who are meant to inspire and guide others.`,
    spiritualSignificance: `Spiritually, 111 represents a direct connection to the divine and your higher self. It's a sign that your spiritual awakening is accelerating and that you're becoming more aligned with your soul's purpose. This number often appears during times of spiritual initiation or when you're being called to step into a more spiritual role in your life. Your angels are reminding you that you're a spiritual being having a human experience, and they're encouraging you to embrace your spiritual gifts and abilities.`,
    loveAndRelationships: `In matters of love and relationships, 111 signifies new beginnings and fresh starts. If you're single, this number suggests that a significant relationship may be on the horizon. If you're in a relationship, 111 might indicate that you're entering a new phase together or that it's time to take your relationship to the next level. This number encourages authenticity and honest communication in all your relationships.`,
    careerAndMoney: `Regarding career and finances, 111 is an excellent sign for new ventures and opportunities. If you've been considering starting a business, changing careers, or pursuing a new project, this number is encouraging you to take action. Your angels are supporting your professional growth and reminding you that you have the skills and abilities needed to succeed. Trust your instincts when it comes to financial decisions and new opportunities.`,
    practicalActions: [
      "Monitor your thoughts carefully and focus on positive outcomes",
      "Set clear intentions for what you want to manifest",
      "Take action on new opportunities that present themselves",
      "Practice daily affirmations and visualization",
      "Trust your intuition and inner guidance",
      "Start that project or venture you've been considering",
      "Maintain a gratitude journal to stay positive",
      "Meditate regularly to strengthen your spiritual connection",
    ],
    manifestationTips: [
      "Use the 11:11 portal for powerful manifestation work",
      "Write down your goals and desires in present tense",
      "Visualize your dreams as already accomplished",
      "Practice the 3-6-9 manifestation method",
      "Create a vision board with your goals",
      "Use positive affirmations throughout the day",
      "Trust the timing of the universe",
      "Take inspired action toward your goals",
    ],
    affirmations: [
      "I am a powerful manifestor and creator of my reality",
      "New opportunities flow to me easily and effortlessly",
      "I trust my intuition and inner wisdom",
      "I am aligned with my highest purpose and potential",
      "Positive changes are happening in my life now",
      "I attract abundance and success in all areas of my life",
      "I am ready for new beginnings and fresh starts",
      "The universe supports my dreams and aspirations",
    ],
    whenYouSee: `When you see 111, take it as a sign to pay attention to your thoughts and feelings in that moment. What were you thinking about? What situation were you in? The universe might be confirming that you're on the right track or alerting you to an opportunity. Use this moment to set a positive intention or make a wish, as your manifestation power is particularly strong when you encounter this number.`,
    numerologyBreakdown: `In numerology, 111 is a master number that carries the energy of the number 1 amplified three times. The number 1 represents new beginnings, leadership, independence, and manifestation. When it appears in triplicate, these qualities are magnified exponentially. The sum of 1+1+1=3, which adds the energy of creativity, self-expression, and communication to this powerful combination.`,
    relatedNumbers: ["11", "1111", "222", "333"],
    commonQuestions: [
      {
        question: "What does it mean when I keep seeing 111?",
        answer:
          "Repeatedly seeing 111 is a sign that you're in a period of spiritual awakening and manifestation. Your angels are trying to get your attention and remind you of your power to create your reality through your thoughts and actions.",
      },
      {
        question: "Is 111 a good or bad sign?",
        answer:
          "111 is generally considered a very positive sign. It indicates new opportunities, spiritual growth, and the support of your angels. However, it also comes with the responsibility to maintain positive thoughts and take action on your goals.",
      },
      {
        question: "How should I respond when I see 111?",
        answer:
          "When you see 111, take a moment to check your thoughts and set a positive intention. This is an excellent time for manifestation work, meditation, or taking action on something you've been considering.",
      },
      {
        question: "What's the difference between 111 and 1111?",
        answer:
          'While both are powerful manifestation numbers, 1111 is considered even more potent and is often called a "portal" number. 111 focuses on new beginnings and manifestation, while 1111 represents a gateway to higher consciousness and spiritual awakening.',
      },
      {
        question: "Can 111 appear in different ways?",
        answer:
          "Yes! You might see 111 on clocks (1:11), receipts, license plates, addresses, or any other place where numbers appear. The key is the repetition and your awareness of the pattern.",
      },
    ],
  },
  "222": {
    number: "222",
    title: "222 Angel Number Meaning — Balance, Trust & Divine Timing",
    shortMeaning: "Balance, cooperation, trust in divine timing, and harmonious relationships",
    expandedMeaning: `Angel number 222 carries a profound message about balance, cooperation, and trusting in divine timing. When this number appears in your life, your angels are reminding you that everything is unfolding exactly as it should, even if you can't see the bigger picture yet. This number is a gentle nudge from the universe to have patience and faith in the process of life.

The energy of 222 is deeply connected to partnerships and relationships. It emphasizes the importance of cooperation, diplomacy, and finding harmony in all your interactions. Whether in personal relationships, business partnerships, or even your relationship with yourself, 222 encourages you to seek balance and mutual understanding. This number often appears when you need to work with others to achieve your goals or when you're being called to be more diplomatic in your approach to conflicts.

Balance is a central theme of 222. Your angels are encouraging you to examine all areas of your life and ensure that you're not neglecting any important aspects. This might mean balancing work and personal life, giving and receiving, speaking and listening, or any other areas where equilibrium is needed. The number 222 reminds you that sustainable success comes from maintaining harmony rather than pushing too hard in any one direction.

Trust is another key message of 222. When you see this number, your angels are asking you to trust in the timing of your life. Sometimes we want things to happen faster than they naturally unfold, but 222 reminds us that there's wisdom in divine timing. What you're working toward is coming to fruition, but it may require patience and continued faith in the process.`,
    spiritualSignificance: `Spiritually, 222 represents the importance of faith and trust in your spiritual journey. It's a reminder that you're not alone and that your angels and spirit guides are working behind the scenes to support you. This number often appears during times when you need to strengthen your faith or when you're being asked to trust in something you can't yet see or understand.`,
    loveAndRelationships: `In love and relationships, 222 is a beautiful sign of harmony and partnership. If you're in a relationship, this number suggests that you and your partner are working well together and supporting each other's growth. If you're single, 222 might indicate that a balanced, harmonious relationship is coming into your life. This number emphasizes the importance of give and take in all relationships.`,
    careerAndMoney: `Regarding career and finances, 222 suggests that collaboration and teamwork will be key to your success. This might be a time to seek partnerships, join forces with others, or focus on building harmonious relationships in your workplace. Financially, 222 encourages a balanced approach to money – neither being too restrictive nor too frivolous, but finding a healthy middle ground.`,
    practicalActions: [
      "Practice patience and trust in divine timing",
      "Seek balance in all areas of your life",
      "Focus on cooperation and collaboration",
      "Improve communication in your relationships",
      "Meditate on harmony and peace",
      "Look for win-win solutions in conflicts",
      "Strengthen your faith through spiritual practices",
      "Create more balance between work and personal time",
    ],
    manifestationTips: [
      "Visualize harmonious outcomes in all situations",
      "Practice gratitude for the relationships in your life",
      "Use meditation to find inner balance",
      "Trust that everything is working out for your highest good",
      "Focus on cooperation rather than competition",
      "Manifest through gentle, consistent action",
      "Align your goals with your values",
      "Practice patience with the manifestation process",
    ],
    affirmations: [
      "I trust in divine timing and know everything unfolds perfectly",
      "I create harmony and balance in all areas of my life",
      "I attract loving, supportive relationships",
      "I am patient and trust the process of life",
      "Cooperation and collaboration come naturally to me",
      "I find peaceful solutions to all challenges",
      "I am in perfect balance with myself and others",
      "Divine timing brings me exactly what I need when I need it",
    ],
    whenYouSee: `When you encounter 222, take it as a reminder to slow down and assess the balance in your life. Are you pushing too hard in one area while neglecting another? This is also an excellent time to practice patience and trust that things are working out behind the scenes, even if you can't see immediate results.`,
    numerologyBreakdown: `In numerology, 222 contains the energy of the number 2 amplified three times. The number 2 represents cooperation, balance, relationships, and sensitivity. When tripled, these qualities are enhanced, creating a powerful vibration of harmony and partnership. The sum 2+2+2=6 adds the energy of nurturing, responsibility, and service to others.`,
    relatedNumbers: ["22", "2222", "111", "333"],
    commonQuestions: [
      {
        question: "Why do I keep seeing 222 everywhere?",
        answer:
          "Seeing 222 repeatedly is a sign that you need to focus on balance and trust in your life. Your angels are reminding you to have patience and faith that everything is working out for your highest good.",
      },
      {
        question: "What should I do when I see 222?",
        answer:
          "When you see 222, take a moment to assess the balance in your life and practice patience. This is also a good time to focus on your relationships and seek harmony in any conflicts or challenges you're facing.",
      },
      {
        question: "Is 222 related to twin flames or soulmates?",
        answer:
          "Yes, 222 is often associated with soul connections and partnerships. It can indicate that a significant relationship is developing or that you need to focus on balance and harmony in your current relationships.",
      },
      {
        question: "What does 222 mean for my career?",
        answer:
          "In career matters, 222 suggests that collaboration and teamwork will be important for your success. It may also indicate that you need to find better balance between your work and personal life.",
      },
      {
        question: "How long will I keep seeing 222?",
        answer:
          "You'll typically see 222 until you've integrated its message into your life. Once you've found better balance and learned to trust in divine timing, the appearances may become less frequent.",
      },
    ],
  },
  "333": {
    number: "333",
    title: "333 Angel Number Meaning — Creativity, Growth & Spiritual Support",
    shortMeaning: "Creativity, self-expression, spiritual growth, and ascended master guidance",
    expandedMeaning: `Angel number 333 is a powerful and uplifting message from the spiritual realm, indicating that the ascended masters are near you, offering their guidance, support, and love. When you see 333, it's a sign that you're surrounded by divine energy and that your spiritual team is actively working to help you on your path. This number carries the vibration of creativity, self-expression, and spiritual growth, encouraging you to embrace your unique gifts and share them with the world.

The energy of 333 is deeply connected to creativity and artistic expression. If you've been feeling called to explore your creative side, whether through art, writing, music, or any other form of expression, 333 is a strong encouragement to pursue these interests. Your angels are reminding you that creativity is not just a hobby or pastime – it's a vital part of your spiritual expression and a way to connect with the divine energy that flows through you.

Communication is another key aspect of 333. This number often appears when you need to speak your truth, share your ideas, or express yourself more authentically. Your angels are encouraging you to find your voice and use it to inspire and uplift others. Whether through speaking, writing, teaching, or any other form of communication, 333 suggests that you have important messages to share with the world.

The number 333 also represents growth and expansion. You're being encouraged to step out of your comfort zone and embrace new experiences that will help you grow spiritually and personally. This might involve learning new skills, exploring different perspectives, or taking on challenges that will stretch your abilities and help you discover new aspects of yourself.

Joy and optimism are central themes of 333. Your angels want you to remember that life is meant to be enjoyed and that maintaining a positive outlook will attract more positive experiences into your life. Even during challenging times, 333 reminds you to look for the silver lining and trust that everything is working out for your highest good.`,
    spiritualSignificance: `Spiritually, 333 is a sign that you're experiencing rapid spiritual growth and that the ascended masters – enlightened beings who have walked the earth before – are supporting your journey. This number often appears during times of spiritual awakening or when you're being called to step into a more spiritual role in your life. Your connection to the divine is strengthening, and you're being encouraged to trust your spiritual gifts and abilities.`,
    loveAndRelationships: `In matters of love and relationships, 333 encourages authentic self-expression and joyful communication. If you're in a relationship, this number suggests that it's time to be more open and honest with your partner about your feelings, dreams, and desires. If you're single, 333 might indicate that expressing your true self will attract the right person into your life. This number emphasizes the importance of joy and playfulness in relationships.`,
    careerAndMoney: `Regarding career and finances, 333 is an excellent sign for creative endeavors and self-expression in your work. If you've been considering a career in the arts, communication, or any field that allows you to express your creativity, this number is encouraging you to pursue it. Financially, 333 suggests that following your passions and expressing your authentic self will lead to abundance and success.`,
    practicalActions: [
      "Explore and develop your creative talents",
      "Express yourself authentically in all situations",
      "Share your ideas and insights with others",
      "Practice joyful activities that uplift your spirit",
      "Trust your intuition and spiritual guidance",
      "Communicate openly and honestly in relationships",
      "Embrace new learning opportunities",
      "Surround yourself with positive, creative people",
    ],
    manifestationTips: [
      "Use creative visualization techniques",
      "Express gratitude through art or writing",
      "Manifest through joyful, inspired action",
      "Connect with your inner child and sense of play",
      "Use affirmations that celebrate your uniqueness",
      "Create vision boards or artistic representations of your goals",
      "Trust that the ascended masters are supporting your manifestations",
      "Focus on manifesting experiences that bring you joy",
    ],
    affirmations: [
      "I express my creativity freely and joyfully",
      "My unique gifts and talents are valued and appreciated",
      "I communicate my truth with confidence and clarity",
      "The ascended masters guide and support me always",
      "I attract joy and positivity into my life",
      "My creative expression inspires and uplifts others",
      "I trust my spiritual gifts and abilities",
      "I am growing and expanding in beautiful ways",
    ],
    whenYouSee: `When you see 333, take it as an invitation to express yourself creatively or communicate something important. This is also an excellent time to connect with your spiritual practice, whether through meditation, prayer, or creative expression. Pay attention to any creative ideas or inspirations that come to you around this time.`,
    numerologyBreakdown: `In numerology, 333 contains the energy of the number 3 amplified three times. The number 3 represents creativity, communication, self-expression, and joy. When tripled, these qualities are magnified, creating a powerful vibration of artistic expression and spiritual growth. The sum 3+3+3=9 adds the energy of completion, wisdom, and service to humanity.`,
    relatedNumbers: ["33", "3333", "222", "444"],
    commonQuestions: [
      {
        question: "What does 333 mean spiritually?",
        answer:
          "333 is a sign that the ascended masters are near you, offering guidance and support. It indicates spiritual growth, creative expression, and a strengthening connection to the divine.",
      },
      {
        question: "Is 333 a sign to pursue my creative dreams?",
        answer:
          "333 is a strong encouragement to explore and develop your creative talents. Your angels are supporting your artistic and creative endeavors.",
      },
      {
        question: "What should I do when I see 333?",
        answer:
          "When you see 333, take time to express yourself creatively, communicate authentically, or connect with your spiritual practice. This is also a good time to embrace joy and optimism.",
      },
      {
        question: "Does 333 mean I'm on the right path?",
        answer:
          "Yes, 333 is generally a confirmation that you're aligned with your spiritual path and that your growth is supported by the divine realm.",
      },
      {
        question: "Can 333 indicate pregnancy or new life?",
        answer:
          "While not specifically about pregnancy, 333 does represent creation and new beginnings. It could indicate the birth of new ideas, projects, or phases in your life.",
      },
    ],
  },
  "444": {
    number: "444",
    title: "444 Angel Number Meaning — Stability, Protection & Hard Work",
    shortMeaning: "Stability, hard work, angelic protection, and building strong foundations",
    expandedMeaning: `Angel number 444 is a powerful message of stability, protection, and the importance of building strong foundations in your life. When you see 444, your angels are letting you know that you are completely surrounded by love, guidance, and protection. This number serves as a reminder that you are not alone in your journey and that the angelic realm is actively supporting your efforts and endeavors.

The energy of 444 is deeply grounded and practical. It represents the importance of hard work, dedication, and persistence in achieving your goals. Your angels are encouraging you to continue putting in consistent effort toward your dreams, even if progress seems slow or if you're facing challenges. The number 444 is a reassurance that your hard work will pay off and that you're building something lasting and meaningful.

Foundation-building is a central theme of 444. This number often appears when you're in the process of creating stability in your life, whether that's in your career, relationships, finances, or personal development. Your angels are supporting your efforts to create a solid base from which you can grow and expand. This might involve developing new skills, strengthening relationships, improving your health, or establishing better habits and routines.

The number 444 also represents organization, planning, and systematic approaches to achieving your goals. Your angels are encouraging you to be methodical and practical in your approach to life. This is not a time for impulsive decisions or quick fixes, but rather for careful planning and steady progress. The energy of 444 supports long-term thinking and sustainable growth.

Protection is another significant aspect of 444. When you see this number, your angels want you to know that you are safe and protected. If you've been feeling anxious or worried about your security – whether physical, emotional, or financial – 444 is a reassuring sign that you are being watched over and guided. Trust that you have the strength and support needed to overcome any challenges you may face.`,
    spiritualSignificance: `Spiritually, 444 represents a strong connection to the angelic realm and divine protection. It's a sign that your prayers have been heard and that spiritual support is available to you. This number often appears during times when you need extra encouragement or when you're working on developing your spiritual foundation through practices like meditation, prayer, or study.`,
    loveAndRelationships: `In love and relationships, 444 emphasizes the importance of building strong, stable foundations. If you're in a relationship, this number suggests focusing on trust, commitment, and creating security together. If you're single, 444 might indicate that you're in a phase of preparing yourself for a stable, long-term relationship by working on your own foundation and personal growth.`,
    careerAndMoney: `Regarding career and finances, 444 is an excellent sign for steady progress and building long-term security. This number encourages a practical, methodical approach to your professional and financial goals. It's a time to focus on developing skills, building your reputation, and creating stable income streams rather than looking for quick wins or shortcuts.`,
    practicalActions: [
      "Focus on building strong foundations in all areas of life",
      "Maintain consistent effort toward your goals",
      "Organize and plan your approach to challenges",
      "Develop practical skills and abilities",
      "Create stable routines and healthy habits",
      "Trust in divine protection and guidance",
      "Be patient with slow but steady progress",
      "Strengthen your support systems and relationships",
    ],
    manifestationTips: [
      "Create detailed, practical plans for your goals",
      "Visualize stable, secure outcomes",
      "Use grounding exercises to connect with earth energy",
      "Manifest through consistent, methodical action",
      "Focus on building rather than acquiring",
      "Trust in the timing of steady progress",
      "Practice gratitude for the stability you already have",
      "Align your manifestations with practical reality",
    ],
    affirmations: [
      "I am building strong foundations for my future success",
      "I am protected and supported by divine love",
      "My hard work and dedication are paying off",
      "I create stability and security in all areas of my life",
      "I trust in the process of steady, sustainable growth",
      "I am organized, focused, and methodical in my approach",
      "Divine protection surrounds me always",
      "I have the strength and persistence to achieve my goals",
    ],
    whenYouSee: `When you encounter 444, take it as encouragement to continue your steady efforts and trust in the process. This is also a good time to assess the foundations in your life and strengthen any areas that need attention. Remember that you are protected and supported, even during challenging times.`,
    numerologyBreakdown: `In numerology, 444 contains the energy of the number 4 amplified three times. The number 4 represents stability, hard work, organization, and building foundations. When tripled, these qualities are magnified, creating a powerful vibration of security and systematic progress. The sum 4+4+4=12, which reduces to 3 (1+2=3), adding elements of creativity and self-expression to the practical energy of 4.`,
    relatedNumbers: ["44", "4444", "333", "555"],
    commonQuestions: [
      {
        question: "What does 444 mean when I keep seeing it?",
        answer:
          "Repeatedly seeing 444 is a sign that your angels are near and that you're building strong foundations in your life. It's encouragement to continue your hard work and trust in divine protection.",
      },
      {
        question: "Is 444 a sign of protection?",
        answer:
          "Yes, 444 is strongly associated with angelic protection and divine support. It's a reassuring sign that you are safe and watched over by your spiritual guides.",
      },
      {
        question: "What should I focus on when I see 444?",
        answer:
          "When you see 444, focus on building stability, maintaining consistent effort toward your goals, and trusting in the process of steady progress. This is also a time to strengthen your foundations.",
      },
      {
        question: "Does 444 mean my hard work will pay off?",
        answer:
          "444 is a strong indication that your dedication and hard work are recognized and will lead to success. Keep persisting with your efforts.",
      },
      {
        question: "Can 444 appear during difficult times?",
        answer:
          "Yes, 444 often appears during challenging periods as a reminder that you're protected and supported. It encourages you to stay strong and trust that you have the resources to overcome difficulties.",
      },
    ],
  },
}

interface PageProps {
  params: {
    number: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const meaning = angelNumberMeanings[params.number]

  if (!meaning) {
    return {
      title: "Angel Number Not Found",
      description: "The requested angel number meaning could not be found.",
    }
  }

  return {
    title: meaning.title,
    description: `Discover the spiritual meaning of angel number ${meaning.number}. ${meaning.shortMeaning}. Get detailed guidance, manifestation tips, and practical actions.`,
    keywords: [
      `angel number ${meaning.number}`,
      `${meaning.number} meaning`,
      `angel number ${meaning.number} meaning`,
      "angel numbers",
      "numerology",
      "spiritual guidance",
    ],
    openGraph: {
      title: meaning.title,
      description: meaning.shortMeaning,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(angelNumberMeanings).map((number) => ({
    number,
  }))
}

export default function AngelNumberMeaningPage({ params }: PageProps) {
  const meaning = angelNumberMeanings[params.number]

  if (!meaning) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meaning.title,
    description: meaning.shortMeaning,
    author: {
      "@type": "Organization",
      name: "Angel Number Finder",
    },
    publisher: {
      "@type": "Organization",
      name: "Angel Number Finder",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://angelnumberfinder.com/angel-numbers/${meaning.number}-meaning`,
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: meaning.commonQuestions.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Angel Number Finder</span>
              </Link>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Calculator
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/angel-numbers" className="hover:text-primary">
              Angel Numbers
            </Link>
            <span className="mx-2">/</span>
            <span>{meaning.number} Meaning</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-primary-foreground rounded-full text-3xl font-bold mb-6">
              {meaning.number}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Angel Number {meaning.number}</h1>
            <p className="text-xl text-muted-foreground mb-6 text-balance">{meaning.shortMeaning}</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Spiritual Guidance</Badge>
              <Badge variant="secondary">Manifestation</Badge>
              <Badge variant="secondary">Angel Messages</Badge>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <Link href="#meaning" className="hover:text-primary">
                  • Complete Meaning
                </Link>
                <Link href="#spiritual" className="hover:text-primary">
                  • Spiritual Significance
                </Link>
                <Link href="#love" className="hover:text-primary">
                  • Love & Relationships
                </Link>
                <Link href="#career" className="hover:text-primary">
                  • Career & Money
                </Link>
                <Link href="#actions" className="hover:text-primary">
                  • Practical Actions
                </Link>
                <Link href="#manifestation" className="hover:text-primary">
                  • Manifestation Tips
                </Link>
                <Link href="#numerology" className="hover:text-primary">
                  • Numerology Breakdown
                </Link>
                <Link href="#faq" className="hover:text-primary">
                  • Common Questions
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Complete Meaning */}
            <section id="meaning">
              <h2 className="text-3xl font-bold mb-6">Complete Meaning of Angel Number {meaning.number}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                {meaning.expandedMeaning.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <Separator />

            {/* Spiritual Significance */}
            <section id="spiritual">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Spiritual Significance
              </h2>
              <p className="text-muted-foreground leading-relaxed">{meaning.spiritualSignificance}</p>
            </section>

            <Separator />

            {/* Love & Relationships */}
            <section id="love">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Love & Relationships
              </h2>
              <p className="text-muted-foreground leading-relaxed">{meaning.loveAndRelationships}</p>
            </section>

            <Separator />

            {/* Career & Money */}
            <section id="career">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Career & Money
              </h2>
              <p className="text-muted-foreground leading-relaxed">{meaning.careerAndMoney}</p>
            </section>

            <Separator />

            {/* Practical Actions & Manifestation */}
            <div className="grid md:grid-cols-2 gap-8">
              <section id="actions">
                <h2 className="text-2xl font-bold mb-4">Practical Actions</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {meaning.practicalActions.map((action, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section id="manifestation">
                <h2 className="text-2xl font-bold mb-4">Manifestation Tips</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {meaning.manifestationTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            <Separator />

            {/* Affirmations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Positive Affirmations for {meaning.number}</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {meaning.affirmations.map((affirmation, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground italic">"{affirmation}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* When You See This Number */}
            <section>
              <h2 className="text-2xl font-bold mb-4">When You See {meaning.number}</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">{meaning.whenYouSee}</p>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* Numerology Breakdown */}
            <section id="numerology">
              <h2 className="text-2xl font-bold mb-4">Numerology Breakdown</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">{meaning.numerologyBreakdown}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Related Numbers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {meaning.relatedNumbers.map((num) => (
                        <Badge key={num} variant="outline" asChild>
                          <Link href={`/angel-numbers/${num}-meaning`}>{num}</Link>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {meaning.commonQuestions.map((qa, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{qa.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{qa.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-12 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Discover Your Personal Angel Numbers</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to find out which angel numbers are most significant for you? Use our calculator to discover your
                personal angel numbers based on your birthdate and other details.
              </p>
              <Button size="lg" asChild>
                <Link href="/">Calculate My Angel Numbers</Link>
              </Button>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
