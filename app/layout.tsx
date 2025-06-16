import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';
import ClientAnalytics from './components/clientAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Future Proptech Summit',
  description:
    'Join us in Dubai, October 2025 for the latest in Proptech and Fractional Ownership.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSM4BL87');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSM4BL87"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        <main className="pt-0">{children}</main>
        <Footer />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZL9QZ3DH16"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZL9QZ3DH16', { page_path: window.location.pathname });
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return; n=f.fbq=function(){
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              }; if(!f._fbq)f._fbq=n;
              n.push=n; n.loaded=!0; n.version='2.0'; n.queue=[];
              t=b.createElement(e); t.async=!0; t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1331073398331992');
            fbq('track', 'PageView');
          `}
        </Script>
         <ClientAnalytics />
      </body>
    </html>
  );
}
