import "./App.css";
import Companies from "./Components/CompaniesSection/Companies";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroFooter from "./Components/HeroFooter/HeroFooter";
import HeroSection from "./Components/HeroSection/HeroSection";
import Prices from "./Components/Prices/Prices";
import Testimonals from "./Components/Testimonials/Testimonals";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
      <Prices />
      <Testimonals />
      <HeroFooter />
      <Footer />
    </div>
  );
}

export default App;
