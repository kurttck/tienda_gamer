
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OnSaleCard from "../components/OnSaleCard";
import {productos} from "../assets/data"

const OnSale: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center">
      <div className="flex  w-2/4 gap-5 flex-wrap justify-between">
        {productos.map((each)=>(
          <OnSaleCard 
          product={each}
          />
        ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OnSale;
