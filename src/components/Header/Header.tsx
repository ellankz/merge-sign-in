import logo from '../../assets/images/logo_merge_development.svg';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="invisible">Marge Development</h1>
      <a href="/">
        <img src={logo} alt="Merge Development" />
      </a>
    </div>
  );
}

export default Header;