// app/layout.js
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export const metadata = {
  title: 'Digital Marketing Courses in Bangalore – Enroll at BlueTick Academy!',
  description:
    'BlueTick Academy offers Career oriented Digital Marketing Course in Bangalore. Enroll in basics to advanced Digital Marketing Training in Bangalore. BlueTick Academy is rated as the Top Digital Marketing Training Institute in Bangalore based on faculty experience and placement record.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P2CQPT98');`,
          }}
        />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BlueTick Academy",
              url: "https://bluetickacademy.com/",
              logo:
                "https://bluetickacademy.com/_next/static/media/logo.46adcaad.svg",
              alternateName: "BlueTick Academy",
              sameAs: [
                "https://www.facebook.com/people/BlueTick-Academy/61573772256421/",
                "https://www.instagram.com/bluetick.academy__/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+919606995525",
                  contactType: "customer service",
                  email: "info@bluetickacademy.com",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi", "kn"],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${sourceSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2CQPT98"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Analytics (gtag.js) */}
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

        {children}
      </body>
    </html>
  )
}
