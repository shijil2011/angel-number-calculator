import Link from "next/link"
import { Sparkles, ChevronDown, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { angelNumbersList } from "@/lib/angel-number-data"

const popularNumbers = [
  { num: "111", label: "111 – New Beginnings" },
  { num: "222", label: "222 – Balance & Trust" },
  { num: "333", label: "333 – Creativity & Growth" },
  { num: "444", label: "444 – Protection & Stability" },
  { num: "555", label: "555 – Major Changes" },
  { num: "777", label: "777 – Spiritual Awakening" },
  { num: "888", label: "888 – Abundance & Wealth" },
  { num: "1111", label: "1111 – Gateway to Higher Consciousness" },
]

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Angel Number Finder</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5">
            <Link href="/#calculator" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">Calculator</Link>
            <div className="relative group">
              <button className="text-sm hover:text-blue-600 transition-colors font-medium flex items-center gap-1 text-gray-700">
                Angel Numbers <ChevronDown className="h-3 w-3" />
              </button>
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
            <Link href="/#how-it-works" className="text-sm hover:text-blue-600 transition-colors font-medium text-gray-700">How It Works</Link>
          </nav>
          <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 hidden md:flex">
            <Link href="/#calculator">Calculate Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
