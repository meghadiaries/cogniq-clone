import './globals.css';

export const metadata = {
  title: 'Cogniq AI | Custom AI Solutions & Engineering Partner for Growth',
  description: 'Transform your business with custom AI solutions. We build intelligent customer service, automated scheduling, and operational systems that deliver measurable ROI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
