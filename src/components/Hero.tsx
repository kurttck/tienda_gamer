import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import {productos, Producto} from "../assets/data";
import axios from "axios";
import { useEffect, useState } from "react";




const Hero: React.FC = () => {

   //Agregar a Favoritos 
  const handleAddToFavorite = (id: string) => {
    console.log(` ${id}`);

    //variable
    let productsInFavorite: Producto[] = [];

    //Verificar si existe o no
      //si no existe lo crea
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", JSON.stringify([]));
    } 
    //Si existe trae el local a favoriteproducts  y luego lo convierte para guardarlo a productsinfavorite
    else{
      const favoriteProducts = localStorage.getItem("favorite");
      if (favoriteProducts) {
        productsInFavorite = JSON.parse(favoriteProducts) as Producto[];
      }
    }
    
    const one = productsInFavorite.find((each)=>each.id === parseInt(id,10));
    const productfavorite = productos.find((each)=>each.id === parseInt(id,10));

    if(!one){
      if(productfavorite){
        productsInFavorite.push(productfavorite);
      }
    }else{
      productsInFavorite = productsInFavorite.filter(
        (each)=> each.id !== parseInt(id,10)
      )
    }

    localStorage.setItem("favorite", JSON.stringify(productsInFavorite));

  };


  
const [products, setProducts] = useState<Producto[]>([]);

useEffect(() => {

   const getdata = async () => {
    try {
      const {data} = await axios.get("/games.json");
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }


  } 



  /* axios.get("/games.json")
     .then((res) => setProducts(res.data))
     .catch((err) => console.log(err)); */
  getdata();


}, []);



  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center gap-[20px] ">
        {products.map((each) => (
          <ProductCard
            key={each.key}
            id={each.id}
            title={each.title}
            price={each.price}
            console={each.console}
            img={each.img}
            onAddtoFavorite={handleAddToFavorite}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};



export default Hero;
