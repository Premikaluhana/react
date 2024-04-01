import React from "react";

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
