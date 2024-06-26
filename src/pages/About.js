import React from "react";
import {motion} from "framer-motion"
const About = () => {
  return (
    <>
      <div className="Abt">
        <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:1}}
         className="about">
          <h2>About Us</h2>
          <p className="about">
            Introducing "MixMaster," the ultimate party sidekick app that
            fetches cocktails from the hilarious Cocktails DB API. With a flick
            of your finger, you'll unlock a treasure trove of enchanting drink
            recipes that'll make your taste buds dance and your friends jump
            with joy. Get ready to shake up your mixology game, one fantastical
            mocktail at a time, and let the laughter and giggles flow!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
