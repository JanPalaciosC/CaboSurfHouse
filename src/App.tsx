import Features from './components/features';
import Footer from './components/footer';
import GalleryPreview from './components/gallery_preview';
import Hero from './components/hero';
import Navbar from './components/navbar';
import ReviewsCards from './components/reviews_cards';
import ReviewsHeader from './components/reviews_header';
import ScheduleTour from './components/schedule_tour';
import TheHouse from './components/the_house';

function App() {
  return (
    // Core layout of the application, including Navbar, main content sections, and Footer
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <GalleryPreview />
        <TheHouse />
        <ScheduleTour />
        <ReviewsHeader />
        <ReviewsCards />
      </main>

      <Footer />
    </div>
  );
}

export default App;
