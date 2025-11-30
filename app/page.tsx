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
