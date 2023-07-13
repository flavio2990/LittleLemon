import NavBar from "../Fragments/NavBar";
import Header from '../Fragments/Header';
import Footer from "../Fragments/Footer";
import SpecialsCarousel from "../Fragments/SpecialsCarousel";
import TestimonialCarousel from "../Fragments/Testimonials/TestimonialCarousel";
import Chicago from "../Fragments/Chicago/Chicago";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <SpecialsCarousel/>
      <TestimonialCarousel/>
      <Chicago/>
      <Footer/>
    </div>
  );
}