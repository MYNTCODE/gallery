import Navbar from "../components/NavBar";
import AboutMYNT from "./Information";
import Gallery from "./Gallery";
import Contacts from "./Contacts";
import { useRef } from "react";

const LandingPage = () => {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactsRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleGalleryClick = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactsClick = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="landingPage"></div>
      <Navbar
        handleAboutClick={handleAboutClick}
        handleGalleryClick={handleGalleryClick}
        handleContactsClick={handleContactsClick}
      />
      <div className="about-section" ref={aboutRef}>
        <AboutMYNT />
      </div>
      <div className="gallery-section" ref={galleryRef}>
        <Gallery />
      </div>
      <div className="contacts-section" ref={contactsRef}>
        <Contacts />
      </div>
    </>
  );
};
export default LandingPage;
