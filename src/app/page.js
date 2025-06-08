import Header from '@/components/header';
import Home from '@/app/(default)/home/page';
import Footer from '@/components/footer';
import Script from 'next/script';

export default function App() {
  return (
    <>
    {/* Google tag (gtag.js) */}
    <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4VEZHPBX22"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4VEZHPBX22');
          `,
        }}
      />

    <Home/>
    </>
  )
}