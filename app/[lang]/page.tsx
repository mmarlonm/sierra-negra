import Script from 'next/script';
import Hero from '@/components/Hero';
import Places from '@/components/Places';
import Routes from '@/components/Routes';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import Suggestions from '@/components/Suggestions';
import Footer from '@/components/Footer';
import { getDictionary } from '../dictionaries';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');

  return (
    <main className="min-h-screen">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JEHW7GE4HQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JEHW7GE4HQ');
        `}
      </Script>
      <Hero dict={dict.hero} />
      <Places dict={dict.places} />
      <Routes dict={dict.routes} />
      <Gallery dict={dict.gallery} />
      <VideoSection dict={dict.video} />
      <Suggestions dict={dict.suggestions} />
      <Footer dict={dict.footer} />
    </main>
  );
}
