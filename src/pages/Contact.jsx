import React from "react";
import PerCard from "../components/About/PerCard";
import "../styles/Contact.css";
import Title from "../components/Title/Title";

const Contact = () => {
  return (
    <div className="contact">
      <Title text="Contributors"></Title>
      <div className="perCards">
        <div className="perCard">
          <PerCard
            imgUrl="https://avatars.githubusercontent.com/u/60834356?v=4"
            name="BadBao"
            mail="thisisbadbao@gmail.com"
          />
        </div>

        <div className="perCard">
          <PerCard
            imgUrl="https://avatars.githubusercontent.com/u/84233223?v=4"
            name="XunRun"
            mail="leibudao@gmail.com"
          />
        </div>

        <div className="perCard">
          <PerCard
            imgUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            name="RainsforYou"
            mail="mingqiu931643464@gmail.com"
          />
        </div>

        <div className="perCard">
          <PerCard
            imgUrl="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            name="BoJie"
            mail="1974069104@qq.com"
          />
        </div>

        <div className="perCard">
          <PerCard
            imgUrl="https://avatars.githubusercontent.com/u/58850527?v=4"
            name="WangJun"
            mail="thoughts.times@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
