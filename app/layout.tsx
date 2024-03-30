import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-54318939-1"
      />

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
        `}
      </Script>
      </head>
      <body className={ `${inter.className} antialiased` }>{children}</body>
    </html>
  );
}
