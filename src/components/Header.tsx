import fidel from '@assets/logo/fidel.png';
import fidelLogo from '@assets/logo/fidel-text.png';
import Search from './Search';
const links = ['Find Work', 'Hire Pro', 'Inspiration', 'Community', 'Market'];
const logos = [fidel, fidelLogo];
function Header() {
  return (
    <div className="navbar px-5 mb-10">
      <a>
        {logos.map((logo, index) => {
          return (
            <img
              src={logo}
              className="w-14 object-contain mx-auto"
              key={index}
            />
          );
        })}
      </a>
      <div className="flex-1 justify-center gap-10">
        {links.map((link, index) => {
          return (
            <a href="" key={index}>
              <p className="text-white">{link}</p>
            </a>
          );
        })}
      </div>
      <Search />
    </div>
  );
}

export default Header;
