
import Companias from "../components/Compania";
import ContactForm from "../components/ContactForm";
import Presentacion from "../components/Presentacion";
import SegurosGrid from "../components/SegurosGrid";
import SliderHome from "../components/SliderHome";
import Testimonials from "../components/Testimonial";



export default function HeaderHero() {

  return (
    <>   
    <SliderHome/>
    <Presentacion/>
    <Companias/>
    <SegurosGrid/>
    <Testimonials/>
    <ContactForm/>
    </>
  );
}
