import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                <Cpu className="w-6 h-6 text-[#5850ec]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#3730a3]">Cogniq AI</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-8 text-lg leading-relaxed">
              A Cogniq Labs Division. Building intelligent AI apps that transform how you interact with technology.
            </p>
            <div className="flex gap-5">
              {/* Social icons simulation */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 bg-[#f9fafb] border border-gray-100 rounded-full hover:bg-[#eef2ff] hover:border-[#5850ec]/20 transition-all cursor-pointer flex items-center justify-center" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-8 text-lg">Company</h4>
            <ul className="flex flex-col gap-5 text-gray-500 font-medium">
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-8 text-lg">AI Solutions</h4>
            <ul className="flex flex-col gap-5 text-gray-500 font-medium">
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">Custom AI Agents</Link></li>
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">Voice AI</Link></li>
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">Customer Support AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-8 text-lg">Products</h4>
            <ul className="flex flex-col gap-5 text-gray-500 font-medium">
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">JobMail AI</Link></li>
              <li><Link href="#" className="hover:text-[#5850ec] transition-colors">PostGenius AI</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 text-gray-400 text-sm font-medium">
          <p>© 2026 Cogniq AI. All Rights Reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <Link href="#" className="hover:text-[#5850ec] transition-colors">Terms of service</Link>
            <Link href="#" className="hover:text-[#5850ec] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 2rem;
        }
      `}</style>
    </footer>
  );
}
