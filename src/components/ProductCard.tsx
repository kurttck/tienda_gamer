import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

interface productoProps {
  key: number;
  id: number;
  title: string;
  price: number;
  console: string[];
  img: string;
  onAddtoFavorite?: (id: string) => void;
}

/* -------------- STILOS TAILWIND ---------------- */
const icon: string = "text-white text-xl";

const ProductCard: React.FC<productoProps> = ({
  id,
  title,
  price,
  console,
  img,
  onAddtoFavorite,
}) => {
  return (
    <>
      <div className="w-2/4 flex justify-between p-3 rounded-[10px] bg-black bg-opacity-20">
        <div className="w-full">
          <Link to={"/details/" + id}>
            <img src={img} alt={title} className="w-[200px]" />
          </Link>
        </div>
        <div className="flex items-center justify-left w-full">
          <div>
            <h2 className="text-[23px] font-bold">{title}</h2>
            <p className="text-[14px]">{console.join(", ")}</p>
            <p>
              <span className="text-[18px] font-bold">${price}</span>
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-[30px]">
          <button>
            <FontAwesomeIcon icon={faCartShopping} className={icon} />
          </button>
          <button onClick={()=>onAddtoFavorite && onAddtoFavorite(id.toString())}>
            <FontAwesomeIcon icon={faHeart} className={icon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
