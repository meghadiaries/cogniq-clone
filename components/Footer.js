import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const links = [
    { title: 'Company', items: ['About Us', 'Careers', 'Blogs'] },
    { title: 'AI Solutions', items: ['Custom AI Agents', 'Voice AI', 'Support AI'] },
    { title: 'Products', items: ['JobMail AI', 'PostGenius AI'] }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">Cogniq AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[300px]">
              Building intelligent AI apps that transform how you interact with technology.
            </p>
          </div>

          {links.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                {col.items.map(l => <li key={l}><Link href="#" className="hover:text-white">{l}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-widest gap-4">
          <p>© 2026 Cogniq AI. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
