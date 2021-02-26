import './Footer.scss';

function Footer({ links }: {links: string[]}) {
  return (
    <div className="footer">
      <nav className="nav">
        <ul className="nav__list">
          {links.map((link: string, index: number) => (
            <li key={`${index}${link}`} className="nav__list__item">
              <a href={`/${link}`} title={link} className="nav__list__item__link">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Footer;