import Script from 'next/script';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Places from '@/components/Places';
import Routes from '@/components/Routes';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import Suggestions from '@/components/Suggestions';
import Footer from '@/components/Footer';

export default function Home() {
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
      <Header />
      <Hero />
      <Places />
      <Routes />
      <Gallery />
      <VideoSection />
      <Suggestions />
      <Footer />
    </main>
  );
}
