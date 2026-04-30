import Link from 'next/link';
import { Cpu } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandingCol}>
          <Link href="/" className={styles.footerLogo}>
            <Cpu className="w-8 h-8 text-white" />
            <span className={styles.logoText}>Cogniq AI</span>
          </Link>
          <p className={styles.brandPitch}>
            A Cogniq Labs Division. Building intelligent AI apps that transform how you interact with technology.
          </p>
          <div className={styles.socialRow}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.socialIcon} />
            ))}
          </div>
        </div>

        <div>
          <h4 className={styles.linkColTitle}>Company</h4>
          <ul className={styles.linksStack}>
            <li><Link href="#" className={styles.footerLink}>About Us</Link></li>
            <li><Link href="#" className={styles.footerLink}>Careers</Link></li>
            <li><Link href="#" className={styles.footerLink}>Blogs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.linkColTitle}>AI Solutions</h4>
          <ul className={styles.linksStack}>
            <li><Link href="#" className={styles.footerLink}>Custom AI Agents</Link></li>
            <li><Link href="#" className={styles.footerLink}>Voice AI</Link></li>
            <li><Link href="#" className={styles.footerLink}>Customer Support AI</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.linkColTitle}>Products</h4>
          <ul className={styles.linksStack}>
            <li><Link href="#" className={styles.footerLink}>All Products</Link></li>
            <li><Link href="#" className={styles.footerLink}>JobMail AI</Link></li>
            <li><Link href="#" className={styles.footerLink}>PostGenius AI</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.legalBar}>
        <p className={styles.copyright}>© 2026 Cogniq AI. All Rights Reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="#" className={styles.legalLink}>Terms of service</Link>
          <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
