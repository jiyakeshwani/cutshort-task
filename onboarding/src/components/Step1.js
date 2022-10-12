import React, { useState } from "react";

function Step1() {
  let [fullName, setFullName] = useState("");
  let [displayName, setDisplayName] = useState("");

  function handleChange(event) {
    setFullName(event.target.value);
    setDisplayName(event.target.value);
  }
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
                  circle
                
                "
          >
            <span>2</span>
          </div>
        </div>
        <div id="line"></div>
        <div className="flex ">
          <div
            className="
                  circle
              
                "
          >
            <span>3</span>
          </div>
        </div>
        <div id="line"></div>
        <div className="flex ">
          <div
            className="
                  circle
                
                "
          >
            <span>4</span>
          </div>
        </div>
      </div>
      <div className="intro">
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </div>
      <form className="form">
        <label for="full-name">Full Name</label>
        <input
          onChange={handleChange}
          placeholder="Steve Jobs"
          name="full-name"
          type="text"
          value={fullName}
        />
        <label for="display-name">Display Name</label>
        <input
          onChange={handleChange}
          placeholder="Steve"
          name="display-name"
          type="text"
          value={displayName}
        />
        <button className="btn">Create Workspace</button>
      </form>
    </div>
  );
}

export default Step1;
