import { useState } from "react";
import "./CSS/About.css";

function AboutMYNT() {
  const [isAsmrBoxVisible, setIsAsmrBoxVisible] = useState(false);
  const handleAsmrClick = () => {
    setIsAsmrBoxVisible(!isAsmrBoxVisible);
  };

  return (
    <>
      <div className="information-detail">
        <h1 className="information-head">
          <span className="text-M">M</span>
          <span className="text-Y">Y</span>
          <span className="text-N">N</span>
          <span className="text">T</span>
        </h1>
        {isAsmrBoxVisible && (
          <div className="asmr-box">
            <h1 className="text-what-is">What is ASMR ?</h1>
            <p className="p-asmr">
              {" "}
              &nbsp;<span className="prompt-Bold">ASMR</span> stands for&nbsp;
              <span className="prompt-Bold">A</span>utonomic{" "}
              <span className="prompt-Bold">S</span>ensory{" "}
              <span className="prompt-Bold">M</span>eridian{" "}
              <span className="prompt-Bold">R</span>esponse. A term used to
              describe a tingling, static, or goosebump-like sensation in
              response to a particular auditory or visual stimulus. These
              sensations are said to be distributed throughout the skull or back
              of the neck. and for some people, it spreads to the spine or
              extremities. When experiencing ASMR feelings, some people report
              feelings of relaxation, calm, sleepiness, or well-being.
            </p>
          </div>
        )}

        <div className="container-about-me">
          <p className="about-me">
            about me<span className="dot">.</span>
          </p>
          <p className="details-me">
            Hello, my name is Mint. I'm a content creator based in BKK,
            Thailand. I've enjoyed creativity and the arts.
          </p>
          <p className="details-asmr">
            I use common objects to create ASMR videos to make people feel
            relaxed. Of course my video is for people who like{" "}
            <span
              onClick={handleAsmrClick}
              className={`prompt-Bold text-ASMR ${
                isAsmrBoxVisible ? "asmr-active" : ""
              }`}
            >
              ASMR.
            </span>{" "}
            <br />I hope you like it. Have a good day :)
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMYNT;
