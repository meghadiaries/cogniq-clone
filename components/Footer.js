import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0e] pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">C</div>
              <span className="text-xl font-bold tracking-tight">COGNIO AI</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              A Cogniq Labs Division. Building intelligent AI apps that transform how you interact with technology.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer" />
              <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">AI Solutions</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Custom AI Agents</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Voice AI</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Customer Support AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Products</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">JobMail AI</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">PostGenius AI</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-xs">
          <p>© 2026 Cogniq AI. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Terms of service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </footer>
  );
}
