import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const links = [
    { title: 'Company', items: ['About Us', 'Careers', 'Blogs'] },
    { title: 'AI Solutions', items: ['Custom AI Agents', 'Voice AI', 'Support AI'] },
    { title: 'Products', items: ['JobMail AI', 'PostGenius AI'] }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brandingCol}>
          {/* Logo and Brand Title removed from here */}
          <p className={styles.brandPitch}>
            Building intelligent AI apps that transform how you interact with technology.
          </p>
        </div>

        {links.map((col) => (
          <div key={col.title}>
            <h4 className={styles.linkColTitle}>{col.title}</h4>
            <ul className={styles.linksStack}>
              {col.items.map(l => <li key={l}><Link href="#" className={styles.footerLink}>{l}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.legalBar}>
        <p className={styles.copyright}>© 2026. All Rights Reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="#" className={styles.legalLink}>Terms of service</Link>
          <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
