import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-400 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="font-bold text-white">Angel Number Finder</span>
            </div>
            <p className="text-sm leading-relaxed">
              The most comprehensive angel number database on the internet. Decode your divine messages and align with your highest purpose.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Popular Numbers</h4>
            <ul className="space-y-2 text-sm">
              {["111", "222", "333", "444", "555", "777", "888", "999", "1111"].map((num) => (
                <li key={num}><Link href={`/angel-numbers/${num}`} className="hover:text-blue-400 transition-colors">Angel {num} Meaning</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Free Calculator</Link></li>
              <li><Link href="/angel-numbers" className="hover:text-blue-400 transition-colors">All Meanings</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Terms</Link></li>
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Angel Number Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
