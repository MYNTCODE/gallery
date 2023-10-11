const Navbar = ({
  handleAboutClick,
  handleGalleryClick,
  handleContactsClick,
}) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li onClick={handleAboutClick} title="about mint">
          <a href="#about">MYNT</a>
        </li>
        <li onClick={handleGalleryClick} title="gallery">
          <a href="#gallery">Gallery</a>
        </li>
        <li onClick={handleContactsClick} title="contacts">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
