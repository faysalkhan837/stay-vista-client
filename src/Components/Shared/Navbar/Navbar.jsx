// import { Link } from 'react-router-dom';
import Container from '../Container';
// import logoImg from '../../../assets/images/logo.png';
import MenuDropdown from './MenuDropdown';
import Logo from '../Logo';


const Navbar = () => {
  return (
    <div className="fixed bg-white w-full z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Logo></Logo>
            {/* Dropdown menu */}
            <MenuDropdown></MenuDropdown>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;