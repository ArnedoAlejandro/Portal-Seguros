
import Companias from "../components/Compania";
import Presentacion from "../components/Presentacion";
import SegurosGrid from "../components/SegurosGrid";
import SliderHome from "../components/SliderHome";
// import SegurosGrid from "../components/SegurosGrid";


export default function HeaderHero() {

  return (
    <>   
    <SliderHome/>
    <Presentacion/>
    <Companias/>
    <SegurosGrid/>
    </>
  );
}
