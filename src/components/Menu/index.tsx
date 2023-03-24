import { usePath } from '../../hooks/usePath';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { isCurrentPath } = usePath();
  const active = 'text-[#A0141C] font-semibold';
  const general = 'text-white font-normal';

  return (
    <div className="relative top-0 left-0 right-0 w-full">
      <nav className="flex bg-black justify-center p-5 gap-10">
        <Link
          to="/"
          className={`text-lg uppercase cursor-pointer hover:text-[#A0141C] ${
            isCurrentPath('/') ? active : general
          }`}
        >
          Inicio
        </Link>
        <Link
          to="/relatorio"
          className={`text-lg uppercase cursor-pointer hover:text-[#A0141C] ${
            isCurrentPath('/relatorio') ? active : general
          }`}
        >
          Relatorio
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
