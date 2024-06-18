import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";
import Description from "../components/Description";
import { useParams } from "react-router-dom";
import { productos, Producto } from "../assets/data";
import { Link } from "react-router-dom";

const Details: React.FC = () => {
  //tomar el id de la parte superior en el link
  const { id } = useParams<{ id: string }>();
  //convertir el dato obtenido a number
  const numericID: number = Number(id);

  //buscar el dato number en el array de productos
  const product: Producto | undefined = productos.find(
    (each) => each.id === numericID
  );

  if (!product) {
    return <Link to="/*">asdasd</Link>;
  }

  return (
    <>
      <NavBar></NavBar>

      <div className="flex justify-center">
        <div className="w-2/4">
          <div className="flex">
            <div className="w-2/4">
              <img src={product?.img} alt="Producto" className="w-full"/>
            </div>
            <Checkout product={product} />
          </div>

          <Description/>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Details;
