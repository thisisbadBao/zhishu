import React from "react";
import Title from "../components/Title/Title";
import "../styles/Faq.css"

const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="myTitle">
        <Title text="F.A.Q" />
      </div>
      有什么问题请联系我们，联系方式见contact页
    </div>
  );
};

export default FAQ;
