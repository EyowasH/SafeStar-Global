import React from "react";
import Feature from "../feature1/Feature";
import "./Feature.css";

const Feature1 = () => (
  <div className="gpt3__whatgpt3 section__margin bg-slate-50" id="wgpt3">
    {/* <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div> */}
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
      FIRE SAFETY EQUIPMENT. Protect what you’ve built.
      </h1>
      <p>Our Import Products</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Fire Protection System"
        text="Fire safety equipment is hopefully something you’ll never have to use. We provide equipment, training and maintenance to ensure that you are ready the day you need it."
      />
      <Feature
        title="Construction Equipment"
        text="We import Industrial Machinery, Equipment and supplies. We also provide mixers, hoists and any construction equipment you need, when you need it."
      />
      <Feature
        title="Industrial Machinery"
        text="We are licensed to import basic Industrial chemicals, and industrial inputs. This includes Iron, Steel, Metals and Non-ferrous Metals."
      />
    </div>
  </div>
);

export default Feature1;
