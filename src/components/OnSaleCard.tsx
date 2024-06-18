import { CheckoutProps } from "../assets/data";

const OnSaleCard: React.FC<CheckoutProps> = ({ product }) => {
  return (
    <>
      <div className="border border-black rounded-[15px] overflow-hidden w-[250px]">
        <div className="py-[10px] px-[25px] h-[180px] w-full overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-t border-black h-[180px] p-5">
          <h2 className="none text-[19px] font-normal">{product.title}</h2>
          <p>
            <span className="text-[rgb(255,228,196)] text-[13px] font-bold">
              Desde
            </span>
            <span className="text-[rgb(255,228,196)] text-[13px] ml-2.5 line-through">         
              S/. {product.price}
            </span>
          </p>
          <p className="mt-[-5px] mb-[5px] text-[20px] font-bold">
            S/. {product.price * 0.75}
            <span className="ml-[6px] text-[14px] text-[rgb(0,128,0)]">15% OFF</span>
          </p>
          <p className="text-[14px] text-[rgb(0,128,0)]">¡Compra y paga en soles!</p>
        </div>
      </div>
    </>
  );
};

export default OnSaleCard;
