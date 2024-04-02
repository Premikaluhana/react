import React from "react";
import {motion} from "framer-motion"
const Newsletter = () => {
  return (
    <>
    <motion.div className="NL"
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{duration:2 , delay:'1'}}
    >
    <div className="newsletter">
      <h1>Our Newslatter</h1>
      <p>
        Name
        <input type="text" />
      </p>
      <p>
        Lastname
        <input type="text" />
      </p>
      <p>
        Email
        <input type="text" />
      </p>
      <button className="btn3">Sumbit</button> 
    </div>
    </motion.div>
    </>
  );
};

export default Newsletter;
