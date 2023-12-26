import React from "react";
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Here you can Level Up Your Business </h1>
      <p>
        Safe Star global partner is a privately owned import-export company in
        Addis Ababa, Ethiopia. We have proudly served organizations in various
        industries. Finding and supplying the tools and inputs they need, when
        they need them.
      </p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg" />
    </div>
  </div>
);

export default Header;
