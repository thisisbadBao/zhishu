import React from "react";
import "../styles/About.css";
import AboutItem from "../components/About/AboutItem";
import FaqImg from "../assets/faq.png";
import HelpImg from "../assets/help.png";
import ContactImg from "../assets/contact.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  function handleClickHelp() {
    navigate("/About/help");
  }

  function handleClickFaq() {
    navigate("/About/faq");
  }

  function handleClickContact() {
    navigate("/About/contact");
  }

  return (
    <div className="About">
      <h1>About</h1>
      <div className="aboutItems">
        <AboutItem imgUrl={FaqImg} text="F.A.Q" onClick={handleClickFaq} />
        <AboutItem
          imgUrl={HelpImg}
          text="Help Document"
          onClick={handleClickHelp}
        />
        <AboutItem
          imgUrl={ContactImg}
          text="Contact Us"
          onClick={handleClickContact}
        />
      </div>
    </div>
  );
};

export default About;
