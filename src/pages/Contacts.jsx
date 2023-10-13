import "./CSS/Contacts.css";
import { useState } from "react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional client-side validation here

    // Log the form data
    console.log("Form Data:", formData);

    // Can send the form data to the server or perform other actions here
  };

  return (
    <>
      <div className="contacts-container">
        <div className="contacts-box">
          <h1 className="contacts" title="contacts">
            Contact
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ resize: "none" }}
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="info-box">
          <h1 className="info" title="info">
            Info
          </h1>
          <div className="icon-socials">
            <a
              href="https://www.youtube.com/@MYNTPASMR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/1144637676016898219/1161923937555451935/youtube.png?ex=653a10fe&is=65279bfe&hm=09f768d19a635d6b51aa764a631f2a3e26e8c7069937a5249195a5ee44544158&"
                alt="Youtube"
              />
            </a>
            <a
              href="https://www.instagram.com/mynt_p/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1136555243753177118/instagram_1.png"
                alt="Instagram"
              />
            </a>
            <a
              href="mailto:myntpwork@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.discordapp.com/attachments/895300373911314483/1136554718106239056/email.png"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
