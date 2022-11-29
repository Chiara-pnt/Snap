import React from "react";
import Data from "./Clients/Data";
import Audio from "./Clients/Audio";
import Maker from "./Clients/Maker";
import Meet from "./Clients/Meet";

const Footer = () => {
  return (
    <div>
      <div>
        <Data />
      </div>
      <div>
        <Audio />
      </div>
      <div>
        <Maker />
      </div>
      <div>
        <Meet />
      </div>
    </div>
  );
};

export default Footer;
