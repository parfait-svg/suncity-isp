import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyUse from "./components/WhyUse";
import Coverage from "./components/Coverage";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <WhyUse id="WhyUse"/>
        <CTA />
        <Features />
        <Plans />
        <Testimonials />
        <Contact />
        <Coverage />
      </main>
      <Footer />
    </>
  );
}

export default App;
