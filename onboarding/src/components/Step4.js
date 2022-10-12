import React from "react";

function Step4() {
  return (
    <div className="step">
      <div className="logo">
        <img className="logo-img" src="/logo.png" alt="logo" />
        <h1>Eden</h1>
      </div>
      <div className="flex steps">
        <div className="flex ">
          <div
            className="
                  circle-1
               
                "
          >
            <span className="white">1</span>
          </div>
          <div id="line1"></div>
        </div>
        <div className="flex ">
          <div
            className="
                  circle-1
                
                "
          >
            <span>2</span>
          </div>
        </div>
        <div id="line1"></div>
        <div className="flex ">
          <div
            className="
                  circle-1
              
                "
          >
            <span>3</span>
          </div>
        </div>
        <div id="line1"></div>
        <div className="flex ">
          <div
            className="
                  circle-1
                
                "
          >
            <span>4</span>
          </div>
        </div>
      </div>
      <figure className="check-img">
        <img src="/check.png" alt="check" />
      </figure>
      <div className="intro">
        <h2 className="center">Congratulations, Eren!</h2>
        <p>You have completed onboarding, you can start using the Eden!</p>

        <button className="btn">Launch Eden</button>
      </div>
    </div>
  );
}

export default Step4;
