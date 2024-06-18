
import { Link } from "react-router-dom";

interface NavButtonProps {
  titulo: string;
  link: string;
}

const NavButton: React.FC<NavButtonProps> = ({ titulo, link }) => {
  return (
    <>
      <button className="bg-transparent border border-white rounded-[10px] px-[10px] py-[4px]">
        <Link to={link}>{titulo}</Link>
      </button>
    </>
  );
};

export default NavButton;
