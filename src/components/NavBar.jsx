function Navbar(handleAboutClick, handleGalleryClick, handleContactsClick) {
  return (
    <>
      <nav className="navbar">
        <ul className="prompt">
          <li onClick={handleAboutClick} title="about mint">
            MYNT
          </li>
          <li onClick={handleGalleryClick} title="gallery">
            YouTube
          </li>
          <li onClick={handleContactsClick} title="contacts">
            Contacts
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
