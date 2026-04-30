import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#232326] pt-16 pb-10 border-t border-white/5 text-white">
      <div className="container px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Cogniq AI</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              A Cogniq Labs Division. Building intelligent AI apps that transform how you interact with technology.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">AI Solutions</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Custom AI Agents</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Voice AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer Support AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Products</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">JobMail AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">PostGenius AI</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-xs font-medium">
          <p>© 2026 Cogniq AI. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Terms of service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </footer>
  );
}
