import { useState, useRef, useEffect } from "react";
import { Producto, CheckoutProps} from "../assets/data";
import { useParams } from "react-router-dom";
import axios from "axios";





//LOCAL STORAGE
let productsInStore: Producto[] = [];

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
} else {
  const storedProducts = localStorage.getItem("cart");
  if (storedProducts) {
    productsInStore = JSON.parse(storedProducts) as Producto[];
  }
}





const Checkout: React.FC<CheckoutProps> = ({ product }) => {



  //ESTADOS
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);

  const unit = useRef<HTMLInputElement>(null);
    

  //GUARDAR DATOS DE COMPRA EN EL LOCAL STORAGE
  const manageCart = () => {

    const one = productsInStore.find((each)=>each.id === product?.id);
    console.log("Esto es el producto: "+product);
    if (!one) {
        product.unit=quantity; 
        productsInStore.push(product);
        setButton(true);
      } else {
        productsInStore = productsInStore.filter(
          (each) => each.id !== product?.id
        );
        setQuantity(1);
        setButton(false);
      }
      localStorage.setItem("cart", JSON.stringify(productsInStore));

  };

  //PARA CONTROLAR EL BOTON Y LA CANTIDAD EN CASO ESTE EN EL LOCALSTORAGE
  useEffect(()=>{
    let productsOnCart:Producto[] = [];

    if(localStorage.getItem("cart")){
        productsOnCart = JSON.parse(localStorage.getItem("cart")||'null');
    }else{
        localStorage.setItem("cart", JSON.stringify([]))
    }
    const one = productsOnCart.find((item)=>item.id === product.id);
    if(one){
        setQuantity(one.unit);
        setButton(true)
    }else{
        setQuantity(1);
        setButton(false);
    }
}, [product.id]);


const [game, setGame] = useState<Producto>({
  key: 0,
  id: 0,
  title: "",
  price: 0,
  console: [],
  format: [],
  img: "",
  unit: 0,
});


//tomar el id de la parte superior en el link
const { id } = useParams<{ id: string }>();
//convertir el dato obtenido a number
const numericID: number = Number(id);

/* const [onsale, setOnSale] = useState<Producto[]>([]); */

useEffect(() => {
  axios("/games.json")
     .then((res) => {
        const productsg: Array<Producto> = res.data;
        const detailProduct: Producto | undefined = productsg.find(
           (each) => each.id === numericID
        );
        detailProduct && setGame(detailProduct);
        /* const filterProducts: Array<Producto> = productsg.filter(
           (each) => each.unit
        );
        filterProducts.length > 0 && setOnSale(filterProducts); */
     })
     .catch((err) => console.log(err));
}, [numericID]);




  


  //LO QUE SE MUESTRA
  return (
    <>
      <div className="informacion">
        <h2>{game.title}</h2>
        <p>{game.id}</p>
        <p>Stock</p>
        <p id="subtotal">$ {(game.price * quantity).toLocaleString()}</p>
        {/* ---------------------------------------- */}
        <div>
          <input
            type="number"
            id="cant"
            min="1"
            value={quantity} 
            ref={unit}
            /* defaultValue={quantity} */
            onChange={() => unit.current && setQuantity(Number(unit.current.value)) }
          />
          <button
            type="button"
            className={`p-2 rounded ml-2 text-white ${button ? 'bg-black' : 'bg-red-500'}`}
            onClick={manageCart}
          >
            {button ? "Eliminar de Carro" : "Agregar al Carro"}
          </button>
        </div>
        {/* ----------------------------------------- */}
      </div>
    </>
  );
};

export default Checkout;
