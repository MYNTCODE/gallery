import { useState } from "react";
import axios from "axios";
import "./CSS/Contacts.css";

function Contacts() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsError(false);
      setIsLoading(true);

      const response = await axios.post(
        "https://backend-api-deploy.vercel.app/api/v1/users",
        {
          name: userName,
          email: userEmail,
          message: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 5000, // Set a timeout value in milliseconds (e.g., 5000 for 5 seconds)
        }
      );

      setIsLoading(false);

      if (response.status >= 200 && response.status < 300) {
        // Handle success
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setSuccessMessage(response.data.successMessage);
      } else {
        // Handle other status codes (e.g., show an error message)
        console.error("Unsuccessful response:", response);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error("Error submitting the form:", error);

      // More detailed error handling based on the error type
      if (error.response) {
        // The request was made, but the server responded with a status code outside the range of 2xx
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setUserName(value);
        break;
      case "email":
        setUserEmail(value);
        break;
      case "message":
        setUserMessage(value);
        break;
      default:
        break;
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://backend-api-deploy.vercel.app/api/v1/users"
      );
      console.log(response); // Log the entire response for more information

      // แสดงข้อมูลที่ได้รับในคอนโซล
      console.log("Data from server:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);

      // ในกรณีที่ต้องการดูข้อมูลเพิ่มเติมเกี่ยวกับ error
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  // เรียกใช้งานฟังก์ชั่น fetchData
  fetchData();

  return (
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
            value={userName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userEmail}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={userMessage}
            onChange={handleChange}
            required
            style={{ resize: "none" }}
          ></textarea>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        {isError && (
          <p className="error-message">
            There was an error submitting the form. Please try again.
          </p>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}
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
  );
}

export default Contacts;
